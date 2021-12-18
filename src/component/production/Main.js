import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="bg-secondary p-4 m-2 rounded-lg">
      <h2>Raw Material</h2>
      <div className="p-3 grid grid-cols-4 grid-rows-3 gap-x-1 gap-y-1 auto-rows-auto grid-flow-row">
        {products?.map((product) => (
          <Product key={product.itemid} product={product} onAdd={onAdd} ></Product>
        ))}
      </div>
    </main>
  );
}
