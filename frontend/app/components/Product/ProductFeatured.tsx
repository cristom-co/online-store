import Image from 'next/image';
import Link from 'next/link';

import { getFeaturedProducts } from '../../lib/cms';
import { Iproduct } from '../../types/product';

import { getStrapiMedia } from '../../lib/getStrapiMedia';

export default async function ProductFeatured() {

    // Fetch data from CMS
    const products = await getFeaturedProducts();
    
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Productos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products && products.map((product : Iproduct) => (
                    <div className="card hover:shadow-lg transition-shadow p-4" key={product.id}>
                        <div className="relative h-48 mb-4">
                            <Image
                                src={getStrapiMedia(product.images[0])}
                                alt="Producto destacado"
                                fill
                                style={{ objectFit: 'contain' }}
                                className="rounded-t-lg"
                            />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 uppercase">{product.name}</h3>
                        <p className="text-gray-600 mb-2">
                            {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP' }).format(product.price)}
                        </p>
                        <Link
                            href={`/products/${product.slug}`}
                            className="text-primary hover:underline inline-block mb-2"
                        >
                            Ver detalles
                        </Link>
                        <button className="btn w-full">Añadir al carrito</button>
                    </div>
                ))}
                </div>
        </section>
    );
}
