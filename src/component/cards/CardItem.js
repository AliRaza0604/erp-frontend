import React, { useState} from 'react';
import { BsLightbulbFill, BsFileEarmark} from 'react-icons/bs';
import AvailableButton from '../forms/AvailableButton';
import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        delete: {
            'Content-Type': 'application/json'
        }
    }
  })


const CardItems = (props) => {

    const {data} = props;

    const removeProd = async () => {
      
        try {
            let res = await instance.delete(`/api/products/${data.prodid}/`,
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    const removeRaw = async () => {
      
        try {
            let res = await instance.delete(`/api/inventory/${data.itemid}/`,
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [paymentDate,setpaymentDate] = useState(date);
    const [collectorID,setCollectorID] = useState(localStorage.getItem('staffid'));

    const updateInvoice = async () => {

        console.log(paymentDate)
        console.log(collectorID)
  
        try {
            let res = await instance.put(`/api/invoices/${data.invid}/makepayment/`,
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }

                    "paymentDate":paymentDate,
                    collectorID


                }
            );
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    const removeProduction = async () => {
      
        try {
            let res = await instance.get(`/api/productions/${data.productionid}/markfinished`,
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    
    return (
        <>
        {
            (props.type === 'invoice') ?
            <>
                <div className="m-1 w-72 p-3 border-2 border-gray-300 rounded-lg bg-white box-content flex flex-row shadow-md">
                    <div className="w-20 h-36 mr-3 rounded-lg bg-white grid place-content-center">
                            <BsFileEarmark className="h-10 w-10 text-primary" /> 
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-2xl text-primary">Status: {data.paymentstatus}</p>
                        <p className="text-base text-text3" title="ProductName">Due date: {data.duedate}</p>
                        <div className="flex flex-row">
                            <span className="text-base text-secondary">Creation date: {data.creationdate}</span>
                        </div>
                        <p className="text-base text-text3" title="ProductName">Customer ID: {data.accid}</p>
                        <p className="text-base text-text3" title="ProductName">Salesman ID: {data.salesmanid}</p>
                        <div className="flex flex-row justify-end">
                            <button className="ml-4 mt-2 px-4 border-2 border-primary rounded-md bg-primary text-text1" onClick={updateInvoice} >Payment Collected</button>    
                        </div>
                    </div>
                </div>
            </>:
            (props.type === 'purch') ?
            <>
                <div className="m-1 w-72 p-3 border-2 border-gray-300 rounded-lg bg-white box-content flex flex-row shadow-md">
                    <div className="w-20 h-36 mr-3 rounded-lg bg-white grid place-content-center">
                            <BsFileEarmark className="h-10 w-10 text-primary" /> 
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-2xl text-primary">Type: {data.purchtype}</p>
                        <p className="text-base text-text3" title="ProductName">Purchase date: {data.purchdate}</p>
                        <div className="flex flex-row">
                            <span className="text-base text-secondary">Rate: {data.rate}</span>
                        </div>
                        <p className="text-base text-text3" title="ProductName">Quantity: {data.quantity}</p>
                        <p className="text-base text-text3" title="ProductName">Amount: {data.amount}</p>
                        <p className="text-base text-text3" title="ProductName">Supplier ID: {data.supplierid}</p>
                        <p className="text-base text-text3" title="ProductName">itemid: {data.itemid}</p>
                    </div>
                </div>
            </>:
            <>
                <div className="m-1 w-80 p-3 border-2 border-gray-300 rounded-lg bg-white box-content flex flex-row shadow-md">
                    <div className="w-20 h-36 mr-3 rounded-lg bg-white grid place-content-center">
                        {
                            (props.type === 'product') ?
                            <BsLightbulbFill className="h-10 w-10 text-primary" /> :
                            (props.type === 'raw') ?
                            <BsLightbulbFill className="h-10 w-10 text-primary" />:
                            (props.type === 'prod') ?
                            <BsLightbulbFill className="h-10 w-10 text-primary" />:null
                        }
                    </div>
                    <div className="flex flex-col justify-between">
                        {
                            (props.type === 'product') ?
                            <p className="text-2xl text-primary">PKR  {data.price}Rs/pc</p> :
                            (props.type === 'raw') ?
                            <p className="text-2xl text-primary">{data.itemname}</p> :
                            (props.type === 'prod') ?
                            <p className="text-2xl text-primary">Status: {data.status}</p>:null
                        }
                        {
                            (props.type === 'product') ?
                            <p className="text-base text-text3" title="ProductName">{data.name}</p> :
                            (props.type === 'prod') ?
                            <p className="text-base text-text3" title="ProductName">Start Date: {data.startdate}</p> :null
                        }
                        {
                            (props.type === 'product') ?
                            <div className="flex flex-row">
                                <span className="text-base text-secondary">{data.description}</span>
                            </div> :
                            (props.type === 'raw') ?
                            <div className="flex flex-row">
                                <span className="text-base text-secondary">{data.description}</span>
                            </div> :
                            (props.type === 'prod') ?
                            <div className="flex flex-row">
                                <span className="text-base text-secondary">End Date: {data.enddate}</span>
                            </div> :null
                        }

                        {
                            (props.type === 'prod') ?
                            <div className="flex flex-row">
                                <span className="text-base text-secondary">Product ID: {data.productionid}</span>
                            </div> :null
                        }

                        {
                            (props.type === 'product') ?
                            <div>
                                <AvailableButton available={data.quantity}/>
                            </div>:
                            (props.type === 'raw') ?
                            <div className="mb-2 flex flex-row">
                                <label className="mr-2 w-20 text-text3 text-sm" >Quantity</label>
                                <input disabled className="h-6 w-20 text-center border-2 border-primary font-semibold text-sm text-text3 rounded-md flex items-center " value={data.quantity}/>
                            </div>:
                            (props.type === 'prod') ?
                            <div className="mb-2 flex flex-row">
                                <label className="mr-2 w-20 text-text3 text-sm" >Quantity</label>
                                <input disabled className="h-6 w-20 text-center border-2 border-primary font-semibold text-sm text-text3 rounded-md flex items-center " value={data.quantity}/>
                            </div>:null

                        }
                        <div className="flex flex-row justify-end">
                        {
                            (props.type === 'product') ?
                            <>
                                <button className="ml-4 px-4 border-2 border-primary rounded-md bg-primary text-text1" onClick={removeProd}  >Remove Item</button>
                            </>:
                            (props.type === 'raw') ?
                            <>
                                <button className="ml-4 px-4 border-2 border-primary rounded-md bg-primary text-text1" onClick={removeRaw}  >Remove Item</button>
                            </>:
                            (props.type === 'prod') ?
                            <>
                                <button className="ml-4 px-4 border-2 border-primary rounded-md bg-primary text-text1" onClick={removeProduction}  >Mark Finished</button>
                            </>:null
                            
                        }
                        </div>
                    </div>
                </div>
            </>
        }

        </>
    
    )
}

export default CardItems;