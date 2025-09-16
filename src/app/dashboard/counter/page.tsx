
import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";


export const metadata:Metadata = {
 title: 'Shopping Cart',
 description: 'Contador',
};

//? "PRC" -> shared snippet
export default function CounterPage() {

 

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de Compras</span>
    <CartCounter value={20} />
      
    </div>
  );
}