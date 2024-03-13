import Image from "next/image";

interface IProps {
  src: string;
  title: string;
  text: string;
}

export const Card = ({ src, text, title }: IProps) => (
  <article className="flex max-w-[264px] flex-col items-center text-center lg:items-start lg:text-start">
    <Image src={src} alt="benefits" width={48} height={48} />
    <h3 className="text-lg font-bold text-gray-100">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </article>
);
