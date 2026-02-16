import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import { articles, categories, Category } from "@/data/articles";
import { TrendingUp } from "lucide-react";

const ARTICLES_PER_PAGE = 6;

const Index = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  const filtered = useMemo(() => {
    let result = articles;
    if (activeCategory !== "All") result = result.filter((a) => a.category === activeCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q));
    }
    return result;
  }, [activeCategory, searchQuery]);

  const trending = articles.filter((a) => a.trending);

  return (
    <main>
      {!searchQuery && <HeroSection />}

      <div className="container mx-auto px-4 py-8">
        {searchQuery && (
          <div className="mb-6">
            <h2 className="font-heading text-2xl font-bold">Search results for "{searchQuery}"</h2>
            <p className="text-sm text-muted-foreground font-body mt-1">{filtered.length} article{filtered.length !== 1 ? "s" : ""} found</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(["All", ...categories] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat as any); setVisibleCount(ARTICLES_PER_PAGE); }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium font-body transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-hero"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.slice(0, visibleCount).map((article, i) => (
                <div key={article.id} className="animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground font-body">No articles found.</p>
              </div>
            )}

            {visibleCount < filtered.length && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setVisibleCount((c) => c + ARTICLES_PER_PAGE)}
                  className="px-8 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm font-body hover:opacity-90 transition-opacity shadow-hero"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card rounded-lg border border-border p-5">
                <h3 className="font-heading text-lg font-bold flex items-center gap-2 mb-4">
                  <TrendingUp size={18} className="text-primary" /> Trending Now
                </h3>
                <div>
                  {trending.map((article) => (
                    <ArticleCard key={article.id} article={article} variant="compact" />
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="mt-6 bg-primary/5 border border-primary/10 rounded-lg p-5">
                <h4 className="font-heading text-base font-bold">Stay Informed</h4>
                <p className="text-xs text-muted-foreground font-body mt-1 mb-3">Get the latest headlines delivered to your inbox.</p>
                <input type="email" placeholder="your@email.com" className="w-full px-3 py-2 text-sm border border-border rounded-md bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary/20 mb-2" />
                <button className="w-full py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium font-body hover:opacity-90 transition-opacity">Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Index;
