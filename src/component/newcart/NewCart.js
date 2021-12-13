import React, {useState, useEffect} from "react";
import Basket from "./Basket";
import Main from "./Main";
import axios from "axios";

let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        }
    }
})

const NewCart = () => {

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [accid, setAccid] = useState();
    const [duedate, setDuedate] = useState();
    const [curdate, setCurdate] = useState(date);
    const [collectorid, setCollectorid] = useState('null');


    useEffect (async () => {
        try {
            let res = await instance.get('/api/products/',
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
            setProducts(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    const [products,setProducts] = useState();
    // const {products} = data;
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.prodid === product.prodid);
        if (exist) {
        setCartItems(
            cartItems.map((x) =>
            x.prodid === product.prodid ? { ...exist, quantity: exist.quantity + 1 } : x
            )
        );
        } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
   

    const onAdd2 = (product) => {
        const exist = cartItems.find((x) => x.prodid === product.prodid);
        if (exist) {
        setCartItems(
            cartItems.map((x) =>
            x.prodid === product.prodid ? { ...exist, amount: exist.amount + exist.price } : x
            )
        );
        } else {
        setCartItems([...cartItems, { ...product, amount: exist.price }]);
        }
    };


    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.prodid === product.prodid);
        if (exist.quantity === 1) {
        setCartItems(cartItems.filter((x) => x.prodid !== product.prodid));
        } else {
        setCartItems(
            cartItems.map((x) =>
            x.prodid === product.prodid ? { ...exist, quantity: exist.quantity - 1 } : x
            )
        );
        }
    };

    const onCheckout = () => {
        console.log(cartItems)
        console.log(localStorage.getItem('staffid'))
        console.log(accid)
        console.log(duedate)
        console.log(curdate)
        console.log(collectorid)
    }

    return(
        <div className="flex">
            <div>
                <Main products={products} onAdd={onAdd} onAdd2={onAdd2} ></Main>
                <Basket  cartItems={cartItems} onAdd={onAdd} onAdd2={onAdd2} onRemove={onRemove} onCheckout={onCheckout}></Basket>
                <div className="bg-secondary p-4 m-2 rounded-lg">
                    <div className='pt-2 pb-2'>
                        <input 
                        type="text"
                        required
                        value={accid}
                        onChange={(e) => setAccid(e.target.value)}
                        placeholder='Customer ID'
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                    </div>

                    <div className='pt-2 pb-2'>
                        <label htmlFor="duedate" className="block text-sm font-medium text-text2" >Due Date</label>
                        <input 
                        required
                        type="date"
                        value={duedate}
                        onChange={(e) => setDuedate(e.target.value)}
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                    </div>
                    <hr/>
                    <div className="flex justify-between">
                    <button onClick={onCheckout}>
                        Checkout
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewCart;