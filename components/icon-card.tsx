import React, { FC } from "react";
import Link from "next/link";

export interface CardProps {
  className?: string;
  startContent?: JSX.Element;
  title: string;
  link?: string;
}

export const IconCard: FC<CardProps> = ({
  startContent,
  title,
  link = "/",
}) => (
  <Link
    className="flex bg-slate-100 text-slate-800 py-1 px-3 hover:opacity-80 rounded-md gap-1 justify-items-center items-center text-sm font-medium"
    href={link}
  >
    {startContent}
    {title}
  </Link>
);

export const DynamicIconCard: FC<CardProps> = ({
  startContent,
  title,
  link = "/",
}) => (
  <Link
    className="flex transition-all bg-slate-100 text-slate-800 py-2 px-3 hover:opacity-80 rounded-lg gap-1 justify-items-center items-center text-sm font-medium w-fit group"
    href={link}
  >
    <span className="">{startContent}</span>
    <p className="hidden group-hover:block font-semibold">{title}</p>
  </Link>
);

export const TextCard: FC<CardProps> = ({ title, link = "/" }) => (
  <Link
    className="flex transition-all text-slate-800 border-slate-800 border-2 py-1 px-2 hover:opacity-80 rounded-lg gap-1 justify-items-center items-center text-sm font-medium w-fit group"
    href={link}
  >
    <p className="font-semibold">{title}</p>
  </Link>
);
