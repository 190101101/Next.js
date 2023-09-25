import Title from "@/components/ui/Title";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_300px)]">
      <div className="flex justify-between">
        <div className="min-h-[calc(100vh_-_300px)] items-center">
          <table>
            <thead>
              <tr>
                <th>product</th>
                <th>extras</th>
                <th>price</th>
                <th>quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image src="/images/f1.png" alt="" width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td>
                  <span>mayonez, aci, sos, ketcap</span>
                </td>
                <td>$20</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_300px)] flex-col justify-center p-8 text-white">
          <Title addClass={"text-[40px]"}>Cart Total</Title>
          <div className="flex flex-col ">
            <span>Subtotal: $20</span>
            <span>Discount: 0.00</span>
            <span>Total: $20</span>
          </div>
          <button className="btn-primary mt-4">Checkout now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
