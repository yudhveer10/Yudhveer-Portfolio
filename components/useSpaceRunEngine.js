'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { burstBoxes } from './particles';

const COLORS = {
  bg: '#060E1A',
  tunnelWall: '#0A1628',
  accent: '#00F5D4',
  accent2: '#F6A623',
  text: '#FFFFFF',
  muted: '#4A7A8A',
};

const LANES = [-2, 0, 2];
const CARD_INTERVAL = 4;
const RUNNER_OFFSET = -6;

function makeHexTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = COLORS.tunnelWall;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(0, 245, 212, 0.1)';
  ctx.lineWidth = 2;

  const size = 28;
  const hexH = Math.sqrt(3) * size;
  for (let y = -hexH; y < canvas.height + hexH; y += hexH) {
    for (let x = -size * 2; x < canvas.width + size * 2; x += size * 3) {
      const offsetX = ((Math.round(y / hexH) % 2) * size * 1.5);
      ctx.beginPath();
      for (let i = 0; i < 6; i += 1) {
        const angle = (Math.PI / 3) * i;
        const px = x + offsetX + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(14, 36);
  return texture;
}

function buildTunnelCurve() {
  const points = [];
  for (let i = 0; i <= 120; i += 1) {
    const t = i / 120;
    const z = -500 * t;
    const angle = t * Math.PI * 4.5;
    points.push(
      new THREE.Vector3(
        Math.sin(angle) * 1.3,
        Math.cos(angle * 0.8) * 1.1,
        z
      )
    );
  }
  return new THREE.CatmullRomCurve3(points);
}

function makeCardTexture(card) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 320;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#081321');
  gradient.addColorStop(1, '#0f1f30');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = COLORS.accent2;
  ctx.lineWidth = 6;
  ctx.strokeRect(14, 14, canvas.width - 28, canvas.height - 28);
  ctx.strokeStyle = 'rgba(0,245,212,0.5)';
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56);

  ctx.fillStyle = 'rgba(255,255,255,0.82)';
  ctx.font = '700 34px Orbitron, monospace';
  ctx.fillText(`// ${card.year}`, 42, 72);

  ctx.fillStyle = COLORS.text;
  ctx.font = '700 54px Orbitron, monospace';
  ctx.fillText(card.name, 42, 152);

  ctx.fillStyle = COLORS.accent;
  ctx.font = '600 26px Orbitron, monospace';
  ctx.fillText(card.tag, 42, 208);

  ctx.fillStyle = 'rgba(255,255,255,0.72)';
  ctx.font = '500 20px Rajdhani, sans-serif';
  const lines = wrapText(ctx, card.summary, 42, 256, 428, 24);
  lines.slice(0, 2).forEach((line, index) => ctx.fillText(line, 42, 256 + index * 24));

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function makeRunner() {
  const group = new THREE.Group();

  const material = new THREE.MeshStandardMaterial({
    color: COLORS.accent,
    emissive: COLORS.accent,
    emissiveIntensity: 2,
    transparent: true,
    opacity: 0.96,
    roughness: 0.28,
    metalness: 0.2,
  });

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.52, 1.8, 8), material);
  body.position.y = 1.4;

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.38, 16, 16), material);
  head.position.y = 2.6;

  group.add(body, head);
  group.userData.body = body;
  group.position.set(0, 0, 0);
  return group;
}

