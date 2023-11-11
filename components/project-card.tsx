import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, CodeIcon } from "./icons";
import clsx from "clsx";

export default function ProjectCard({
  title,
  orientation = "left",
  link = "/",
  github = "/",
  className,
  children,
  ...props
}: {
  orientation: string;
  title: string;
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
        `${
          orientation == "left"
            ? "flex-col sm:flex-row"
            : "flex-col sm:flex-row-reverse"
        }`,
        className
      )}
    >
      <div
        className={`w-full sm:w-1/2 p-6 my-auto ${
          orientation == "left" ? "sm:pl-0 p-0" : "sm:pr-0 p-0"
        }`}
      >
        <Image
          src="/portfolio-project.png"
          alt="Project"
          width={600}
          height={500}
          className="rounded-lg shadow-lg w-full sm:h-[300px]"
        />
      </div>
      <div className="p-6 flex-col text-center sm:text-left w-full sm:w-1/2 my-auto">
        <p className="font-bold text-xl">{title}</p>
        <div className="text-slate-600 font-medium mt-4 mb-6">{children}</div>
        <div className="flex gap-4 justify-center sm:justify-start w-full">
          <a
            href={github}
            className="flex font-bold justify-center items-center gap-1 bg-slate-800 py-1 px-2 rounded-md hover:opacity-90"
            target="_blank"
          >
            <p className="text-white">Code</p>
            <GithubIcon size={24} className="text-white" />
          </a>
          <a
            href={link}
            className="flex font-bold justify-center items-center gap-1 bg-slate-600 py-1 px-2 rounded-md hover:opacity-90"
            target="_blank"
          >
            <p className="text-white">Live Demo</p>
            <CodeIcon size={24} className="" />
          </a>
        </div>
      </div>
    </div>
  );
}
