import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, ShieldCheck, Mail, Lock } from 'lucide-react';
import Footer from '../../components/Navbar/Footer';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const from = location.state?.from?.pathname || "/admin/blog";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      toast.success("Successfully logged in!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message || "Failed to log in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-50 relative overflow-hidden p-4 pt-24 pb-20">
        {/* Background glowing orbs for premium feel */}
        {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/50 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/50 rounded-full blur-[100px] pointer-events-none"></div> */}

        <Card className="w-full mt-15 max-w-[420px] shadow-xl shadow-slate-200/50 border-white bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden relative z-10">
          {/* <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-600 via-blue-500 to-primary-400"></div> */}
          
          <CardHeader className="space-y-2 pb-8 pt-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center border border-primary-100 shadow-sm">
                 <ShieldCheck className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight text-slate-900">Secure Access</CardTitle>
            <CardDescription className="text-slate-500 font-medium">
              Authenticate to access the command center
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-5 px-8">
              <div className="space-y-2 relative">
                <Label htmlFor="email" className="text-slate-700 ml-1 font-semibold">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@drfaheem.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    required
                    className="h-12 pl-11 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-primary-500 focus-visible:border-primary-500 rounded-xl transition-all shadow-sm"
                  />
                </div>
              </div>
              <div className="space-y-2 relative">
                <div className="flex items-center justify-between ml-1">
                  <Label htmlFor="password" className="text-slate-700 font-semibold">Password</Label>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    required
                    className="h-12 pl-11 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-primary-500 focus-visible:border-primary-500 rounded-xl transition-all shadow-sm"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pb-10 pt-6 px-8">
              <Button 
                type="submit" 
                className="w-full h-12 text-base font-semibold bg-primary-600 hover:bg-primary-700 text-white rounded-xl shadow-md shadow-primary-600/20 transition-all active:scale-[0.98]" 
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Sign In to Dashboard"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
      
      {/* Existing Footer */}
      <Footer />
    </>
  );
};

export default AdminLogin;
