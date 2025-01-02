import React from 'react';
import { Shield, Github } from 'lucide-react';

type Page = 'main' | 'privacy' | 'terms' | 'cookies' | 'security' | 'disclaimer' | 'faq' | 'docs' | 'roadmap';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-500">
              <Shield size={24} />
              <span className="font-bold text-xl">Eden</span>
            </div>
            <p className="text-slate-400 whitespace-nowrap">
              Zero-knowledge personal finance
            </p>
            <button
              onClick={() => onNavigate('roadmap')}
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              View Our Roadmap
            </button>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('security')}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Security Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('docs')}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Documentation
                </button>
              </li>
              <li>
                <a 
                  href="https://github.com/yourusername/eden-finance"
                  className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@eden-finance.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  support@eden-finance.com
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('roadmap')}
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Roadmap
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Eden Finance. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => onNavigate('cookies')}
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Cookie Policy
              </button>
              <button
                onClick={() => onNavigate('disclaimer')}
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};