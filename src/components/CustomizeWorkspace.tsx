import React, { useState } from 'react';
import { Palette, Type, Image, Layout, Save, RotateCcw, Download } from 'lucide-react';

export default function CustomizeWorkspace() {
  const [activeTab, setActiveTab] = useState('colors');

  return (
    <div className="min-h-screen pt-16">
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Tools Panel */}
        <div className="w-64 border-r border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Design Tools</h2>
          </div>
          <div className="flex flex-col p-2 space-y-1">
            <button
              onClick={() => setActiveTab('colors')}
              className={`flex items-center px-3 py-2 rounded-lg ${
                activeTab === 'colors' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
              }`}
            >
              <Palette className="w-5 h-5 mr-2" />
              Colors
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`flex items-center px-3 py-2 rounded-lg ${
                activeTab === 'text' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
              }`}
            >
              <Type className="w-5 h-5 mr-2" />
              Text
            </button>
            <button
              onClick={() => setActiveTab('images')}
              className={`flex items-center px-3 py-2 rounded-lg ${
                activeTab === 'images' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
              }`}
            >
              <Image className="w-5 h-5 mr-2" />
              Images
            </button>
            <button
              onClick={() => setActiveTab('layout')}
              className={`flex items-center px-3 py-2 rounded-lg ${
                activeTab === 'layout' ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50'
              }`}
            >
              <Layout className="w-5 h-5 mr-2" />
              Layout
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 bg-gray-50 p-8">
          <div className="bg-white rounded-lg shadow-lg aspect-[4/3] max-w-3xl mx-auto">
            <div className="h-full flex items-center justify-center text-gray-400">
              Your design canvas
            </div>
          </div>
        </div>

        {/* Properties Panel */}
        <div className="w-72 border-l border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Properties</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <button className="w-full btn btn-primary">
                <Save className="w-4 h-4 mr-2" />
                Save Design
              </button>
              <button className="w-full btn btn-secondary">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </button>
              <button className="w-full btn btn-secondary">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}