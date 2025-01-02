import React from 'react';
import { Section } from '../shared/Section';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../shared/Card';
import { privacyFeatures } from '../../constants/features';

export const Features: React.FC = () => {
  return (
    <Section className="bg-slate-900" id="features">
      <SectionTitle
        title="Privacy-First Architecture"
        subtitle="Built with your privacy as the foundation"
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        {privacyFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={<feature.icon className="w-8 h-8 text-emerald-500" />}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card>
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </Card>
);