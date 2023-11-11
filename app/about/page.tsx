import { title } from "@/components/primitives";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center sm:gap-12 gap-6 sm:py-8 md:py-10">
      <div className="flex flex-row max-w-4xl justify-center w-full px-6">
        <div className="w-2/3 flex flex-col gap-4 pr-8">
          <p className="text-2xl font-semibold mb-2">
            Hi, I&apos;m Adam Nemeth, a junior Front-End Developer. 💻
          </p>
          <p>I&apos;m a constantly learning </p>
          <p>Here are a few of the things I&apos;ve worked on…</p>
        </div>
        <div className="w-1/3">
          <Image
            alt="Adam Nemeth"
            src="/AdamNemethProfile.png"
            width={250}
            height={250}
            className="rounded-lg ml-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
