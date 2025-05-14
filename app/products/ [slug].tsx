import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
// import { getProductBySlug, getAllProducts } from '../lib/cms/products';
import { Iproduct } from '../types/types';

export default function ProductDetail({ product } : {product : Iproduct}) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  if (router.isFallback) {
    return <div className="text-center py-12">Cargando...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <p>Lo sentimos, el producto que buscas no existe.</p>
      </div>
    );
  }

  const addToCart = () => {
    // Aquí implementarías la lógica para añadir al carrito
    console.log('Añadir al carrito:', { ...product, quantity });
    // Por ejemplo, podrías usar un contexto o localStorage
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        {/* Información del producto */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl text-primary font-semibold mb-4">
            {product.price_formatted}
          </p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Descripción</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          {/* Selector de cantidad */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Cantidad</label>
            <div className="flex items-center">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border border-gray-300 rounded-l"
              >
                -
              </button>
              <input 
                type="number" 
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center border-t border-b border-gray-300 py-1"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border border-gray-300 rounded-r"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={addToCart}
              className="btn flex-1 py-3"
            >
              Añadir al carrito
            </button>
            <button 
              onClick={() => router.push('/cart')}
              className="btn flex-1 py-3 bg-gray-800"
            >
              Comprar ahora
            </button>
          </div>
          
          {/* Información adicional */}
          <div className="mt-8">
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm font-medium">Envío</h3>
              <p className="text-gray-500 text-sm mt-1">
                Entrega de 2-4 días laborables
              </p>
            </div>
            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="text-sm font-medium">Devoluciones</h3>
              <p className="text-gray-500 text-sm mt-1">
                30 días para devoluciones sin preguntas
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Productos relacionados */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">También te puede interesar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Aquí se mostrarían los productos relacionados */}
        </div>
      </div>
    </div>
  );
}