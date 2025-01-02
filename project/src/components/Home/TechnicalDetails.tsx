import React from 'react';
import { Section } from '../shared/Section';
import { SectionTitle } from '../shared/SectionTitle';
import { Card } from '../shared/Card';
import { technicalSpecs } from '../../constants/technicalSpecs';

export const TechnicalDetails: React.FC = () => {
  return (
    <Section className="bg-slate-900">
      <SectionTitle
        title="Technical Architecture"
        subtitle="Built with security-first principles"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technicalSpecs.map((spec, index) => (
          <Card key={index}>
            <spec.icon className="w-8 h-8 text-emerald-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">{spec.title}</h3>
            <ul className="space-y-2 text-slate-400">
              {spec.features.map((feature, featureIndex) => (
                <li key={featureIndex}>• {feature}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};