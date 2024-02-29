"use client";

import { useRef } from "react";

export function MenuHamburger() {
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  function toggleNavVisible() {
    if (menuButtonRef.current != null) {
      const classList = menuButtonRef.current.classList;
      classList.toggle("is-active");
    }
  }

  return (
    <button
      ref={menuButtonRef}
      onClick={() => {
        toggleNavVisible();
      }}
      className="hamb--squeeze hamb--squeeze h-6 w-7 cursor-pointer hover:opacity-90 sm:hidden"
      type="button"
    >
      <span className="hamb-box">
        <span className="hamb-inner"></span>
      </span>
    </button>
  );
}
