import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHead } from '../components/ui/PageHead';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, discount, discountAmount, totalPrice, applyDiscount, appliedCode } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleApplyCode = () => {
    if (!promoCode) return;
    const result = applyDiscount(promoCode);
    if (result.success) {
      setMessage({ type: 'success', text: result.message });
    } else {
      setMessage({ type: 'error', text: result.message });
    }
  };

  if (cart.length === 0) {
    return (
      <article className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <PageHead title="Cart" description="Your shopping cart - AA2000 Security" />
        <h2 className="text-3xl text-slate-900 font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-slate-600 mb-8">Looks like you haven't added any security solutions yet.</p>
        <Link to="/products" className="px-6 py-3 bg-aa-blue text-slate-900 rounded-lg font-bold hover:bg-aa-blue-dark transition-colors">
          Browse Products
        </Link>
      </article>
    );
  }

  return (
    <article className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <PageHead title="Cart" description="Your shopping cart - AA2000 Security" />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white-light p-4 rounded-xl flex items-center space-x-4 border border-slate-200/50">
                <img src={item.image} alt={item.name} loading="lazy" className="w-24 h-24 object-cover rounded-lg" />

                <div className="flex-grow">
                  <h3 className="text-slate-900 font-bold">{item.name}</h3>
                  <p className="text-slate-600 text-sm mb-2">{item.category}</p>
                  <p className="text-aa-blue font-bold">PHP {item.price.toLocaleString()}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-white text-slate-900 hover:bg-aa-blue transition-colors">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-slate-900 font-medium">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-white text-slate-900 hover:bg-aa-blue transition-colors">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:text-red-400 transition-colors">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white-light p-6 rounded-xl border border-slate-200/50 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6 border-b border-slate-200/30 pb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>PHP {subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax (Wait for quote)</span>
                  <span>PHP 0.00</span>
                </div>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-600 mb-6 border-b border-slate-200/30 pb-6">
                  <span>Discount ({appliedCode})</span>
                  <span>-PHP {discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              )}

              <div className="mb-6">
                <label className="block text-slate-600 text-sm font-medium mb-2">Redeem Code</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:border-aa-blue focus:ring-1 focus:ring-aa-blue"
                  />
                  <button
                    onClick={handleApplyCode}
                    className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {message && (
                  <p className={`text-xs mt-2 ${message.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                    {message.text}
                  </p>
                )}
              </div>

              <div className="flex justify-between text-slate-900 font-bold text-xl mb-8">
                <span>Total</span>
                <span>PHP {totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>

              <Link to="/checkout" className="w-full py-4 bg-aa-blue text-slate-900 rounded-xl font-bold text-lg hover:bg-aa-blue-dark transition-colors shadow-lg shadow-aa-blue/20 flex items-center justify-center">
                Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <p className="text-slate-600 text-xs text-center mt-4">
                Secure checkout powered by AA2000 Security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cart;
