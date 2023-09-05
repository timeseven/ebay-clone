"use client";

import CartItem from "../components/CartItem";
import SimilarProducts from "../components/SimilarProducts";
import MainLayout from "../layouts/MainLayout";

export default function Cart() {
  const product = {
    id: 1,
    title: "Brown Leather Bag",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus odit porro amet omnis! Voluptas dolore dolor amet doloribus deleniti ipsum repudiandae. Quod praesentium ipsam veritatis qui vero quisquam, omnis illum nesciunt distinctio beatae odio dicta cumque similique voluptate est fugit, aliquid unde iure corrupti nam? Nihil aspernatur, ut dignissimos explicabo porro soluta magnam assumenda ad a temporibus possimus suscipit cum, natus dolores ducimus dolore voluptas quasi nemo sequi repellendus molestiae. Ullam vero iusto repudiandae repellat non accusantium veniam aliquid eligendi enim cum ducimus, quos iste quam necessitatibus ipsa architecto nostrum, minima consequatur itaque amet consectetur. Corrupti iure enim, quisquam culpa asperiores consequuntur accusamus perspiciatis nisi doloribus, pariatur libero dolores harum, temporibus dignissimos necessitatibus modi laudantium optio beatae veritatis omnis eligendi incidunt? Qui placeat ab voluptatibus aspernatur deserunt soluta accusamus cum, doloremque sit autem vero, quas facilis, impedit officia? Ratione eos, est corrupti delectus illum voluptas maiores vitae obcaecati commodi eveniet praesentium laboriosam officia natus. Alias similique consectetur pariatur vel, possimus aperiam rerum reprehenderit error quidem quae perferendis esse ab. Asperiores odio commodi et totam animi, consequatur enim eum consectetur nisi est magnam aliquam veniam incidunt ullam cupiditate vel maiores, nihil velit. Amet dolorum provident accusamus dolores repellat! Atque, veritatis rerum. Excepturi molestiae voluptatem fuga consequuntur maxime vel distinctio! Amet, placeat ut corrupti sequi ratione explicabo! Quam nulla sed officiis optio ut laudantium odio suscipit voluptate blanditiis qui. Provident temporibus, veritatis deserunt deleniti vitae incidunt blanditiis doloremque perspiciatis consequatur alias fugiat ad reiciendis repellat et, aliquam facilis corrupti nostrum optio! Ea odio modi officia consectetur minima cupiditate voluptatum assumenda praesentium minus possimus. Nihil ea vitae dolorum, eius nulla officia, dolores nesciunt sit ipsum culpa dolore tenetur sunt reprehenderit necessitatibus expedita dicta odio voluptate, repellat sint quaerat ipsa sequi sed aperiam id. Voluptatum deserunt tempore, labore assumenda delectus mollitia asperiores in itaque.",
    url: "https://picsum.photos/id/7",
    price: 2500,
  };
  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
          <div className="text-2xl font-bold my-4">Shopping cart</div>
          <div className="relative flex items-baseline justify-between gap-2">
            <div className="w-[65%]">
              <CartItem key={product.id} product={product} />
            </div>
            <div id="GoToCheckout" className="md:w-[33%] absolute top-0 right-0 m-2">
              <div className="bg-white p-4 border">
                <button className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4">
                  Go To Checkout
                </button>

                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                  <div>Items (3)</div>
                  <div>$25.00</div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div>Shipping:</div>
                  <div>Free</div>
                </div>

                <div className="border-b border-gray-300"></div>

                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                  <div>Subtotal</div>
                  <div>$25.00</div>
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
