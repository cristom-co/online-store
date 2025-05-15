// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const { items } = req.body;

//     // Crear elementos de línea para Stripe
//     const lineItems = items.map(item => ({
//       price_data: {
//         currency: 'eur',
//         product_data: {
//           name: item.name,
//           images: [item.image],
//         },
//         unit_amount: Math.round(item.price * 100),
//       },
//       quantity: item.quantity,
//     }));

//     // Crear sesión de checkout
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: lineItems,
//       mode: 'payment',
//       success_url: `${req.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${req.headers.origin}/cart`,
//     });

//     res.status(200).json({ sessionId: session.id });
//   } catch (error) {
//     console.error('Error al crear sesión de checkout:', error);
//     res.status(500).json({ message: 'Error al procesar el pago' });
//   }
// }