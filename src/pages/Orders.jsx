import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { useState, useEffect } from 'react';

const Orders = () => {

  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setDate(currentDate);
  }, []);
  
    useEffect(()=>{
  
      const tempData = [];
  
      for(const itemId in cartItems){
        for(const size in cartItems[itemId]){
          let qty = cartItems[itemId][size]
          if (qty > 0) {
            tempData.push({
              _id: itemId,
              size:size,
              quantity: qty
            });
          }
        }
      }
      setCartData(tempData);
      console.log("tempData:", tempData);
    },[cartItems])

  return (
    <div className='border-t pt-16'>

        <div className='text-2xl'>
            <Title text1={'MY'} text2={'ORDERS'}/>
        </div>

        <div>
          {
            cartData.map((item, index)=>{

             const productData = products.find((product) => product._id === item._id)
             return (
              <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div className='flex item-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} />
                  <div>
                    <p className='sm:text-base font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-3 mt2 texxt-base text-gray-700'>
                      <p className='text-lg'>{currency} {productData.price * item.quantity}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className='mt-2'>Date: <span className='text-gray-400'>{date}</span></p>
                  </div>
                </div>
                <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                      <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                      <p className='text-sm md:text-base'> Ready to ship</p>
                  </div>
                  <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>

                </div>
              </div>
             )
            })
          }
        </div>
    </div>
  )
}

export default Orders