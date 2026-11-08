import React from 'react';
import ProductList from './components/ProductList';
import { Product } from '@/types/product';

export default function CatalogPage() {
const mockProducts: Product[] = [
{ id: 1, title: "Беспроводные наушники NoiseCancel Pro", price: 12900, category: "Электроника", image: "https://unsplash.com", inStock: true },
{ id: 2, title: "Смарт-часы ActiveFit 5 X-Screen", price: 18400, category: "Электроника", image: "https://unsplash.com", inStock: true },
{ id: 3, title: "Кожаный городской рюкзак UrbanPack", price: 6200, category: "Аксессуары", image: "https://unsplash.com", inStock: false },
{ id: 4, title: "Механическая клавиатура Clicky Neon RGB", price: 8900, category: "Электроника", image: "https://unsplash.com", inStock: true },
{ id: 5, title: "Солнцезащитные очки Сlassic Aviator", price: 4500, category: "Аксессуары", image: "https://unsplash.com", inStock: true },
{ id: 6, title: "Кроссовки для бега RunSpeed Air", price: 11200, category: "Одежда", image: "https://unsplash.com", inStock: true },
{ id: 7, title: "Портативная влагозащитная колонка Boombox", price: 7400, category: "Электроника", image: "https://unsplash.com", inStock: true },
{ id: 8, title: "Минималистичный кошелек ручной работы", price: 2900, category: "Аксессуары", image: "https://unsplash.com", inStock: true },
{ id: 9, title: "Худи оверсайз из плотного хлопка CozyWear", price: 5800, category: "Одежда", image: "https://unsplash.com", inStock: false },
{ id: 10, title: "Настольная светодиодная лампа SmartLight", price: 3900, category: "Дом", image: "https://unsplash.com", inStock: true },
{ id: 11, title: "Набор керамических чашек Artisan (2 шт)", price: 2400, category: "Дом", image: "https://unsplash.com", inStock: true },
{ id: 12, title: "Спортивная бутылка для воды SteelBottle 1L", price: 1900, category: "Дом", image: "https://unsplash.com", inStock: true }
];

return (
<div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
<header className="border-b border-neutral-200 bg-white">
<div className="max-w-7xl w-full mx-auto px-4 py-4 flex items-center justify-between">
<h1 className="text-xl font-bold tracking-tight">TechStore</h1>
<span className="text-xs text-neutral-400">Каталог товаров v2.0</span>
</div>
</header>
<main className="max-w-7xl w-full mx-auto px-4 py-8">
<ProductList products={mockProducts} />
</main>
</div>
);
}
