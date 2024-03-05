"use client";

import { useRef, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

export function MenuHamburger({ children }: IProps) {
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  function toggleNavVisible() {
    if (menuButtonRef.current != null) {
      const classList = menuButtonRef.current.classList;
      classList.toggle("is-active");
      setIsActive(prev => !prev);
    }
  }

  return (
    <>
      <button
        ref={menuButtonRef}
        onClick={toggleNavVisible}
        className="hamb--squeeze z-10 h-6 w-7 cursor-pointer transition-all duration-1000 hover:opacity-90 sm:hidden"
        type="button"
      >
        <span className="hamb-box">
          <span className="hamb-inner"></span>
        </span>
      </button>
      <nav
        className={`${isActive ? "w-full" : "w-0"} absolute right-2 flex h-[62px] items-center justify-end gap-4 overflow-hidden rounded-full border-gray-850 bg-gray-900 pr-12 transition-all duration-1000 sm:w-full sm:pr-5 md:h-18 md:max-w-96`}
      >
        {children}
      </nav>
    </>
  );
}
