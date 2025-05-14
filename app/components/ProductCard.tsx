import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product } : { product: any}) {
    return (
      <div className="card hover:shadow-lg transition-shadow">
        <div className="relative h-48 mb-4">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.price_formatted}</p>
        <Link 
          href={`/products/${product.slug}`}
          className="text-primary hover:underline inline-block mb-2"
        >
          Ver detalles
        </Link>
        <button className="btn w-full">Añadir al carrito</button>
      </div>
    );
  }