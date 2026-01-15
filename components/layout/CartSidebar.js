"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";

// Dummy Items in Cart
const cartItems = [
  {
    id: 1,
    name: "Midnight Velour",
    price: "$145",
    image: "/images/product-1.jpg",
  },
  { id: 2, name: "Liquid Gold", price: "$180", image: "/images/product-2.jpg" },
];

export default function CartSidebar() {
  const { isCartOpen, closeCart } = useShop();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* 1. BACKDROP (Click to close) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* 2. SIDEBAR PANEL */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#05080f]/90 backdrop-blur-xl border-l border-white/10 z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="font-serif text-2xl text-white">
                Your Collection
              </h2>
              <button
                onClick={closeCart}
                className="text-white/50 hover:text-accent transition-colors"
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center group">
                    {/* Image */}
                    <div className="relative w-20 h-20 bg-white/5 rounded-sm overflow-hidden border border-white/10">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-white group-hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-white/50 text-sm">{item.price}</p>
                    </div>
                    {/* Remove */}
                    <button className="text-white/30 hover:text-red-400 transition-colors">
                      <Trash2 size={18} strokeWidth={1} />
                    </button>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-white/30 gap-4">
                  <ShoppingBag size={48} strokeWidth={0.5} />
                  <p className="text-sm uppercase tracking-widest">
                    Your collection is empty
                  </p>
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            <div className="p-6 border-t border-white/5 bg-white/5">
              <div className="flex justify-between items-center mb-6 text-white">
                <span className="text-sm uppercase tracking-widest text-white/50">
                  Subtotal
                </span>
                <span className="font-serif text-2xl">$325.00</span>
              </div>
              <button className="w-full py-4 bg-accent text-midnight font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
