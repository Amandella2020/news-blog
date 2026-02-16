import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-3xl font-bold mb-4">Article Not Found</h1>
        <Link to="/" className="text-primary font-body text-sm hover:underline">← Back to Home</Link>
      </div>
    );
  }

  const related = articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3);

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors font-body mb-6">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded font-body mb-4">{article.category}</span>
      <h1 className="font-heading text-3xl lg:text-5xl font-bold leading-tight text-balance">{article.title}</h1>

      <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground font-body">
        <span className="flex items-center gap-1"><User size={14} /> {article.author}</span>
        <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
        <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
      </div>

      <img src={article.image} alt={article.title} className="w-full rounded-xl mt-6 aspect-[16/9] object-cover" />

      <article className="mt-8 prose prose-lg max-w-none font-body">
        {article.content.split("\n\n").map((para, i) => (
          <p key={i} className="text-foreground/90 leading-relaxed mb-4">{para}</p>
        ))}
      </article>

      {related.length > 0 && (
        <section className="mt-16 border-t border-border pt-8">
          <h2 className="font-heading text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </section>
      )}
    </main>
  );
};

export default ArticleDetail;
