import React from 'react';

export default function Basket(props) {
  const { components, onAdd, onRemove} = props;
  const itemsPrice = components.reduce((a, c) => a + c.quantity * c.price, 0);

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
              <button onClick={() => onAdd(item)} className="bg-green-700 w-6">
                +
              </button>
            </div>

            <div className="text-right">
              {item.quantity}
            </div>
          </div>
        ))}

      </div>
    </aside>
  );
}
