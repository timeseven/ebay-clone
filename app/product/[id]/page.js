"use client";

import SimilarProducts from "@/app/components/SimilarProducts";
import { useCart } from "@/app/context/cart";
import MainLayout from "@/app/layouts/MainLayout";
import { toast } from "react-toastify";

export default function Product({ params }) {
  const cart = useCart();

  const product = {
    id: 1,
    title: "Brown Leather Bag",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quae.",
    url: "https://picsum.photos/id/7",
    price: 2500,
  };
  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-10">
            {product?.url ? (
              <img className="w-[40%] rounded-lg" src={product?.url + "/280"} />
            ) : (
              <div className="w-[40%]"></div>
            )}
            <div className="px-4 w-full">
              <div className="font-bold text-xl">{product?.title}</div>
              <div className="text-sm text-gray-700 pt-2">Brand New - Full Warranty</div>
              <div className="border-b py-1"></div>
              <div className="pt-3 pb-2">
                <div className="flex items-center">
                  Condition: <span className="font-bold text-[17px] ml-2">New</span>
                </div>
              </div>
              <div className="border-b py-1"></div>
              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    Price:
                    {product?.price ? (
                      <div className="font-bold text-[20px] ml-2">AUD ${(product?.price / 100).toFixed(2)}</div>
                    ) : null}
                  </div>
                  <button
                    onClick={() => {
                      if (cart.isItemAdded) {
                        cart.removeFromCart(product);
                        toast.info("Remove from cart", { autoClose: 3000 });
                      } else {
                        cart.addToCart(product);
                        toast.success("Added to cart", { autoClose: 3000 });
                      }
                    }}
                    className={`text-white py-2 px-20 bg-[#3498C9] rounded-full cursor-pointer
                  ${cart.isItemAdded ? "bg-[#e9a321] hover:bg-[#bf851a]" : "bg-[#3498C9] hover:bg-[#0054A0]"}`}
                  >
                    {cart.isItemAdded ? "Remove From Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>
              <div className="border-b py-1"></div>
              <div className="pt-3">
                <div className="pt-3">
                  <div className="font-semibold pb-1">Description:</div>
                  <div className="text-sm">{product?.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SimilarProducts />
      </MainLayout>
    </>
  );
}
