// Product class definition
class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

// Cart class definition
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        if (product.stock >= quantity) {
            this.items.push({ product, quantity });
            product.stock -= quantity;
        } else {
            console.log(`Not enough stock for product: ${product.name}`);
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}

// Order class definition
class Order {
    constructor(cart) {
        this.items = cart.items;
        this.total = cart.getTotal();
        this.processed = false;
    }

    processOrder(paymentAmount) {
        if (paymentAmount >= this.total) {
            this.processed = true;
            console.log("Order processed successfully.");
        } else {
            console.log("Insufficient payment. Order not processed.");
        }
    }
}

// E-commerce system class definition
class ECommerceSystem {
    constructor() {
        this.products = [];
        this.cart = new Cart();
        this.orders = [];
    }

    addProduct(id, name, price, stock) {
        const product = new Product(id, name, price, stock);
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => {
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Stock: ${product.stock}`);
        });
    }

    addToCart(productId, quantity) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            this.cart.addItem(product, quantity);
        } else {
            console.log("Product not found.");
        }
    }

    removeFromCart(productId) {
        this.cart.removeItem(productId);
    }

    checkout(paymentAmount) {
        const order = new Order(this.cart);
        order.processOrder(paymentAmount);
        if (order.processed) {
            this.orders.push(order);
            this.cart = new Cart(); 
        }
    }
}

// Testing the system
const system = new ECommerceSystem();
system.addProduct(1, "Laptop", 1000, 5);
system.addProduct(2, "Phone", 500, 10);

console.log("Available Products:");
system.listProducts();

system.addToCart(1, 1);
system.addToCart(2, 2);

console.log("Cart Total:", system.cart.getTotal());

system.checkout(2000); // Correct amount, but an issue is present in cart handling
system.checkout(100); // Insufficient payment, should not reset the cart

console.log("Orders:", system.orders.length);
console.log("Cart Total after checkout attempt:", system.cart.getTotal());