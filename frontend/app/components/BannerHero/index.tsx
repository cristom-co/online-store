import Image from 'next/image';
import Link from 'next/link';

import { getHomePageData } from '../../lib/cms';

export default async function BannerHero() {

    // Fetch data from CMS
    const { data: { cover } } = await getHomePageData();
    const bannerHero = cover ? process.env.NEXT_PUBLIC_CMS_API_URL + cover.formats.large.url : '/default-images/banner-hero.jpg';


    return (
        <section className="relative h-96 bg-gray-900 mb-12">
            <div className="absolute inset-0 z-0 opacity-60 w-full h-full">
                <Image
                    src={bannerHero}
                    alt="Banner principal"
                    fill
                    className="object-cover"
                    priority
                    loading="eager"
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
                    <Link href="/products" className="btn bg-primary px-8 py-3 text-lg bg-white rounded-lg">
                        Ver Productos
                    </Link>
                </div>
            </div>
        </section>
    );
};
