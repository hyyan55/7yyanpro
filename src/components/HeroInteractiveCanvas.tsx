import React, { useEffect, useRef } from 'react';

export const HeroInteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    // Track mouse / touch position
    const pointer = {
      x: width * 0.5,
      y: height * 0.4,
      targetX: width * 0.5,
      targetY: height * 0.4,
      isHovered: false,
    };

    // Node grid for subtle geometry
    interface Node {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      phase: number;
    }

    const cols = Math.floor(width / 90);
    const rows = Math.floor(height / 90);
    const nodes: Node[] = [];

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const baseX = (i + 0.5) * (width / cols);
        const baseY = (j + 0.5) * (height / rows);
        nodes.push({
          baseX,
          baseY,
          x: baseX,
          y: baseY,
          vx: 0,
          vy: 0,
          size: Math.random() * 1.5 + 1,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.targetX = e.clientX - rect.left;
      pointer.targetY = e.clientY - rect.top;
      pointer.isHovered = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        pointer.targetX = e.touches[0].clientX - rect.left;
        pointer.targetY = e.touches[0].clientY - rect.top;
        pointer.isHovered = true;
      }
    };

    const handleMouseLeave = () => {
      pointer.isHovered = false;
      pointer.targetX = width * 0.5;
      pointer.targetY = height * 0.4;
    };

    window.addEventListener('resize', handleResize);
    const parent = canvas.parentElement;
    parent?.addEventListener('mousemove', handleMouseMove);
    parent?.addEventListener('touchmove', handleTouchMove, { passive: true });
    parent?.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth pointer interpolation
      pointer.x += (pointer.targetX - pointer.x) * 0.06;
      pointer.y += (pointer.targetY - pointer.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital rings around pointer
      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 140, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.05)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(pointer.x, pointer.y, 60, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.09)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Calm organic breathing offset
        const breatheX = Math.cos(time + node.phase) * 6;
        const breatheY = Math.sin(time + node.phase) * 6;

        // Interaction with pointer
        const dx = pointer.x - (node.baseX + breatheX);
        const dy = pointer.y - (node.baseY + breatheY);
        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxDist = 180;
        let repelX = 0;
        let repelY = 0;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 18;
          repelX = (dx / dist) * force;
          repelY = (dy / dist) * force;
        }

        node.x = node.baseX + breatheX + repelX;
        node.y = node.baseY + breatheY + repelY;

        // Connect nearby nodes with ultra-light lines
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const ndx = node.x - nodeB.x;
          const ndy = node.y - nodeB.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (nDist < 100) {
            const alpha = (1 - nDist / 100) * 0.08;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw dot
        const dotAlpha = dist < maxDist ? 0.45 : 0.18;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${dotAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      parent?.removeEventListener('mousemove', handleMouseMove);
      parent?.removeEventListener('touchmove', handleTouchMove);
      parent?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-70"
      aria-hidden="true"
    />
  );
};
