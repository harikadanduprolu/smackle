import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import TemplateWorkspace from './TemplateWorkspace';

const templates = [
  {
    id: 1,
    name: 'Modern Business Cards',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=400&h=300',
    description: 'Clean and professional design for modern businesses'
  },
  {
    id: 2,
    name: 'Wedding Invitations',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&q=80&w=400&h=300',
    description: 'Elegant and romantic wedding invitation designs'
  },
  {
    id: 3,
    name: 'Birthday Cards',
    category: 'Celebration',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80&w=400&h=300',
    description: 'Fun and colorful birthday card templates'
  }
];

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  if (selectedTemplate) {
    return (
      <TemplateWorkspace 
        template={selectedTemplate} 
        onBack={() => setSelectedTemplate(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Design Templates</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-purple-600 mb-2">{template.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <button 
                  onClick={() => setSelectedTemplate(template)}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}