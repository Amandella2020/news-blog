import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, Sun, Moon, User, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { categories } from "@/data/articles";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { isDark, toggle } = useTheme();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-8 text-xs text-muted-foreground font-body">
          <span>{new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
          <div className="flex items-center gap-3">
            <button onClick={toggle} className="hover:text-foreground transition-colors" aria-label="Toggle theme">
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-2xl font-bold text-foreground tracking-tight">
            The <span className="text-primary">Daily</span> Herald
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors font-body">Home</Link>
            {categories.map((cat) => (
              <Link key={cat} to={`/category/${cat.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-body">
                {cat}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 rounded-md hover:bg-secondary transition-colors" aria-label="Search">
              <Search size={18} className="text-muted-foreground" />
            </button>

            {isAuthenticated ? (
              <div className="relative">
                <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-secondary transition-colors font-body text-sm">
                  <User size={16} />
                  <span className="hidden sm:inline">{user?.name}</span>
                  <ChevronDown size={14} />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 top-full mt-1 w-48 bg-card border border-border rounded-lg shadow-elevated py-1 z-50">
                    <Link to="/dashboard" onClick={() => setProfileOpen(false)} className="block px-4 py-2 text-sm hover:bg-secondary transition-colors font-body">Dashboard</Link>
                    <button onClick={() => { logout(); setProfileOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors font-body flex items-center gap-2 text-primary">
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="px-4 py-1.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity font-body">
                Login
              </Link>
            )}

            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors" aria-label="Menu">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="pb-3 animate-fade-in">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 bg-secondary border border-border rounded-lg text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </form>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-card animate-slide-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium font-body hover:text-primary transition-colors">Home</Link>
            {categories.map((cat) => (
              <Link key={cat} to={`/category/${cat.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium text-muted-foreground font-body hover:text-primary transition-colors">
                {cat}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
