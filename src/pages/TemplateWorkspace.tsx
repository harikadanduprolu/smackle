import React, { useState } from 'react';
import { ArrowLeft, Save, Download, RotateCcw, Palette, Type, Image, Layout } from 'lucide-react';

interface TemplateWorkspaceProps {
  template: {
    id: number;
    name: string;
    category: string;
    image: string;
  };
  onBack: () => void;
}

export default function TemplateWorkspace({ template, onBack }: TemplateWorkspaceProps) {
  const [activeTab, setActiveTab] = useState('customize');
  const [zoom, setZoom] = useState(100);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={onBack}
                className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
              <h1 className="text-xl font-semibold text-gray-900">
                {template.name} <span className="text-gray-500">({template.category})</span>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
              >
                <option value={50}>50%</option>
                <option value={75}>75%</option>
                <option value={100}>100%</option>
                <option value={125}>125%</option>
                <option value={150}>150%</option>
              </select>
              <button className="btn btn-secondary">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </button>
              <button className="btn btn-primary">
                <Save className="w-4 h-4 mr-2" />
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100vh-8rem)]">
          {/* Tools Panel */}
          <div className="w-64 bg-white border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('customize')}
                  className={`flex-1 px-3 py-2 text-sm rounded-md ${
                    activeTab === 'customize'
                      ? 'bg-purple-50 text-purple-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Customize
                </button>
                <button
                  onClick={() => setActiveTab('elements')}
                  className={`flex-1 px-3 py-2 text-sm rounded-md ${
                    activeTab === 'elements'
                      ? 'bg-purple-50 text-purple-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Elements
                </button>
              </div>
            </div>
            
            {activeTab === 'customize' ? (
              <div className="p-4 space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Colors</h3>
                  <div className="grid grid-cols-6 gap-2">
                    {['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'].map((color) => (
                      <button
                        key={color}
                        className="w-8 h-8 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Typography</h3>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm">
                    <option>Arial</option>
                    <option>Helvetica</option>
                    <option>Times New Roman</option>
                    <option>Georgia</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Layout</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50">
                      <div className="aspect-[3/4] bg-gray-100 rounded" />
                    </button>
                    <button className="p-2 border border-gray-200 rounded-md hover:bg-gray-50">
                      <div className="aspect-[4/3] bg-gray-100 rounded" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  <Type className="w-5 h-5 mr-2" />
                  Text
                </button>
                <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  <Image className="w-5 h-5 mr-2" />
                  Images
                </button>
                <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  <Layout className="w-5 h-5 mr-2" />
                  Shapes
                </button>
              </div>
            )}
          </div>

          {/* Canvas Area */}
          <div className="flex-1 bg-gray-100 p-8 overflow-auto">
            <div 
              className="bg-white rounded-lg shadow-lg mx-auto"
              style={{
                width: `${8.5 * zoom}px`,
                height: `${11 * zoom}px`,
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'top left'
              }}
            >
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>

          {/* Properties Panel */}
          <div className="w-64 bg-white border-l border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-medium text-gray-900">Properties</h2>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Opacity
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="100"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rotation
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    defaultValue="0"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}