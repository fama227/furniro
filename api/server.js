import express from 'express';
import cors from 'cors';

const app = express();

// 1. MIDDLEWARE
app.use(cors());
app.use(express.json());

// 2. UNIFIED PRODUCTS DATA
const products = [
  { id: 1, title: 'Syltherine', description: 'Stylish cafe chair', discountedPrice: 2500000, originalPrice: 3500000, discount: 30, isNew: false, image: '/p1.png' },
  { id: 2, title: 'Leviosa', description: 'Stylish cafe chair', discountedPrice: 2500000, originalPrice: null, discount: null, isNew: false, image: '/p2.png' },
  { id: 3, title: 'Lolito', description: 'Luxury big sofa', discountedPrice: 7000000, originalPrice: 14000000, discount: 50, isNew: false, image: '/p3.png' },
  { id: 4, title: 'Respira', description: 'Outdoor bar table', discountedPrice: 500000, originalPrice: null, discount: null, isNew: true, image: '/p4.png' },
  { id: 5, title: 'Grifo', description: 'Night lamp', discountedPrice: 1500000, originalPrice: null, discount: null, isNew: false, image: '/p5.png' },
  { id: 6, title: 'Muggo', description: 'Small mug', discountedPrice: 1500000, originalPrice: null, discount: null, isNew: true, image: '/p6.png' },
  { id: 7, title: 'Pingky', description: 'Cute bed set', discountedPrice: 7000000, originalPrice: 14000000, discount: 50, isNew: false, image: '/p7.png' },
  { id: 8, title: 'Potty', description: 'Minimalist flower pot', discountedPrice: 500000, originalPrice: null, discount: null, isNew: true, image: '/p8.png' },
  { id: 9, title: 'Syltherine Deluxe', description: 'Premium cafe chair', discountedPrice: 3500000, originalPrice: 4500000, discount: 20, isNew: false, image: '/shop1.png' },
  { id: 10, title: 'Leviosa', description: 'Stylish cafe chair', discountedPrice: 2500000, originalPrice: null, discount: null, isNew: false, image: '/p2.png' },
  { id: 11, title: 'Lolito', description: 'Luxury big sofa', discountedPrice: 7000000, originalPrice: 14000000, discount: 50, isNew: false, image: '/p3.png' },
  { id: 12, title: 'Respira', description: 'Outdoor bar table', discountedPrice: 500000, originalPrice: null, discount: null, isNew: true, image: '/p4.png' }
];

let orders = [];

// 3. ENDPOINTS
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/orders', (req, res) => {
    const orderData = req.body;
    const newOrder = { ...orderData, id: orders.length + 1, date: new Date().toLocaleString() };
    orders.push(newOrder);
    res.status(201).json({ message: "Order placed!", orderId: newOrder.id });
});

// 4. EXPORT / START LOGIC
if (process.env.NODE_ENV !== 'production') {
    const PORT = 5000;
    app.listen(PORT, () => console.log(`Local Server: http://localhost:${PORT}`));
}

// Modern export for Vercel
export default app;