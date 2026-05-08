import * as THREE from 'three';
import { gsap } from 'gsap';

export function burstBoxes({
  scene,
  origin = new THREE.Vector3(),
  count = 30,
  spread = 1.8,
  duration = 0.8,
  colorA = '#ffffff',
  colorB = '#00F5D4',
}) {
  const geometry = new THREE.BoxGeometry(0.08, 0.08, 0.08);
  const group = new THREE.Group();
  scene.add(group);

  const particles = Array.from({ length: count }, (_, index) => {
    const material = new THREE.MeshBasicMaterial({
      color: index % 2 === 0 ? colorA : colorB,
      transparent: true,
      opacity: 0.95,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(origin);
    group.add(mesh);

    const velocity = new THREE.Vector3(
      (Math.random() - 0.5) * spread,
      Math.random() * spread * 0.9,
      (Math.random() - 0.5) * spread
    );

    gsap.to(mesh.position, {
      x: origin.x + velocity.x,
      y: origin.y + velocity.y,
      z: origin.z + velocity.z,
      duration,
      ease: 'power2.out',
    });

    gsap.to(material, {
      opacity: 0,
      duration,
      ease: 'power2.out',
    });

    gsap.to(mesh.scale, {
      x: 0.01,
      y: 0.01,
      z: 0.01,
      duration,
      ease: 'power2.in',
    });

    return { mesh, material };
  });

  gsap.delayedCall(duration + 0.05, () => {
    particles.forEach(({ mesh, material }) => {
      group.remove(mesh);
      material.dispose();
    });
    geometry.dispose();
    scene.remove(group);
  });
}
