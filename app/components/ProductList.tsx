"use client";
import React, { useState } from 'react';
import { ShoppingCart, CheckCircle, XCircle } from 'lucide-react';
import { Product } from '@/types/product';

export default function ProductList({ products }: { products: Product[] }) {
const [selectedCategory, setSelectedCategory] = useState<string>('Все');
const [cartCount, setCartCount] = useState<number>(0);

const categories = ['Все', ...Array.from(new Set(products.map(p => p.category)))];

const filteredProducts = selectedCategory === 'Все' 
? products 
: products.filter(p => p.category === selectedCategory);

return (
<div className="space-y-6">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 border border-neutral-200 rounded-xl shadow-sm">
<div className="flex flex-wrap gap-2">
{categories.map(cat => (
<button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${selectedCategory === cat ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}`}>{cat}</button>
))}
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg text-sm font-semibold text-neutral-800 shrink-0">
<ShoppingCart className="w-4 h-4" />Корзина: <span className="text-neutral-900">{cartCount}</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
{filteredProducts.map(product => (
<div key={product.id} className="bg-white border border-neutral-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
<div>
<div className="h-44 bg-neutral-100 w-full overflow-hidden relative">
<img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"/>
<span className="absolute top-2 right-2 px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-neutral-600 rounded border border-neutral-200">{product.category}</span>
</div>
<div className="p-4 space-y-2">
<h3 className="font-bold text-sm text-neutral-800 line-clamp-2 h-10">{product.title}</h3>
<div className="flex items-center gap-1.5 text-xs">
{product.inStock ? (
<span className="text-green-600 flex items-center gap-1"><CheckCircle className="w-3 h-3"/>В наличии</span>
) : (
<span className="text-red-500 flex items-center gap-1"><XCircle className="w-3 h-3"/>Нет на складе</span>
)}
</div>
</div>
</div>
<div className="p-4 pt-0 border-t border-neutral-100 mt-2 flex items-center justify-between gap-2">
<span className="text-base font-bold text-neutral-900">{product.price.toLocaleString('ru-RU')} ₽</span>
<button onClick={() => product.inStock && setCartCount(prev => prev + 1)} disabled={!product.inStock} className={`inline-flex items-center justify-center p-2 rounded-lg transition-all ${product.inStock ? 'bg-neutral-900 text-white hover:bg-neutral-800' : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'}`} aria-label="В корзину"><ShoppingCart className="w-4 h-4"/></button>
</div>
</div>
))}
</div>
</div>
);
}