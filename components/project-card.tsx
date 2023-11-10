import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, CodeIcon } from "./icons";
import clsx from "clsx";

export default function ProjectCard({
  orientation = "left",
  link = "/",
  github = "/",
  className,
  children,
  ...props
}: {
  orientation: string;
  link: string;
  className: string;
  github: string;
  children: string | JSX.Element | JSX.Element[];
}) {
  return (
    <div
      {...props}
      className={clsx(
        "flex",
        `${orientation == "left" ? "flex-row" : "flex-row-reverse"}`,
        className
      )}
    >
      <div
        className={`w-1/2 p-6 my-auto ${
          orientation == "left" ? "pl-0" : "pr-0"
        }`}
      >
        <Image
          src="/portfolio-project.png"
          alt="Project"
          width={600}
          height={500}
          className="rounded-lg shadow-lg h-[300px]"
        />
      </div>
      <div className="p-6 flex-col text-center w-1/2 my-auto">
        <p className="font-bold text-lg">Portfolio website 💻</p>
        <p className="text-slate-600 font-medium my-4">{children}</p>
        <div className="flex gap-4 justify-center w-full">
          <Link
            href={github}
            className="flex font-bold justify-center items-center gap-1 bg-slate-800 py-1 px-2 rounded-md hover:opacity-90"
          >
            <p className="text-white">Code</p>
            <GithubIcon size={24} className="text-white" />
          </Link>
          <Link
            href={link}
            className="flex font-bold justify-center items-center gap-1 bg-slate-600 py-1 px-2 rounded-md hover:opacity-90"
          >
            <p className="text-white">Live Demo</p>
            <CodeIcon size={24} className="" />
          </Link>
        </div>
      </div>
    </div>
  );
}