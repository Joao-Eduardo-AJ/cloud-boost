import Image from "next/image";
import { MenuHamburger } from "..";
import { TextsProvider } from "@/translation";
import { Button } from "../button";

export function Header() {
  const texts = TextsProvider.get();

  return (
    <header className="w-full sm:px-7">
      <div className="relative flex h-16 w-full items-center justify-between overflow-hidden rounded-full border border-gray-850 bg-gray-900 px-6 md:h-18">
        <Image
          alt="logo"
          width={167}
          height={31}
          src="images/logo.svg"
          className="h-7 w-36 md:h-8 md:w-44"
        />
        <MenuHamburger>
          <div className="group flex gap-2">
            <Image
              alt={texts.NEED_SOME_HELP}
              width={18}
              height={18}
              src="images/help.svg"
              className="transition-all duration-700 ease-in-out group-hover:rotate-[360deg] group-hover:scale-125"
            />
            <Button variant={{ type: "text" }}>{texts.NEED_SOME_HELP}</Button>
          </div>
          <Button variant={{ type: "nav" }}>{texts.FREE_TRIAL}</Button>
        </MenuHamburger>
      </div>
    </header>
  );
}
