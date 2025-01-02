import React from 'react';
import { docsContent } from './docsData';

interface DocsContentProps {
  section: string;
}

export const DocsContent: React.FC<DocsContentProps> = ({ section }) => {
  const content = docsContent[section];

  if (!content) {
    return <div>Section not found</div>;
  }

  return (
    <div className="prose prose-invert max-w-none">
      <h1>{content.title}</h1>
      {content.content}
    </div>
  );
};