export function useSpaceRunEngine({ active, cards, heroRef, onClosed }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const runnerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const portalRingsRef = useRef([]);
  const wallDotsRef = useRef(null);
  const speedLinesRef = useRef(null);
  const activeCardsRef = useRef([]);
  const cardIndexRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const lastTimeRef = useRef(0);
  const runStateRef = useRef({
    phase: 'idle',
    speed: 0,
    distance: 0,
    xp: 0,
    lane: 1,
    isJumping: false,
    wobble: 0,
    closed: false,
  });
  const [hud, setHud] = useState({
    countdown: '',
    phase: 'idle',
    distance: 0,
    xp: 0,
    yearLabel: '// READY',
    floatingXp: '',
    summary: null,
  });

  const cardPool = useMemo(() => cards, [cards]);

  useEffect(() => {
    if (!active || !mountRef.current) return undefined;

    runStateRef.current = {
      phase: 'idle',
      speed: 0,
      distance: 0,
      xp: 0,
      lane: 1,
      isJumping: false,
      wobble: 0,
      closed: false,
      collected: 0,
    };
    cardIndexRef.current = 0;
    lastSpawnRef.current = 0;
    lastTimeRef.current = 0;
    activeCardsRef.current = [];
    setHud({
      countdown: '',
      phase: 'idle',
      distance: 0,
      xp: 0,
      yearLabel: '// READY',
      floatingXp: '',
      summary: null,
    });

    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(COLORS.bg);
    scene.fog = new THREE.Fog(COLORS.bg, 18, 170);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 900);
    camera.position.set(0, 1.2, 10);
    camera.lookAt(0, 1, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight('#7dd7ff', 0.72));
    const keyLight = new THREE.PointLight(COLORS.accent, 7, 50);
    keyLight.position.set(0, 6, 6);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight('#ffffff', 2.4, 80);
    fillLight.position.set(0, 2, -8);
    scene.add(fillLight);

    const tunnelTexture = makeHexTexture();
    const tunnelCurve = buildTunnelCurve();
    const tunnel = new THREE.Mesh(
      new THREE.TubeGeometry(tunnelCurve, 220, 6.4, 12, false),
      new THREE.MeshStandardMaterial({
        color: COLORS.tunnelWall,
        map: tunnelTexture,
        side: THREE.BackSide,
        emissive: COLORS.accent,
        emissiveIntensity: 0.15,
        roughness: 0.76,
        metalness: 0.14,
      })
    );
    scene.add(tunnel);

    const runner = makeRunner();
    runner.position.y = 6;
    scene.add(runner);
    runnerRef.current = runner;

    gsap.to(runner.rotation, {
      x: 0.05,
      duration: 0.15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    const dotGeometry = new THREE.SphereGeometry(0.07, 6, 6);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: COLORS.accent });
    const dots = new THREE.InstancedMesh(dotGeometry, dotMaterial, 180);
    const dotDummy = new THREE.Object3D();
    const dotMeta = [];
    for (let i = 0; i < 180; i += 1) {
      const side = i % 2 === 0 ? -1 : 1;
      const meta = {
        x: side * (4.7 + Math.random() * 0.8),
        y: (Math.random() - 0.5) * 8,
        z: -Math.random() * 160,
        scale: 0.5 + Math.random() * 1.2,
      };
      dotMeta.push(meta);
      dotDummy.position.set(meta.x, meta.y, meta.z);
      dotDummy.scale.setScalar(meta.scale);
      dotDummy.updateMatrix();
      dots.setMatrixAt(i, dotDummy.matrix);
    }
    dots.instanceMatrix.needsUpdate = true;
    wallDotsRef.current = { mesh: dots, meta: dotMeta, dummy: dotDummy };
    scene.add(dots);

    const lineGeometry = new THREE.BoxGeometry(0.02, 0.02, 1.2);
    const lineMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.92 });
    const speedLines = new THREE.InstancedMesh(lineGeometry, lineMaterial, 200);
    const lineDummy = new THREE.Object3D();
    const lineMeta = [];
    for (let i = 0; i < 200; i += 1) {
      const meta = resetSpeedLine(camera.position.z);
      lineMeta.push(meta);
      lineDummy.position.set(meta.x, meta.y, meta.z);
      lineDummy.scale.set(meta.scaleX, meta.scaleY, meta.scaleZ);
      lineDummy.lookAt(meta.x * 3, meta.y * 3, meta.z - 12);
      lineDummy.updateMatrix();
      speedLines.setMatrixAt(i, lineDummy.matrix);
    }
    speedLines.instanceMatrix.needsUpdate = true;
    speedLinesRef.current = { mesh: speedLines, meta: lineMeta, dummy: lineDummy };
    scene.add(speedLines);

    const ringGeometry = new THREE.TorusGeometry(5.3, 0.09, 14, 60);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.accent,
      emissive: COLORS.accent,
      emissiveIntensity: 1.8,
      transparent: true,
      opacity: 0.82,
    });
    const rings = [];
    for (let i = 0; i < 24; i += 1) {
      const ring = new THREE.Mesh(ringGeometry, ringMaterial.clone());
      ring.position.set(Math.sin(i * 0.45) * 0.9, Math.cos(i * 0.3) * 0.8, -i * 20);
      scene.add(ring);
      rings.push(ring);
    }
    portalRingsRef.current = rings;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        requestExit();
        return;
      }
      if (runStateRef.current.phase !== 'running') return;
      if (event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') moveLane(-1);
      if (event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') moveLane(1);
      if (event.key === 'ArrowUp' || event.key.toLowerCase() === 'w') jumpRunner();
    };

    let touchStart = null;
    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      touchStart = { x: touch.clientX, y: touch.clientY };
    };
    const handleTouchEnd = (event) => {
      if (!touchStart || runStateRef.current.phase !== 'running') return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStart.x;
      const dy = touch.clientY - touchStart.y;
      if (Math.abs(dy) > Math.abs(dx) && dy < -30) jumpRunner();
      else if (dx > 30) moveLane(1);
      else if (dx < -30) moveLane(-1);
      touchStart = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    mount.addEventListener('touchstart', handleTouchStart, { passive: true });
    mount.addEventListener('touchend', handleTouchEnd, { passive: true });

    heroRef?.current && gsap.to(heroRef.current, { opacity: 0, duration: 0.6, ease: 'power2.out' });
    playLaunch(camera, runner, scene);

    const animate = (time) => {
      animationFrameRef.current = window.requestAnimationFrame(animate);
      const delta = Math.min((time - (lastTimeRef.current || time)) / 1000, 0.033);
      lastTimeRef.current = time;
      const state = runStateRef.current;

      tunnelTexture.offset.y -= delta * (state.phase === 'running' ? 0.22 : 0.06);

      if (state.phase === 'dive' || state.phase === 'running' || state.phase === 'exiting') {
        state.wobble += delta * Math.PI * 4;
        const targetX = Math.sin(state.wobble) * 0.3;
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.08);
      }

      runner.position.z = camera.position.z + RUNNER_OFFSET;

      if (state.phase === 'running' || state.phase === 'exiting') {
        camera.position.z -= state.speed * delta * 60;
        state.distance += state.speed * delta * 60 * 7;
        setHud((prev) => ({ ...prev, distance: state.distance, xp: state.xp }));
      }

      updateSpeedLines(camera.position.z, delta);
      updateDots(camera.position.z);
      updateRings(camera.position.z);
      updateCards(delta, camera.position.z, runner.position.z);

      camera.lookAt(camera.position.x * 0.35, 1.1, camera.position.z - 18);
      renderer.render(scene, camera);
    };

    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      mount.removeEventListener('touchstart', handleTouchStart);
      mount.removeEventListener('touchend', handleTouchEnd);
      gsap.killTweensOf(camera.position);
      gsap.killTweensOf(runner.position);
      gsap.killTweensOf(runner.rotation);

      activeCardsRef.current.forEach(disposeCard);
      renderer.dispose();
      tunnel.geometry.dispose();
      tunnel.material.dispose();
      tunnelTexture.dispose();
      dotGeometry.dispose();
      dotMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      ringGeometry.dispose();
      rings.forEach((ring) => ring.material.dispose());
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      heroRef?.current && gsap.to(heroRef.current, { opacity: 1, duration: 0.8, ease: 'power2.out' });
    };

    function moveLane(direction) {
      const state = runStateRef.current;
      const nextLane = THREE.MathUtils.clamp(state.lane + direction, 0, LANES.length - 1);
      if (nextLane === state.lane) return;
      state.lane = nextLane;
      gsap.to(runner.position, { x: LANES[nextLane], duration: 0.2, ease: 'power2.out' });
    }

    function jumpRunner() {
      const state = runStateRef.current;
      if (state.isJumping) return;
      state.isJumping = true;
      const tl = gsap.timeline({
        onComplete: () => {
          state.isJumping = false;
        },
      });
      tl.to(runner.position, { y: 1.8, duration: 0.24, ease: 'power2.out' });
      tl.to(runner.position, { y: 0, duration: 0.26, ease: 'power2.in' });
    }

    function playLaunch() {
      runStateRef.current.phase = 'launch';
      setHud((prev) => ({ ...prev, phase: 'launch', countdown: '3', summary: null, yearLabel: '// BOOTING' }));

      const tl = gsap.timeline();
      ['3', '2', '1', 'RUN'].forEach((label, index) => {
        tl.call(() => {
          setHud((prev) => ({ ...prev, countdown: label }));
          gsap.fromTo(
            '.space-run-countdown',
            { scale: 0.5, opacity: 0 },
            { scale: 1.2, opacity: 1, duration: 0.18, ease: 'power2.out' }
          );
          gsap.to('.space-run-countdown', { opacity: 0, duration: 0.16, delay: 0.24, ease: 'power1.in' });
        }, null, index * 0.4);
      });

      tl.call(() => {
        runStateRef.current.phase = 'spawn';
        gsap.to(runner.position, {
          y: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
          onComplete: () => {
            burstBoxes({ scene, origin: runner.position.clone(), count: 30, duration: 0.8 });
          },
        });
      }, null, 1.5);

      tl.call(() => {
        runStateRef.current.phase = 'dive';
        setHud((prev) => ({ ...prev, countdown: '', phase: 'dive', yearLabel: `// ${cardPool[0]?.year || 'RUN'}` }));
        gsap.to(camera.position, {
          z: -80,
          duration: 1.5,
          ease: 'power3.in',
          onComplete: () => {
            runStateRef.current.phase = 'running';
            runStateRef.current.speed = 0.15;
            lastSpawnRef.current = performance.now() / 1000 - CARD_INTERVAL;
            setHud((prev) => ({ ...prev, phase: 'running' }));
          },
        });
      }, null, 2.5);
    }

    function updateSpeedLines(cameraZ, delta) {
      if (!speedLinesRef.current) return;
      const { mesh, meta, dummy } = speedLinesRef.current;
      meta.forEach((item, index) => {
        item.z += delta * (runStateRef.current.phase === 'dive' ? 150 : 60);
        if (item.z > cameraZ + 2) Object.assign(item, resetSpeedLine(cameraZ - 50));
        dummy.position.set(item.x, item.y, item.z);
        dummy.scale.set(item.scaleX, item.scaleY, item.scaleZ);
        dummy.lookAt(item.x * 3, item.y * 3, item.z - 12);
        dummy.updateMatrix();
        mesh.setMatrixAt(index, dummy.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
    }

    function updateDots(cameraZ) {
      if (!wallDotsRef.current) return;
      const { mesh, meta, dummy } = wallDotsRef.current;
      meta.forEach((item, index) => {
        if (item.z > cameraZ + 8) item.z = cameraZ - 150 - Math.random() * 30;
        item.z += runStateRef.current.speed * 1.8;
        dummy.position.set(item.x, item.y, item.z);
        dummy.scale.setScalar(item.scale);
        dummy.updateMatrix();
        mesh.setMatrixAt(index, dummy.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
    }

    function updateRings(cameraZ) {
      portalRingsRef.current.forEach((ring) => {
        ring.rotation.z += 0.01;
        if (ring.position.z > cameraZ + 10) ring.position.z = cameraZ - 220 - Math.random() * 40;
      });
    }

    function updateCards(delta, cameraZ, runnerZ) {
      if (runStateRef.current.phase === 'running') {
        const now = performance.now() / 1000;
        if (now - lastSpawnRef.current >= CARD_INTERVAL) {
          spawnCard(cameraZ - 80);
          lastSpawnRef.current = now;
        }
      }

      activeCardsRef.current = activeCardsRef.current.filter((card) => {
        card.mesh.rotation.y += 0.01;
        card.mesh.position.z += runStateRef.current.speed;

        if (!card.collected && Math.abs(card.mesh.position.z - runnerZ) < 8) {
          setHud((prev) => ({ ...prev, yearLabel: `// ${card.data.year}` }));
        }

        if (!card.collected && card.laneIndex === runStateRef.current.lane && Math.abs(card.mesh.position.z - runnerZ) < 1.2) {
          card.collected = true;
          runStateRef.current.xp += card.data.xp;
          runStateRef.current.collected += 1;
          setHud((prev) => ({
            ...prev,
            xp: runStateRef.current.xp,
            yearLabel: `// ${card.data.year}`,
            floatingXp: `+${card.data.xp} XP`,
          }));
          gsap.delayedCall(0.7, () => setHud((prev) => ({ ...prev, floatingXp: '' })));
          burstBoxes({ scene, origin: card.mesh.position.clone(), count: 24, duration: 0.72, colorB: COLORS.accent2 });
          gsap.to(card.mesh.scale, { x: 2, y: 2, z: 2, duration: 0.2, ease: 'power2.out' });
          gsap.to(card.material, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => disposeCard(card),
          });
        }

        if (card.mesh.position.z > cameraZ + 5) {
          disposeCard(card);
          return false;
        }
        return card.mesh.parent;
      });
    }

    function spawnCard(z) {
      const data = cardPool[cardIndexRef.current % cardPool.length];
      cardIndexRef.current += 1;
      const laneIndex = data.lane + 1;
      const texture = makeCardTexture(data);
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide });
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 2), material);
      plane.position.set(LANES[laneIndex], 1.45 + Math.random() * 0.35, z);
      const frame = new THREE.Mesh(
        new THREE.PlaneGeometry(3.35, 2.15),
        new THREE.MeshBasicMaterial({ color: COLORS.accent, transparent: true, opacity: 0.18 })
      );
      frame.position.z = -0.01;
      plane.add(frame);
      scene.add(plane);
      activeCardsRef.current.push({ mesh: plane, data, texture, material, laneIndex, frame, collected: false });
    }

    function disposeCard(card) {
      if (!card.mesh.parent) return;
      scene.remove(card.mesh);
      card.mesh.geometry.dispose();
      card.material.dispose();
      card.texture.dispose();
      card.frame.geometry.dispose();
      card.frame.material.dispose();
    }
  }, [active, cardPool, heroRef, onClosed]);

  const requestExit = () => {
    const state = runStateRef.current;
    if (state.phase === 'summary') {
      runStateRef.current.phase = 'closed';
      onClosed?.();
      return;
    }
    if (state.phase === 'closed' || state.closed) return;
    state.closed = true;
    state.phase = 'exiting';
    setHud((prev) => ({ ...prev, phase: 'exiting', countdown: '', floatingXp: '' }));
    gsap.to(state, {
      speed: 0,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        setHud((prev) => ({
          ...prev,
          phase: 'summary',
          summary: {
            distance: state.distance,
            xp: state.xp,
            collected: state.collected,
          },
        }));
        const camera = cameraRef.current;
        camera && gsap.fromTo(camera.position, { y: camera.position.y }, { y: camera.position.y + 0.4, duration: 0.8, yoyo: true, repeat: 1 });
        gsap.delayedCall(1.9, () => {
          runStateRef.current.phase = 'closed';
          onClosed?.();
        });
      },
    });
  };

  return {
    mountRef,
    hud,
    requestExit,
  };
}

function resetSpeedLine(cameraZ) {
  const angle = Math.random() * Math.PI * 2;
  const radius = Math.random() * 3.5;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    z: cameraZ - 40 - Math.random() * 120,
    scaleX: 0.8,
    scaleY: 0.8,
    scaleZ: 0.8 + Math.random() * 2.2,
  };
}
