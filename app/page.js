"use client";

import CarouselComp from "./components/CarouselComp";
import ProductComp from "./components/ProductComp";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Brown Leather Bag",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quae.",
      url: "https://picsum.photos/id/7",
      price: 2500,
    },
    {
      id: 2,
      title: "Schol Books",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur veniam accusamus maxime autem assumenda aut delectus, id quos modi! Nesciunt.",
      url: "https://picsum.photos/id/20",
      price: 1500,
    },
  ];
  return (
    <MainLayout>
      <CarouselComp />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductComp key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
