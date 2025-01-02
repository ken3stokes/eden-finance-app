import React from 'react';
import { PolicyLayout } from '../../components/shared/PolicyLayout';
import { DocsSidebar } from './DocsSidebar';
import { DocsContent } from './DocsContent';

interface DocumentationProps {
  onBack: () => void;
}

export const Documentation: React.FC<DocumentationProps> = ({ onBack }) => {
  const [currentSection, setCurrentSection] = React.useState('getting-started');

  return (
    <PolicyLayout
      title="Documentation"
      lastUpdated="March 1, 2024"
      onBack={onBack}
    >
      <div className="grid md:grid-cols-[250px,1fr] gap-8">
        <DocsSidebar currentSection={currentSection} onSelect={setCurrentSection} />
        <DocsContent section={currentSection} />
      </div>
    </PolicyLayout>
  );
};