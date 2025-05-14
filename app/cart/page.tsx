'use client'

import { useState, useEffect } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
// import { createCheckoutSession } from '../lib/stripe/checkout';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // En un proyecto real, obtendrías los elementos del carrito de un estado global o localStorage
  useEffect(() => {
    // Ejemplo de carga de carrito desde localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // const updateQuantity = (id, newQuantity) => {
  //   if (newQuantity < 1) return;
    
  //   const updatedItems = cartItems.map(item => 
  //     item.id === id ? { ...item, quantity: newQuantity } : item
  //   );
    
  //   setCartItems(updatedItems);
  //   localStorage.setItem('cart', JSON.stringify(updatedItems));
  // };

  // const removeItem = (id) => {
  //   const updatedItems = cartItems.filter(item => item.id !== id);
  //   setCartItems(updatedItems);
  //   localStorage.setItem('cart', JSON.stringify(updatedItems));
  // };

  // const subtotal = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity, 
  //   0
  // );

  // const handleCheckout = async () => {
  //   setIsLoading(true);
  //   try {
  //     await createCheckoutSession(cartItems);
  //   } catch (error) {
  //     console.error('Error al procesar el checkout:', error);
  //     alert('Hubo un error al procesar el pago. Por favor, inténtalo de nuevo.');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
        <p className="mb-8">Parece que aún no has añadido productos a tu carrito.</p>
        <Link href="/products" className="btn">
          Continuar comprando
        </Link>
      </div>
    );
  }


  return (<></>)
}