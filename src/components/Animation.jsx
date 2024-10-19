import React, { useEffect, useRef } from 'react';

const Animation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    let points = [];

    // ایجاد نقاط تصادفی برای شبکه
    for (let i = 0; i < 50; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      });
    }

    const update = () => {
      context.clearRect(0, 0, width, height);

      // حرکت و رسم نقاط
      points.forEach((point, idx) => {
        point.x += point.vx;
        point.y += point.vy;

        // جلوگیری از خروج نقاط از صفحه
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;

        // رسم دایره برای هر نقطه
        context.beginPath();
        context.arc(point.x, point.y, 3, 0, Math.PI * 2);
        context.fillStyle = '#00BFFF';
        context.fill();
        context.closePath();

        // رسم خطوط بین نقاط نزدیک
        points.forEach((otherPoint) => {
          const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
          if (distance < 150) {
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(otherPoint.x, otherPoint.y);
            context.strokeStyle = `rgba(0, 191, 255, ${1 - distance / 150})`;
            context.stroke();
            context.closePath();
          }
        });
      });

      requestAnimationFrame(update);
    };

    update();

    // اندازه‌گیری دوباره صفحه در صورت تغییر سایز
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full absolute -z-10"></canvas>;
};

export default Animation;
