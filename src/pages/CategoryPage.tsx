import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { articles, categories } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { ArrowLeft } from "lucide-react";

const ARTICLES_PER_PAGE = 6;

const CategoryPage = () => {
  const { category } = useParams();
  const normalizedCat = categories.find((c) => c.toLowerCase() === category?.toLowerCase());
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  if (!normalizedCat) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-3xl font-bold mb-4">Category Not Found</h1>
        <Link to="/" className="text-primary font-body text-sm hover:underline">← Back to Home</Link>
      </div>
    );
  }

  const filtered = articles.filter((a) => a.category === normalizedCat);

  return (
    <main className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors font-body mb-6">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-2">{normalizedCat}</h1>
      <p className="text-muted-foreground font-body mb-8">{filtered.length} article{filtered.length !== 1 ? "s" : ""}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.slice(0, visibleCount).map((article, i) => (
          <div key={article.id} className="animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="text-center mt-8">
          <button onClick={() => setVisibleCount((c) => c + ARTICLES_PER_PAGE)} className="px-8 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm font-body hover:opacity-90 transition-opacity">
            Load More
          </button>
        </div>
      )}
    </main>
  );
};

export default CategoryPage;
