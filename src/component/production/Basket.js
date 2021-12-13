import React, { useState } from 'react';

export default function Basket(props) {
  const { components, onAdd, onAdd2, onRemove, onCheckout } = props;
  const itemsPrice = components.reduce((a, c) => a + c.quantity * c.price, 0);

  // const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice;
  return (
    <aside className="bg-secondary p-4 m-2 rounded-lg">
      <h2>Cart Items</h2>
      <div>
        {components.length === 0 && <div>Cart is empty</div>}
        {components.map((item) => (
          <div key={item.itemid} className="flex justify-between">
            <div>{item.itemname}</div>
            <div>
              <button onClick={() => onRemove(item)} className="bg-red-600 w-6">
                -
              </button>{' '}
              <button onClick={() => {onAdd(item); onAdd2(item)}} className="bg-green-700 w-6">
                +
              </button>
            </div>

            <div className="text-right">
              {item.quantity}
              {/* {item.quantity} x ${item.price} */}
            </div>
          </div>
        ))}

        {components.length !== 0 && (
          <>
            <hr></hr>
            {/* <div className="flex justify-between">
              <div className="">Items Price</div>
              <div className="text-right">${itemsPrice}</div>
            </div> */}
            {/* <div className="flex justify-between">
              <div className="">Tax Price</div>
              <div className="text-right">${taxPrice}</div>
            </div>
            <div className="flex justify-between">
              <div className="">Shipping Price</div>
              <div className="text-right">
                ${shippingPrice}
              </div>
            </div> */}

            {/* <div className="flex justify-between">
              <div className="">
                <strong>Total Price</strong>
              </div>
              <div className="text-right">
                <strong>${totalPrice}</strong>
              </div>
            </div> */}
            <hr />
            
          </>
        )}
      </div>
    </aside>
  );
}
