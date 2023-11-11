import { FC } from "react";
import Link from "next/link";

export interface ArticleProps {
  title: string;
}

export const ArticleCard: FC<ArticleProps> = ({ title }) => (
  <Link
    className="bg-slate-200 p-4 rounded-lg flex group hover:border-r-8 hover:border-slate-600"
    href="/"
  >
    <div className="bg-black w-24 h-24 rounded-lg"></div>
    <div className="flex flex-col pl-6">
      <p className="font-bold text-2xl pt-2">{title}</p>
      <p className="text-slate-600 mt-auto">2023.11.06.</p>
    </div>
  </Link>
);
