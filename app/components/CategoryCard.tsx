import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ title, image, slug } : { title: string, image: string, slug: string}) {
    return (
      <Link href={`/categories/${slug}`} className="block relative h-64 rounded-lg overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h3 className="text-white text-2xl font-bold">{title}</h3>
        </div>
      </Link>
    );
}