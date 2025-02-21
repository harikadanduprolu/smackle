import React, { useState } from 'react';
import { Star, Tag, Stamp, Gift, Book, BookOpen, Briefcase, Eye } from 'lucide-react';

export const categories = [
  {
    id: 'labels',
    name: 'Labels & Tags',
    icon: Tag,
    products: [
      { id: 'l1', name: 'Back to School Label Packs', price: '$12.99', rating: 4.8, image: 'https://images.unsplash.com/photo-1503266980949-bd30d04d0b7a?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 'l2', name: 'Bag Tags', price: '$8.99', rating: 4.7, image: 'https://images.unsplash.com/photo-1586307078048-b04061a19b3c?auto=format&fit=crop&q=80&w=400&h=400' },
      { id: 'l3', name: 'Waterproof Stickers', price: '$9.99', rating: 4.9, image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400&h=400' },
    ]
  },
  // ... other categories remain the same
];

interface ProductGridProps {
  onProductClick?: (product: any) => void;
}

export default function ProductGrid({ onProductClick }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>
          <a href="#" className="hidden text-sm font-semibold text-purple-600 hover:text-purple-500 sm:block">
            View all products<span aria-hidden="true"> →</span>
          </a>
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-4 overflow-x-auto pb-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentCategory?.products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => onProductClick?.(product)}
                    className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Product</span>
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-700 font-medium">{product.name}</h3>
                <div className="mt-1 flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm text-gray-500">{product.rating}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-purple-600 hover:text-purple-500">
            View all products<span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </div>
  );
}