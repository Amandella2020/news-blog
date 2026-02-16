import { useState } from "react";
import { Link } from "react-router-dom";
import { KeyRound, ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email."); return; }
    setSent(true);
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-xl p-8 shadow-elevated">
          <div className="text-center mb-6">
            <KeyRound size={32} className="mx-auto text-primary mb-2" />
            <h1 className="font-heading text-2xl font-bold">Forgot Password</h1>
            <p className="text-sm text-muted-foreground font-body mt-1">We'll send you a reset link</p>
          </div>

          {sent ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <KeyRound size={24} className="text-primary" />
              </div>
              <p className="font-body text-sm text-muted-foreground">If an account exists for <strong>{email}</strong>, you'll receive a password reset link shortly.</p>
              <Link to="/login" className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-body mt-4">
                <ArrowLeft size={14} /> Back to Login
              </Link>
            </div>
          ) : (
            <>
              {error && <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive font-body">{error}</div>}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium font-body mb-1">Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2.5 border border-border rounded-lg bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="you@example.com" />
                </div>
                <button type="submit" className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium font-body hover:opacity-90 transition-opacity">
                  Send Reset Link
                </button>
              </form>
              <p className="text-center text-sm text-muted-foreground font-body mt-6">
                Remember your password? <Link to="/login" className="text-primary hover:underline font-medium">Sign In</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
