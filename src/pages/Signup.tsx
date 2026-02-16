import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Eye, EyeOff, UserPlus } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !password.trim()) { setError("All fields are required."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email."); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    if (password !== confirmPassword) { setError("Passwords do not match."); return; }
    setLoading(true);
    const success = await signup(name, email, password);
    setLoading(false);
    if (success) navigate("/dashboard");
    else setError("An account with this email already exists.");
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-xl p-8 shadow-elevated">
          <div className="text-center mb-6">
            <UserPlus size={32} className="mx-auto text-primary mb-2" />
            <h1 className="font-heading text-2xl font-bold">Create Account</h1>
            <p className="text-sm text-muted-foreground font-body mt-1">Join The Daily Herald</p>
          </div>

          {error && <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive font-body">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium font-body mb-1">Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="John Doe" maxLength={100} />
            </div>
            <div>
              <label className="block text-sm font-medium font-body mb-1">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="you@example.com" maxLength={255} />
            </div>
            <div>
              <label className="block text-sm font-medium font-body mb-1">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20 pr-10" placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium font-body mb-1">Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="••••••••" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium font-body hover:opacity-90 transition-opacity disabled:opacity-50">
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground font-body mt-6">
            Already have an account? <Link to="/login" className="text-primary hover:underline font-medium">Sign In</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
