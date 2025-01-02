import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Card } from '../shared/Card';
import { Shield, ArrowLeft, AlertTriangle } from 'lucide-react';

interface AuthFormProps {
  mode: 'register' | 'login';
  onCancel: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ mode, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp, signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (mode === 'register') {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <button
          onClick={onCancel}
          className="flex items-center text-slate-400 hover:text-slate-300 mb-6"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <div className="text-center mb-8">
          <Shield className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white">
            {mode === 'register' ? 'Create Your Account' : 'Welcome Back'}
          </h2>
          <p className="text-slate-400 mt-2">
            {mode === 'register' 
              ? 'Start managing your finances securely'
              : 'Sign in to access your encrypted data'}
          </p>
        </div>

        {mode === 'register' && (
          <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-amber-500 font-semibold mb-2">Important Security Notice</h3>
                <p className="text-amber-400/90 text-sm leading-relaxed">
                  This is a zero-trust application. Your password is used to encrypt your data and:
                </p>
                <ul className="text-amber-400/90 text-sm mt-2 space-y-1 list-disc list-inside">
                  <li>Cannot be reset if forgotten</li>
                  <li>Is not stored anywhere</li>
                  <li>Loss means permanent data loss</li>
                </ul>
                <p className="text-amber-400/90 text-sm mt-2 font-medium">
                  Please save your password securely - there is no way to recover your data without it!
                </p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-slate-700 border border-slate-600 rounded focus:ring-2 
                focus:ring-emerald-500 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-slate-700 border border-slate-600 rounded focus:ring-2 
                focus:ring-emerald-500 text-white"
              required
              minLength={12}
            />
            {mode === 'register' && (
              <p className="mt-1 text-sm text-slate-400">
                Must be at least 12 characters long
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-emerald-500 text-white rounded hover:bg-emerald-600 
              transition-colors font-medium"
          >
            {mode === 'register' ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        {mode === 'register' && (
          <p className="mt-4 text-sm text-center text-slate-400">
            By creating an account, you acknowledge that you understand the zero-trust nature of this application
          </p>
        )}
      </Card>
    </div>
  );
};