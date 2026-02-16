import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { Bookmark, Clock, TrendingUp, User, Users } from "lucide-react";

interface StoredUser {
  name: string;
  email: string;
}

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const [registeredUsers, setRegisteredUsers] = useState<StoredUser[]>([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("newsapp_users") || "[]");
    setRegisteredUsers(users.map((u: any) => ({ name: u.name, email: u.email })));
  }, []);

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const recentArticles = articles.slice(0, 4);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Welcome */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-card">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <User size={24} className="text-primary" />
          </div>
          <div>
            <h1 className="font-heading text-2xl font-bold">Welcome back, {user?.name}</h1>
            <p className="text-sm text-muted-foreground font-body">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Clock, label: "Articles Read", value: "24" },
          { icon: Bookmark, label: "Bookmarked", value: "8" },
          { icon: TrendingUp, label: "Trending Reads", value: "5" },
          { icon: Users, label: "Registered Users", value: String(registeredUsers.length) },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-card border border-border rounded-xl p-5 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-2xl font-heading font-bold">{value}</p>
                <p className="text-xs text-muted-foreground font-body">{label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Registered Users */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-card">
        <h2 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
          <Users size={20} className="text-primary" /> Registered Accounts
        </h2>
        {registeredUsers.length === 0 ? (
          <p className="text-sm text-muted-foreground font-body">No registered users yet.</p>
        ) : (
          <div className="divide-y divide-border">
            {registeredUsers.map((u) => (
              <div key={u.email} className="flex items-center gap-3 py-3">
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-bold font-heading text-primary">{u.name.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <p className="text-sm font-medium font-body">{u.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{u.email}</p>
                </div>
                {u.email === user?.email && (
                  <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-body font-medium">You</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recommended */}
      <h2 className="font-heading text-xl font-bold mb-4">Recommended for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentArticles.map((a) => <ArticleCard key={a.id} article={a} />)}
      </div>
    </main>
  );
};

export default Dashboard;
