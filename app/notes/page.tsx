import { title } from "@/components/primitives";
import { ArticleCard } from "@/components/article-card";

export default function BlogPage() {
  return (
    <section className="flex flex-col items-center justify-center sm:gap-12 gap-6 sm:py-8 md:py-10">
      <div className="flex flex-col max-w-4xl justify-center w-full px-6">
        <h2 className="font-bold text-3xl mb-2">Notes</h2>
        <p className="text-slate-600 text-lg font-medium">
          I regularly write about topics which I find interesting & useful.
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <ArticleCard title="Blogcikk 1 példa" />
          <ArticleCard title="Blogcikk 1 példa" />
          <ArticleCard title="Blogcikk 1 példa" />
        </div>
      </div>
    </section>
  );
}
