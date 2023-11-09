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
