import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { articles } from "@/data/articles";

const HeroSection = () => {
  const featured = articles.find((a) => a.featured) || articles[0];
  const secondary = articles.filter((a) => a.id !== featured.id && a.trending).slice(0, 2);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main featured */}
        <Link to={`/article/${featured.id}`} className="lg:col-span-2 group relative rounded-xl overflow-hidden aspect-[16/9] lg:aspect-auto lg:min-h-[420px]">
          <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded font-body mb-3">{featured.category}</span>
            <h1 className="font-heading text-2xl lg:text-4xl font-bold text-background leading-tight text-balance">{featured.title}</h1>
            <p className="mt-2 text-sm text-background/80 font-body max-w-xl hidden sm:block">{featured.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-background/70 font-body">
              <span>{featured.author}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
              <span className="flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all">Read More <ArrowRight size={14} /></span>
            </div>
          </div>
        </Link>

        {/* Side stories */}
        <div className="flex flex-col gap-6">
          {secondary.map((article) => (
            <Link key={article.id} to={`/article/${article.id}`} className="group relative rounded-xl overflow-hidden flex-1 min-h-[200px]">
              <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded font-body mb-2">{article.category}</span>
                <h3 className="font-heading text-base font-bold text-background leading-snug">{article.title}</h3>
                <span className="text-xs text-background/70 font-body mt-1 block">{article.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
