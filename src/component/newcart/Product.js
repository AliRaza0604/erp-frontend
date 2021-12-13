import React from 'react';
import { BsLightbulbFill} from 'react-icons/bs';;

export default function Product(props) {
  const { product, onAdd, onAdd2 } = props;
  return (
    <div className="m-1 w-62 p-3 border-2 border-gray-300 rounded-lg bg-white box-content flex flex-row">
        <div className="w-20 h-36 mr-3 rounded-lg bg-white grid place-content-center">
                <BsLightbulbFill className="h-10 w-10 text-primary" />
        </div>
        <div className="flex flex-col justify-between">
                <p className="text-lg text-primary">PKR<span className="mx-1 text-2xl">{product.price}</span>Rs/pc</p>
                <p className="text-base text-text3" title="ProductName">{product.name}</p>
                <div className="flex flex-row">
                    <span className="text-base text-secondary">{product.description}</span>
                </div>
            <div className="flex flex-row justify-end">
                <button id={`product`+props.id} className="ml-4 px-4 border-2 border-primary rounded-md bg-primary text-text1" onClick={() => {onAdd(product); onAdd2(product)}}  >Add To Cart</button>
            </div>
        </div>
    </div>
  );
}
