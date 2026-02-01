const express = require('express');
const cors = require('cors');
const app = express();

// 1. MIDDLEWARE
app.use(cors());
app.use(express.json());

// 2. UNIFIED PRODUCTS DATA (Merged Home + Shop data)
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

// 3. GET PRODUCTS ENDPOINT
app.get('/api/products', (req, res) => {
    console.log("GET /api/products called");
    res.json(products);
});

// 4. POST NEW ORDER ENDPOINT
app.post('/api/orders', (req, res) => {
    try {
        const orderData = req.body;
        if (!orderData || !orderData.customer) {
            return res.status(400).json({ message: "Invalid Order Data" });
        }

        const newOrder = {
            ...orderData,
            id: orders.length + 1,
            date: new Date().toLocaleString()
        };

        orders.push(newOrder);
        
        console.log("============================");
        console.log("NEW ORDER RECEIVED!");
        console.log("Customer:", newOrder.customer.firstName, newOrder.customer.lastName);
        console.log("Total Amount:", newOrder.totalAmount);
        console.log("============================");

        res.status(201).json({ message: "Order placed successfully!", orderId: newOrder.id });
    } catch (error) {
        console.error("Order error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// 5. START SERVER
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Backend Server is running!`);
    console.log(`📡 URL: http://localhost:${PORT}/api/products`);
});