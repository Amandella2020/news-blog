import { Link } from "react-router-dom";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import { categories } from "@/data/articles";

const Footer = () => (
  <footer className="bg-foreground text-background mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="font-heading text-xl font-bold mb-3">
            The <span className="text-primary">Daily</span> Herald
          </h3>
          <p className="text-sm opacity-70 font-body leading-relaxed">
            Delivering trusted journalism and breaking news coverage from around the world since 2024.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Categories</h4>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <Link to={`/category/${cat.toLowerCase()}`} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all font-body">{cat}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body">Home</Link></li>
            <li><Link to="/login" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body">Login</Link></li>
            <li><Link to="/signup" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body">Sign Up</Link></li>
            <li><Link to="/dashboard" className="text-sm opacity-70 hover:opacity-100 transition-opacity font-body">Dashboard</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">Contact Us</h4>
          <p className="text-sm opacity-70 font-body mb-4">Get in touch through our social channels.</p>
          <div className="flex gap-3">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-10 pt-6 text-center">
        <p className="text-xs opacity-50 font-body">&copy; {new Date().getFullYear()} The Daily Herald. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
