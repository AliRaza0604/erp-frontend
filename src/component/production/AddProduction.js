import React, {useState, useEffect} from "react";
import Basket from "./Basket";
import Main from "./Main";
import axios from "axios";

let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        },
        post: {
            'Content-Type': 'application/json'
        }
    }
})

const AddProduction = () => {

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [prodid, setprodid] = useState('');
    const [duedate, setDuedate] = useState();
    const [startdate, setstartdate] = useState(date);
    // const [collectorid, setCollectorid] = useState('null');
    const [staffid, setStaffid] = useState(localStorage.getItem('staffid'));
    const [quantity, setQuantity] = useState('');

    const fun =  (async () => {
        try {
            let res = await instance.get('/api/inventory/',
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
    })

    useEffect( () => {fun()},[])
    const [products,setProducts] = useState();
    // const {products} = data;
    const [components, setcomponents] = useState([]);

    const onAdd = (product) => {
        const exist = components.find((x) => x.itemid === product.itemid);
        if (exist) {
        setcomponents(
            components.map((x) =>
            x.itemid === product.itemid ? { ...exist, "quantity": exist.quantity + 1 } : x
            )
        );
        } else {
        setcomponents([...components, { ...product, "quantity": 1 }]);
        }
    };
   

    const onAdd2 = (product) => {
        const exist = components.find((x) => x.itemid === product.itemid);
        if (exist) {
        setcomponents(
            components.map((x) =>
            x.itemid === product.itemid ? { ...exist, amount: exist.amount + exist.price } : x
            )
        );
        } else {
        setcomponents([...components, { ...product, amount: exist.price }]);
        }
    };


    const onRemove = (product) => {
        const exist = components.find((x) => x.itemid === product.itemid);
        if (exist.quantity === 1) {
        setcomponents(components.filter((x) => x.itemid !== product.itemid));
        } else {
        setcomponents(
            components.map((x) =>
            x.itemid === product.itemid ? { ...exist, quantity: exist.quantity - 1 } : x
            )
        );
        }
    };

    const onCheckout = async () => {
        console.log(components)
        // console.log(localStorage.getItem('staffid'))
        console.log(prodid)
        // console.log(duedate)
        console.log(staffid)
        console.log(startdate)
        console.log(quantity)
        // console.log(collectorid)

        try {
          let res = await instance.post('/api/productions/',
              {
                  // headers: {
                  //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                  // }

                  "startdate":startdate,
                  quantity,
                  staffid,
                  prodid,
                  components
              }
          );
          console.log(res);
        }
        catch (e) {
            console.log(e);
        }

    }

    return(
        <div className="flex">
            <div>
                <Main products={products} onAdd={onAdd} onAdd2={onAdd2} ></Main>
                <Basket  components={components} onAdd={onAdd} onAdd2={onAdd2} onRemove={onRemove} onCheckout={onCheckout}></Basket>
                <div className="bg-secondary p-4 m-2 rounded-lg">
                    <div className='pt-2 pb-2'>
                        <input 
                        type="text"
                        required
                        value={prodid}
                        onChange={(e) => setprodid(e.target.value)}
                        placeholder='Product ID'
                        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                    </div>

                    <div className='pt-2 pb-2'>
                        <input 
                        required
                        placeholder="Quantity"
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
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

export default AddProduction;