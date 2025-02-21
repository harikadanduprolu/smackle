import React from 'react';
import { Palette, Sparkles, Upload, Eye } from 'lucide-react';

const features = [
  {
    name: 'Intuitive Design Tools',
    description: 'Easy-to-use color pickers and design tools to create your perfect stationery.',
    icon: Palette
  },
  {
    name: 'Premium Templates',
    description: 'Start with professionally designed templates or create from scratch.',
    icon: Sparkles
  },
  {
    name: 'Custom Uploads',
    description: 'Upload your own artwork, logos, or photos to personalize your items.',
    icon: Upload
  },
  {
    name: 'Live Preview',
    description: 'See your changes in real-time with our interactive preview system.',
    icon: Eye
  }
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">Design with ease</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to create perfect stationery
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools you need to design and customize your perfect stationery items.
            Start with a template or create from scratch - the possibilities are endless.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-purple-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}