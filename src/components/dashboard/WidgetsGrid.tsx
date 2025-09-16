'use client';

import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { RiNumbersFill } from "react-icons/ri";

export const WidgetsGrid = () => {

    const count = useAppSelector( state => state.counter.count);

    const itemsWidget = {
        title: count.toString(),
        subtitle: 'Items en el carrito',
        icon: <RiNumbersFill size={50} className="text-blue-500" />,
        href: '/dashboard/counter',
        label: 'Items'
    }
  return (
    <div className='flex flex-wrap p-2'>
        <SimpleWidget {...itemsWidget} />

      </div>
  )
}
    