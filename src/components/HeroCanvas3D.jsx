import React, { useEffect, useRef } from 'react';

export default function HeroCanvas3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Particles Sphere (Carbon Nanostructure lattice)
    const particleCount = 140;
    const sphereRadius = Math.min(width, height) * 0.28;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      particles.push({
        x: sphereRadius * Math.cos(theta) * Math.sin(phi),
        y: sphereRadius * Math.sin(theta) * Math.sin(phi),
        z: sphereRadius * Math.cos(phi),
        baseX: 0,
        baseY: 0,
        baseZ: 0,
        size: Math.random() * 2 + 1.5,
      });
    }

    // Atmospheric Smoke Particles
    const smokeCount = 45;
    const smokeParticles = [];
    for (let i = 0; i < smokeCount; i++) {
      smokeParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 40 + 20,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        alpha: Math.random() * 0.15 + 0.05,
      });
    }

    let angleX = 0.003;
    let angleY = 0.005;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX = (e.clientX - cx) * 0.00005;
      mouseY = (e.clientY - cy) * 0.00005;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Ambient Smoke
      smokeParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -50) p.y = height + 50;
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(139, 195, 74, ${p.alpha * 0.5})`);
        grad.addColorStop(0.5, `rgba(28, 28, 28, ${p.alpha})`);
        grad.addColorStop(1, 'rgba(10, 10, 10, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      const centerX = width / 2;
      const centerY = height / 2;

      const rotX = angleX + mouseY;
      const rotY = angleY + mouseX;

      // Project & Render 3D Carbon Lattice
      const projected = particles.map((p) => {
        // Rotate Y
        let x1 = p.x * Math.cos(rotY) - p.z * Math.sin(rotY);
        let z1 = p.z * Math.cos(rotY) + p.x * Math.sin(rotY);
        // Rotate X
        let y1 = p.y * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = z1 * Math.cos(rotX) + p.y * Math.sin(rotX);

        p.x = x1;
        p.y = y1;
        p.z = z2;

        const scale = 400 / (400 + z2);
        const px = x1 * scale + centerX;
        const py = y1 * scale + centerY;
        const alpha = Math.max(0.15, (z2 + sphereRadius) / (sphereRadius * 2));

        return { px, py, z: z2, alpha, scale };
      });

      // Draw Bonds / Lines between close carbon nodes
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 65) {
            const lineAlpha = (1 - dist / 65) * 0.35 * Math.min(projected[i].alpha, projected[j].alpha);
            ctx.strokeStyle = `rgba(139, 195, 74, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      projected.forEach((p) => {
        const radius = Math.max(1, (p.z + sphereRadius) / (sphereRadius * 0.4));
        ctx.beginPath();
        ctx.arc(p.px, p.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.z > 0 ? '#8BC34A' : '#C0C0C0';
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Eco-green glow around front nodes
        if (p.z > sphereRadius * 0.3) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(139, 195, 74, 0.15)';
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
