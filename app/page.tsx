import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import Image from "next/image";
import {
  GithubIcon,
  HTMLIcon,
  TailwindIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJSIcon,
  PHPIcon,
  WordPressIcon,
  MailIcon,
} from "@/components/icons";
import ProjectCard from "@/components/project-card";
import { IconCard, TextCard } from "@/components/icon-card";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center sm:gap-12 gap-6 sm:py-8 md:py-10">
      {/* Hero section */}
      <div className="flex flex-col sm:flex-row max-w-5xl justify-center w-full px-6 sm:mt-8">
        <div className="flex-col order-2 sm:order-1 w-full my-auto">
          <p className="text-5xl font-black pb-6">
            Front-End React
            <br />
            Developer 👋
          </p>
          <p className="text-slate-500 font-medium">
            Hi, I&apos;m Adam Nemeth. A passionate Front-End NextJS developer
            based in Budapest, Hungary. 📍
          </p>
        </div>
        <div className="w-full flex order-1 sm:order-2 mb-6">
          <Image
            className="rounded-lg mx-auto sm:ml-auto sm:mr-0 items-end shadow-lg sm:w-2/3 w-4/5"
            src="/AdamNemethProfile.png"
            alt="Adam Nemeth Front-End Dev"
            priority
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="data:image/png;base64,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"
          />
        </div>
      </div>
      {/* Tech Stack */}
      <div className="max-w-5xl w-full mt-6 sm:mt-8 mb-8 px-6">
        <p className="text-slate-500 text-lg uppercase font-bold">Tech stack</p>
        <p className="font-bold text-3xl mb-4">Skills I&apos;ve acquired 🖥</p>
        <div className="flex mt-2 gap-3 flex-wrap w-full sm:w-2/3">
          {siteConfig.stack.map((el) => {
            // Check which icon we need to forward
            let cardIcon;
            switch (el.title) {
              case "HTML":
                cardIcon = <HTMLIcon size={16} />;
                break;
              case "Tailwindcss":
                cardIcon = <TailwindIcon size={16} />;
                break;
              case "Typescript":
                cardIcon = <TypeScriptIcon size={16} />;
                break;
              case "React":
                cardIcon = <ReactIcon size={16} />;
                break;
              case "NextJS":
                cardIcon = <NextJSIcon size={16} />;
                break;
              case "PHP":
                cardIcon = <PHPIcon size={16} />;
                break;
              case "WordPress":
                cardIcon = <WordPressIcon size={16} />;
                break;
              default:
                cardIcon = <div></div>;
                break;
            }
            return (
              <IconCard
                key={el.title}
                title={el.title}
                startContent={cardIcon}
                link={el.link}
              />
            );
          })}
        </div>
      </div>
      {/* About */}
      <div id="about" className="max-w-5xl w-full mt-6 sm:mt-8 mb-8 px-6">
        <p className="font-bold text-3xl mb-4">About Me</p>
        <p className="text-slate-500 font-medium">
          Hi, I&apos;m Adam Nemeth. A passionate Front-End NextJS developer
          based in Budapest, Hungary. 📍
        </p>
      </div>
      {/* Portfolio */}
      <div id="portfolio" className="w-full bg-slate-200 rounded-xl">
        <div className="max-w-5xl w-full mt-6 sm:mt-0 mx-auto pt-8 px-6">
          <p className="text-slate-500 text-lg uppercase font-bold">
            Portfolio
          </p>
          <p className="font-bold text-3xl mb-4">Websites I&apos;ve built 🔧</p>
          <div className="flex-row justify-center">
            <ProjectCard
              title="Portfolio website 💻"
              className="mb-6"
              orientation="left"
              github=""
              link="http://adamnemeth.vercel.app/"
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel ultrices justo. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Fusce non nisl et
                leo pretium ullamcorper. Quisque tempus orci in lectus
                condimentum, in efficitur ex laoreet.
                <div className="flex mt-2 mx-auto justify-center sm:ml-0 sm:mr-auto sm:justify-start gap-2">
                  <TextCard title="NextJS" />
                  <TextCard title="TailwindCSS" />
                </div>
              </div>
            </ProjectCard>
            <ProjectCard
              title="Airbnb front-end 🏕"
              className="mb-12"
              orientation="left"
              github=""
              link=""
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel ultrices justo. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae;
                <div className="flex mt-2 mx-auto justify-center sm:ml-0 sm:mr-auto sm:justify-start gap-2">
                  <TextCard title="NextJS" />
                  <TextCard title="TailwindCSS" />
                </div>
              </div>
            </ProjectCard>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="flex flex-col max-w-5xl justify-center w-full px-6 items-center gap-4 scroll-smooth"
      >
        <h2 className="text-4xl font-bold my-4">Get in Touch!</h2>
        <Link
          href=""
          className="bg-slate-500 text-white w-fit px-4 py-2 font-semibold rounded-md hover:opacity-90 flex gap-2"
        >
          <MailIcon />
          Email Me
        </Link>
        <p className="text-xl font-medium text-slate-600">or</p>
        <p className="text-2xl text-slate-800 font-semibold mx-auto mb-2">
          Send a Message Here!👇
        </p>
        <div className="bg-slate-300 p-8 rounded-lg w-full sm:w-[400px] flex flex-col gap-3">
          <Input type="text" label="Name" />
          <Input type="text" label="Subject" />
          <Input type="email" label="Email" />
          <Textarea
            label="Message"
            placeholder="Enter your message"
            className=""
          />
          <Button className="bg-slate-600 text-white" size="lg">
            Send
          </Button>
        </div>
      </div>
    </section>
  );
}
