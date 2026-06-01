import { useEffect, useRef } from 'react';

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      alpha: number;
      color: string;
      seed: number;
    }> = [];

    const colors = [
      'rgba(255, 214, 0, 0.35)', // Yellow glow
      'rgba(255, 45, 146, 0.25)', // Pink glow
      'rgba(0, 229, 255, 0.25)',  // Cyan glow
      'rgba(123, 47, 247, 0.2)'   // Purple glow
    ];

    const init = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 60);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.6,
          speedY: -(Math.random() * 0.25 + 0.1),
          alpha: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          seed: Math.random() * 100,
        });
      }
    };

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      init();
    };

    // Watch resize of parent element as specified in the guidelines
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    handleResize();

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Subtle drift movement
        p.y += p.speedY;
        p.x += Math.sin(time * 0.001 + p.seed) * 0.15;

        // Mouse displacement logic (gentle push away)
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const distance = Math.hypot(dx, dy);
        if (distance < 150) {
          const force = (150 - distance) / 150;
          p.x += (dx / distance) * force * 1.2;
          p.y += (dy / distance) * force * 1.2;
        }

        // Loop bounds
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas.parentElement) {
        resizeObserver.unobserve(canvas.parentElement);
      }
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      id="bg-particles-canvas"
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
