import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mi Tienda</h3>
            <p className="text-gray-300">
              Tu tienda online de confianza para productos de calidad.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <address className="not-italic text-gray-300">
              <p>Email: info@mitienda.com</p>
              <p>Teléfono: +1 234 567 890</p>
              <p>Dirección: Calle Ejemplo 123</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}