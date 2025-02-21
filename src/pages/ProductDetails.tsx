import React from 'react';
import { ArrowLeft, Star, ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
  category: string;
  description?: string;
}

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-8">
              <div className="text-sm text-purple-600 mb-2">{product.category}</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm text-gray-600">In Stock</span>
              </div>

              <div className="text-2xl font-bold text-gray-900 mb-6">{product.price}</div>

              <p className="text-gray-600 mb-8">
                {product.description || 'High-quality stationery item perfect for your needs. Made with premium materials and attention to detail.'}
              </p>

              <div className="space-y-4">
                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Wishlist
                </button>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="font-semibold mb-4">Product Details</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Premium quality materials</li>
                  <li>• Customizable design</li>
                  <li>• Fast shipping</li>
                  <li>• 30-day return policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}