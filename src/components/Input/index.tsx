import { TextsProvider } from "@/translation";
import { Button } from "../button";

export function Input() {
  const texts = TextsProvider.get();

  return (
    <div className="relative flex h-16 w-full max-w-lg items-center justify-between gap-4 rounded-full border border-gray-850 bg-gray-900 px-2 md:h-18">
      <input
        className="ml-5 w-full bg-gray-900 text-gray-100 outline-0"
        placeholder={texts.TYPE_YOUR_EMAIL}
      />
      <Button variant={{ type: "contained" }}>{texts.FREE_TRIAL}</Button>
    </div>
  );
}
