import Link from 'next/link';

import ProductCard from './components/Product/ProductCard';
import CategoryCard from './components/CategoryCard';
import FeatureCard from './components/FeatureCard';
import BannerHero from './components/BannerHero';
import ProductFeatured from './components/Product/ProductFeatured';


export default  function Home() {

  return (
    <>
      <BannerHero />
      <ProductFeatured />

      {/* Categorías */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestras Categorías</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Perfumes"
            image="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            slug="perfumes"
          />
          <CategoryCard
            title="Relojes"
            image="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            slug="categoria-2"
          />
          <CategoryCard
            title="Medias"
            image="https://images.pexels.com/photos/5737913/pexels-photo-5737913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            slug="categoria-3"
          />
          <CategoryCard
            title="Chanclas"
            image="https://images.pexels.com/photos/131021/pexels-photo-131021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            slug="perfumes"
          />
          <CategoryCard
            title="Joyeria"
            image="https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            slug="categoria-2"
          />
          <CategoryCard
            title="Tecnologia"
            image="https://images.pexels.com/photos/3921845/pexels-photo-3921845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
    </>
  );
}
