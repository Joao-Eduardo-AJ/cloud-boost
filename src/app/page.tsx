import { MenuHamburger } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-7 pt-4">
      <header>
        <div className="border-gray-850 md:h-18 flex h-16 w-full items-center justify-between rounded-full border bg-gray-900 px-6">
          <Image
            alt="logo"
            width={167}
            height={31}
            src="images/logo.svg"
            className="h-7 w-36 md:h-8 md:w-44"
          />
          <MenuHamburger />
        </div>
      </header>
      <section></section>
      <footer></footer>
    </main>
  );
}
