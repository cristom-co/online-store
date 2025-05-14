import { loadStripe } from '@stripe/stripe-js';

// Cargar Stripe fuera de los componentes para mejorar rendimiento
let stripePromise;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export async function createCheckoutSession(items) {
  const stripe = await getStripe();

  const checkoutSession = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: items,
    }),
  });

  const { sessionId } = await checkoutSession.json();
  
  const result = await stripe.redirectToCheckout({
    sessionId,
  });

  if (result.error) {
    alert(result.error.message);
  }
}