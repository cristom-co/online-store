import Link from 'next/link';
import Image from 'next/image';

import ProductCard from './components/products/ProductCard';
import CategoryCard from './components/CategoryCard';
import FeatureCard from './components/FeatureCard';

import { productsTest } from './testData/testData';

// import { useEffect, useState } from 'react';
// import { getFeaturedProducts } from '../lib/cms/products';

export default function Home() {

  return (
    <div>
      {/* Banner Hero */}
      <section className="relative h-96 bg-gray-900 mb-12">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image 
            src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Banner principal"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bienvenidos
            </h1>
            <p className="text-xl text-white mb-8">
              Descubre nuestros productos de alta calidad y el mejor servicio.
            </p>
            <Link href="/products" className="btn bg-primary px-8 py-3 text-lg">
              Ver Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsTest?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/products" className="btn">
            Ver todos los productos
          </Link>
        </div>
      </section>

      {/* Categorías */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestras Categorías</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard 
            title="Categoría 1" 
            image="/images/category1.jpg" 
            slug="categoria-1" 
          />
          <CategoryCard 
            title="Categoría 2" 
            image="/images/category2.jpg" 
            slug="categoria-2" 
          />
          <CategoryCard 
            title="Categoría 3" 
            image="/images/category3.jpg" 
            slug="categoria-3" 
          />
        </div>
      </section>

      {/* Sección de características */}
      <section className="bg-gray-100 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Envío Rápido" 
              description="Entrega en 24-48 horas a todo el país" 
              icon="🚚" 
            />
            <FeatureCard 
              title="Calidad Garantizada" 
              description="Todos nuestros productos pasan por controles de calidad" 
              icon="✓" 
            />
            <FeatureCard 
              title="Atención 24/7" 
              description="Estamos disponibles para atenderte cuando nos necesites" 
              icon="🕒" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
