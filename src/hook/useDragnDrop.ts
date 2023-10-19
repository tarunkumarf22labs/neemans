import { useEffect, useState, useRef } from "uelements";

export function useDragnDrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: MouseEvent) => {
    e.stopPropagation();
    setDragging(true);
    setPos({ x: e.clientX, y: e.clientY });
  };

  const handleTouchStart = (e: TouchEvent) => {
    e.stopPropagation();
    setPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    setDragging(true);
  };

  const handleMouseUp = (e: MouseEvent | TouchEvent) => {
    e.stopPropagation();
    setDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.stopPropagation();
    if (dragging) {
      const el = containerRef.current;
      const newPos = {
        x: pos.x - e.clientX,
        y: pos.y - e.clientY,
      };
      const updatedPos = {
        x: el!.offsetLeft - newPos.x,
        y: el!.offsetTop - newPos.y,
      };

      const maxMoveX = Math.max(0, document.body.clientWidth - el!.offsetWidth);
      const maxMoveY = Math.max(0, window.innerHeight - el!.offsetHeight);

      if (updatedPos.x < 0) updatedPos.x = 0;
      if (updatedPos.y < 0) updatedPos.y = 0;
      if (updatedPos.x > maxMoveX) updatedPos.x = maxMoveX;
      if (updatedPos.y > maxMoveY) updatedPos.y = maxMoveY;

      el!.style.left = `${updatedPos.x}px`;
      el!.style.top = `${updatedPos.y}px`;
      setPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.stopPropagation();
    if (dragging) {
      const el = containerRef.current!;
      const newPos = {
        x: pos.x - e.touches[0].clientX,
        y: pos.y - e.touches[0].clientY,
      };
      const updatedPos = {
        x: el.offsetLeft - newPos.x,
        y: el.offsetTop - newPos.y,
      };

      const maxMoveX = Math.max(0, document.body.clientWidth - el.offsetWidth);
      const maxMoveY = Math.max(0, window.innerHeight - el.offsetHeight);

      if (updatedPos.x < 0) updatedPos.x = 0;
      if (updatedPos.y < 0) updatedPos.y = 0;
      if (updatedPos.x > maxMoveX) updatedPos.x = maxMoveX;
      if (updatedPos.y > maxMoveY) updatedPos.y = maxMoveY;

      el.style.left = `${updatedPos.x}px`;
      el.style.top = `${updatedPos.y}px`;
      setPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousedown", handleMouseDown, { passive: true });
      document.addEventListener("mouseup", handleMouseUp, { passive: true });
      document.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      });

      el.addEventListener("touchstart", handleTouchStart, { passive: true });
      document.addEventListener("touchend", handleMouseUp, { passive: true });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: true,
      });

      return () => {
        el.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("mousemove", handleMouseMove);

        el.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchend", handleMouseUp);
        document.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [dragging, pos]);

  return {
    containerRef,
  };
}