"use client";

import CheckoutItem from "../components/CheckoutItem";
import MainLayout from "../layouts/MainLayout";

export default function Checkout() {
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
        <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
          <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>
          <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
            <div className="w-[65%]">
              <div className="bg-white rounded-lg p-4 border">
                <div className="text-xl font-semibold mb-2">Shipping Address</div>

                <div>
                  <ul className="text-sm mt-2">
                    <li>Name: test</li>
                    <li>Address: test</li>
                    <li>Postcode: test</li>
                    <li>City: test</li>
                    <li>Country: test</li>
                  </ul>
                </div>
              </div>

              <div id="Items" className="bg-white rounded-lg mt-4">
                <CheckoutItem key={product.id} product={product} />
              </div>
            </div>

            <div id="PlaceOrder" className="relative -top-[6px] w-[35%] border rounded-lg">
              <div className="p-4">
                <div className="flex items-baseline justify-between text-sm mb-1">
                  <div>Items (3)</div>
                  <div>$25.00</div>
                </div>

                <div className="flex items-center justify-between mb-2 text-sm">
                  <div>Shipping:</div>
                  <div>Free</div>
                </div>

                <div className="border-t"></div>

                <div className="flex items-center justify-between my-4">
                  <div className="font-semibold">Order total</div>
                  <div className="text-2xl font-semibold">$25.00</div>
                </div>

                <form>
                  <div id="CardElement" className="border border-gray-500 p-2 rounded-sm">
                    <p
                      id="CardError"
                      role="alert"
                      className="text-red-700 text-center font-semibold relative top-2"
                    ></p>
                  </div>

                  <button
                    className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full"
                    type="submit"
                  >
                    Confirm and Pay
                  </button>
                </form>
              </div>

              <div className="flex items-center justify-center p-4 gap-2 border-t">
                <img width={50} src="/images/logo.svg" />
                <div class="font-light my-2">MONEY BACK GUARANTEE</div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
