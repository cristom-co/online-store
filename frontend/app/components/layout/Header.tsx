'use client'

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
          Shop Esencial
          </Link>
          
          {/* Menú para móvil */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Menú para desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="hover:text-primary">
              Productos
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </nav>
        </div>
        
        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/products" className="hover:text-primary">
                Productos
              </Link>
              <Link href="/categories" className="hover:text-primary">
                Categorías
              </Link>
              <Link href="/about" className="hover:text-primary">
                Nosotros
              </Link>
              <Link href="/contact" className="hover:text-primary">
                Contacto
              </Link>
              <Link href="/cart" className="flex items-center space-x-2">
                <ShoppingCart size={20} />
                <span>Carrito (0)</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}