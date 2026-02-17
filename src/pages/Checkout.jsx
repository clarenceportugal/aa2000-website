import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, MapPin, User, Mail, Phone, ArrowLeft, CheckCircle } from 'lucide-react';

const Checkout = () => {
    const { cart, subtotal, discount, discountAmount, totalPrice, appliedCode, clearCart } = useCart();
    const navigate = useNavigate();
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate order placement
        setOrderPlaced(true);
        setTimeout(() => {
            clearCart();
            navigate('/');
        }, 3000);
    };

    if (cart.length === 0 && !orderPlaced) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <h2 className="text-3xl text-slate-900 font-bold mb-4">Your Cart is Empty</h2>
                <p className="text-slate-600 mb-8">Add items to your cart before checking out.</p>
                <button onClick={() => navigate('/products')} className="px-6 py-3 bg-aa-blue text-slate-900 rounded-lg font-bold hover:bg-aa-blue-dark transition-colors">
                    Browse Products
                </button>
            </div>
        );
    }

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <div className="bg-white-light p-8 rounded-2xl border border-slate-200/50 shadow-xl max-w-md w-full text-center">
                    <div className="bg-green-500/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                        <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Order Placed Successfully!</h2>
                    <p className="text-slate-600 mb-6">Thank you for your purchase. We'll send you a confirmation email shortly.</p>
                    <p className="text-sm text-slate-500">Redirecting to home page...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <button onClick={() => navigate('/cart')} className="flex items-center text-aa-blue hover:text-aa-cyan mb-8 font-medium">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Cart
                </button>

                <h1 className="text-3xl font-bold text-slate-900 mb-8">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2 space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Customer Information */}
                            <div className="bg-white-light p-6 rounded-xl border border-slate-200/50">
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                    <User className="h-5 w-5 mr-2 text-aa-blue" />
                                    Customer Information
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-aa-blue focus:ring-1 focus:ring-aa-blue"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-aa-blue focus:ring-1 focus:ring-aa-blue"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-600 mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-aa-blue focus:ring-1 focus:ring-aa-blue"
                                            placeholder="+63 912 345 6789"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="bg-white-light p-6 rounded-xl border border-slate-200/50">
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                    <MapPin className="h-5 w-5 mr-2 text-aa-blue" />
                                    Shipping Address
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-2">Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            required
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-aa-blue focus:ring-1 focus:ring-aa-blue"
                                            placeholder="123 Main Street"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-2">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                required
                                                value={formData.city}
                                                onChange={handleChange}
                                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-aa-blue focus:ring-1 focus:ring-aa-blue"
                                                placeholder="Manila"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-2">Zip Code</label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                required
                                                value={formData.zipCode}
                                                onChange={handleChange}
                                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-aa-blue focus:ring-1 focus:ring-aa-blue"
                                                placeholder="1000"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Information */}
                            <div className="bg-white-light p-6 rounded-xl border border-slate-200/50">
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                    <CreditCard className="h-5 w-5 mr-2 text-aa-blue" />
                                    Payment Information
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-600 mb-2">Card Number</label>
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            required
                                            value={formData.cardNumber}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-aa-blue focus:ring-1 focus:ring-aa-blue"
                                            placeholder="1234 5678 9012 3456"
                                            maxLength="19"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-2">Expiry Date</label>
                                            <input
                                                type="text"
                                                name="expiryDate"
                                                required
                                                value={formData.expiryDate}
                                                onChange={handleChange}
                                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-aa-blue focus:ring-1 focus:ring-aa-blue"
                                                placeholder="MM/YY"
                                                maxLength="5"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-2">CVV</label>
                                            <input
                                                type="text"
                                                name="cvv"
                                                required
                                                value={formData.cvv}
                                                onChange={handleChange}
                                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-aa-blue focus:ring-1 focus:ring-aa-blue"
                                                placeholder="123"
                                                maxLength="4"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-aa-blue text-slate-900 rounded-xl font-bold text-lg hover:bg-aa-blue-dark transition-colors shadow-lg shadow-aa-blue/20"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white-light p-6 rounded-xl border border-slate-200/50 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6 border-b border-slate-200/30 pb-6">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between text-sm">
                                        <span className="text-slate-600">{item.name} x {item.quantity}</span>
                                        <span className="text-slate-900 font-medium">PHP {(item.price * item.quantity).toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 mb-6 border-b border-slate-200/30 pb-6">
                                <div className="flex justify-between text-slate-600">
                                    <span>Subtotal</span>
                                    <span>PHP {subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                </div>
                                {discount > 0 && (
                                    <div className="flex justify-between text-green-600">
                                        <span>Discount ({appliedCode})</span>
                                        <span>-PHP {discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-slate-600">
                                    <span>Shipping</span>
                                    <span>FREE</span>
                                </div>
                            </div>

                            <div className="flex justify-between text-slate-900 font-bold text-xl mb-4">
                                <span>Total</span>
                                <span>PHP {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>

                            <p className="text-slate-600 text-xs text-center">
                                Secure checkout powered by AA2000 Security.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
