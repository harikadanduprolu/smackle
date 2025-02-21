import React from 'react';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';

interface NavbarProps {
  onCartClick: () => void;
  onCustomizeClick: () => void;
  onProductsClick: () => void;
  onTemplatesClick: () => void;
  onBulkOrdersClick: () => void;
}

export default function Navbar({ 
  onCartClick, 
  onCustomizeClick, 
  onProductsClick,
  onTemplatesClick,
  onBulkOrdersClick 
}: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Smackle
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onProductsClick}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Products
            </button>
            <button 
              onClick={onCustomizeClick}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Customize
            </button>
            <button 
              onClick={onTemplatesClick}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Templates
            </button>
            <button 
              onClick={onBulkOrdersClick}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Bulk Orders
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={onCartClick}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}