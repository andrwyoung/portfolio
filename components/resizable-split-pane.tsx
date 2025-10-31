"use client";

import { useRef, useState } from "react";

const DRAG_THRESHOLD = 4;
const MIN_SIDEBAR_WIDTH = 400;
const MAX_SIDEBAR_WIDTH = 1000;
const DEFAULT_SIDEBAR_WIDTH = 800;

export default function ResizableSidebar({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const [width, setWidth] = useState(DEFAULT_SIDEBAR_WIDTH); // or any initial default

  const isDragging = useRef(false);
  const [dragging, setDragging] = useState(false);

  const dragStartX = useRef(0);
  const consideredDrag = useRef(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;

    const deltaX = Math.abs(e.clientX - dragStartX.current);
    if (deltaX >= DRAG_THRESHOLD) {
      consideredDrag.current = true;
    }

    console.log("deltaX:", deltaX, "width:", width);
    const newWidth = Math.min(
      Math.max(e.clientX, MIN_SIDEBAR_WIDTH),
      MAX_SIDEBAR_WIDTH
    );
    setWidth(newWidth);
  };

  const handleMouseUp = () => {
    if (!consideredDrag.current) {
      onClose();
    }

    isDragging.current = false;
    consideredDrag.current = false;
    setDragging(false);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const startDragging = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;

    isDragging.current = true;
    setDragging(true);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <aside
      ref={sidebarRef}
      style={{
        width: Math.min(Math.max(width, MIN_SIDEBAR_WIDTH), MAX_SIDEBAR_WIDTH),
      }}
      className="hidden lg:block bg-primary relative h-full select-none"
    >
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label={"Resize sidebar"}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onClose();
          }
        }}
        className={`absolute top-0 right-0 w-1.5 h-full z-50  transition-all duration-200 select-none
         "cursor-col-resize" ${dragging ? "bg-accent" : "hover:bg-accent"}`}
        onMouseDown={(e) => {
          if (!isDragging.current) {
            startDragging(e);
          }
        }}
        title={"Drag to resize. Click to Collapse"}
      />
      {children}
    </aside>
  );
}
