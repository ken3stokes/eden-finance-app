import React from 'react';
import { docsNavigation } from './docsData';

interface DocsSidebarProps {
  currentSection: string;
  onSelect: (section: string) => void;
}

export const DocsSidebar: React.FC<DocsSidebarProps> = ({ currentSection, onSelect }) => {
  return (
    <nav className="space-y-8">
      {docsNavigation.map((section) => (
        <div key={section.id} className="space-y-3">
          <h3 className="font-semibold text-white">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onSelect(item.id)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors ${
                    currentSection === item.id
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};