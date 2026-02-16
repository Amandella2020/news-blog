import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Article } from "@/data/articles";

interface Props {
  article: Article;
  variant?: "default" | "compact";
}

const ArticleCard = ({ article, variant = "default" }: Props) => {
  if (variant === "compact") {
    return (
      <Link to={`/article/${article.id}`} className="flex gap-4 group py-3 border-b border-border last:border-0">
        <img src={article.image} alt={article.title} loading="lazy" className="w-20 h-20 rounded-md object-cover flex-shrink-0" />
        <div className="min-w-0">
          <span className="text-xs font-medium text-primary font-body">{article.category}</span>
          <h4 className="text-sm font-heading font-semibold leading-snug mt-0.5 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h4>
          <span className="text-xs text-muted-foreground font-body mt-1 block">{article.date}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.id}`} className="group block bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
      <div className="relative overflow-hidden aspect-[16/10]">
        <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-medium rounded font-body">{article.category}</span>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground font-body line-clamp-2 leading-relaxed">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-muted-foreground font-body">
            <span>{article.author}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
          </div>
          <span className="text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity font-body">
            Read <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
