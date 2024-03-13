import { Input } from "@/components/Input";
import { Card } from "@/components/card";
import { Header } from "@/components/header";
import { TextsProvider } from "@/translation";
import Image from "next/image";

export default function Home() {
  const texts = TextsProvider.get();

  return (
    <main className="pt-4">
      <Header />
      <section className="mx-6 mt-18 border-b border-gray-850 text-center md:mx-28 md:flex md:justify-between md:text-start">
        <div className="flex flex-col items-center gap-4 md:place-items-start">
          <h1 className="max-w-[602px] text-4.5xl font-bold text-gray-100 md:mt-9 md:text-5.5xl">
            {texts.FIRST_S_TITLE}
          </h1>
          <p className="mb-4 max-w-[492px] text-gray-200 md:text-1.5xl">
            {texts.FIRST_S_SUB}
          </p>
          <Input />
          <div className="my-4 flex w-full max-w-80 items-center justify-between">
            <Image
              alt="Google"
              width={82}
              height={28}
              src="images/google.svg"
            />
            <Image
              alt="Facebook"
              width={107}
              height={23}
              src="images/facebook.svg"
              className="mb-1"
            />
            <Image
              alt="Instagram"
              width={105}
              height={29}
              src="images/instagram.svg"
              className="mt-1"
            />
          </div>
          <div className="relative flex w-[272px] items-center justify-between">
            <Image
              alt="rounded avatar"
              width={40}
              height={40}
              src="images/person_rounded_1.svg"
            />
            <Image
              alt="rounded avatar"
              width={40}
              height={40}
              src="images/person_rounded_2.svg"
              className="absolute left-7"
            />
            <Image
              alt="rounded avatar"
              width={40}
              height={40}
              src="images/person_rounded_3.svg"
              className="absolute left-14"
            />
            <Image
              alt="rounded avatar"
              width={40}
              height={40}
              src="images/person_rounded_4.svg"
              className="absolute left-[84px]"
            />
            <div className="flex gap-1 text-lg">
              <Image
                alt="star rating"
                width={19}
                height={19}
                src="images/star.svg"
              />
              <span className="font-semibold text-gray-100">{"(99K"}</span>
              <p className="font-normal text-gray-700">{texts.REVIEWS}</p>
              <span className="-ml-1 text-gray-100">{")"}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-5 overflow-hidden py-18 sm:flex-row md:justify-normal md:pb-24 md:pl-4 md:pt-0">
          <Image
            priority
            alt="woman"
            width={480}
            height={636}
            src="images/desktop_main_img.svg"
            className="hidden sm:block"
          />
          <Image
            alt="woman_aux"
            width={91}
            height={636}
            src="images/desktop_aux_img.svg"
            className="hidden sm:block"
          />
          <Image
            priority
            alt="woman"
            width={640}
            height={640}
            src="images/mobile_main_img.svg"
            className="sm:hidden"
          />
          <Image
            alt="woman_aux"
            width={640}
            height={200}
            src="images/mobile_aux_img.svg"
            className="sm:hidden"
          />
        </div>
      </section>
      <section className="mx-6 grid gap-16 border-b border-gray-850 py-18 md:mx-28">
        <div className="flex flex-col justify-between gap-4 text-center lg:flex-row lg:gap-0 lg:text-start">
          <h2 className="track text-3xl font-bold text-gray-100 md:text-4.5xl max-w-2xl">
            {texts.SECOND_S_TITLE}
          </h2>
          <p className="font-normal text-gray-200">{texts.SECOND_S_SUB}</p>
        </div>
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          <Card
            src="images/user.svg"
            title={texts.CARD_1_TITLE}
            text={texts.CARD_1_TEXT}
          />
          <Card
            src="images/wallet.svg"
            title={texts.CARD_2_TITLE}
            text={texts.CARD_2_TEXT}
          />
          <Card
            src="images/checked.svg"
            title={texts.CARD_3_TITLE}
            text={texts.CARD_3_TEXT}
          />
          <Card
            src="images/boost.svg"
            title={texts.CARD_4_TITLE}
            text={texts.CARD_4_TEXT}
          />
        </div>
      </section>
      <footer></footer>
    </main>
  );
}
