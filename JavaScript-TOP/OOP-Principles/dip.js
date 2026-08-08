// Low-level module (Specific implementation)
class StripePayment {
    makePayment(amount) {
        console.log(`Paid $${amount} using Stripe.`);
    }
}

class Store {
    constructor() {
        this.paymentProcessor = new StripePayment();
    }

    purchaseItem(amount) {
        this.paymentProcessor.makePayment(amount);
    }
}

// Usage
const store = new Store();
store.purchaseItem(100);


// Abstraction / Interface (General rule)
class PaymentProcessor {
    makePayment(amount) {
        throw new Error("This method must be overridden");
    }
}

// Low-level module 1 (Stripe)
class StripePayment extends PaymentProcessor {
    makePayment(amount) {
        console.log(`Paid $${amount} using Stripe.`);
    }
}

class PayPalPayment extends PaymentProcessor {
    makePayment(amount) {
        console.log(`Paid $${amount} using PayPal.`);
    }
}

// High-level module (Dependent on Abstraction, not concrete class)
class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseItem(amount) {
        this.paymentProcessor.makePayment(amount);
    }
}

const stripePayment = new StripePayment();
const storeWithStripe = new Store(stripePayment);
storeWithStripe.purchaseItem(150);

const payPalPayment = new PayPalPayment();
const storeWithPayPal = new Store(payPalPayment);
storeWithPayPal.purchaseItem(200);