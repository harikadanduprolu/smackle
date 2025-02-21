import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import CustomizeWorkspace from './components/CustomizeWorkspace';
import Products from './pages/Products';
import Templates from './pages/Templates';
import BulkOrders from './pages/BulkOrders';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'customize' | 'products' | 'templates' | 'bulk-orders' | 'product-details'>('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('product-details');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        onCartClick={() => setIsCartOpen(true)} 
        onCustomizeClick={() => setCurrentView('customize')}
        onProductsClick={() => setCurrentView('products')}
        onTemplatesClick={() => setCurrentView('templates')}
        onBulkOrdersClick={() => setCurrentView('bulk-orders')}
      />
      
      {currentView === 'home' ? (
        <main>
          <Hero onCustomizeClick={() => setCurrentView('customize')} />
          <Features />
          <ProductGrid onProductClick={handleProductClick} />
        </main>
      ) : currentView === 'customize' ? (
        <CustomizeWorkspace />
      ) : currentView === 'products' ? (
        <Products onProductClick={handleProductClick} />
      ) : currentView === 'templates' ? (
        <Templates />
      ) : currentView === 'bulk-orders' ? (
        <BulkOrders />
      ) : currentView === 'product-details' && selectedProduct ? (
        <ProductDetails product={selectedProduct} />
      ) : null}

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default App;