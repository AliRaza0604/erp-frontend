import React from 'react';

export default function Basket(props) {
  const { invoice_items, onAdd, onRemove} = props;
  const itemsPrice = invoice_items.reduce((a, c) => a + c.quantity * c.price, 0);


  const totalPrice = itemsPrice;
  return (
    <aside className="bg-secondary p-4 m-2 rounded-lg">
      <h2>Cart Items</h2>
      <div>
        {invoice_items.length === 0 && <div>Cart is empty</div>}
        {invoice_items.map((item) => (
          <div key={item.prodid} className="flex justify-between">
            <div>{item.name}</div>
            <div>
              <button onClick={() => onRemove(item)} className="bg-red-600 w-6">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="bg-green-700 w-6">
                +
              </button>
            </div>

            <div className="text-right">
              {item.quantity} x ${item.price}
            </div>
          </div>
        ))}

        {invoice_items.length !== 0 && (
          <>
            <hr></hr>
            <div className="flex justify-between">
              <div className="">Items Price</div>
              <div className="text-right">${itemsPrice}</div>
            </div>

            <div className="flex justify-between">
              <div className="">
                <strong>Total Price</strong>
              </div>
              <div className="text-right">
                <strong>${totalPrice}</strong>
              </div>
            </div>
            <hr />
            
          </>
        )}
      </div>
    </aside>
  );
}
