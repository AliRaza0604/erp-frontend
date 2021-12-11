import React, {useState, useEffect} from "react";
import RBChart from "./charts/RadialBarChart";
import TBChart from "./charts/TinyBarChart";
import axios from "axios";

let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        }
    }
})


const data = [
    { name: 'L1', value: 27 }
  ];

  const data2 = [
    { name: 'L1', value: 72 }
  ];

  const data3 = [
      { name:'L3', value: 55}
  ];

const Home = () => {
    const [gpmargin,setGpmargin] = useState();
    
    useEffect (async () => {
        try {
            let res = await instance.get('/api/finance/gross_profit_margin/',
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            console.log(res);
            setGpmargin(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }, [])
    return(
        <>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="h-80 w-72 mt-12 ml-6 p-4 bg-white rounded-md">
                        <h1 className="mb-4 text-xl text-text3 font-bold font-boldtext-left">Gross Profit Margin</h1>
                        <p className="mb-4 text-gray-400 text-left">The profit you make on each dollar of sales... </p>
                        <RBChart data={data} fill="green"/>
                    </div>
                    <div className="h-80 w-72 mt-12 ml-6 p-4 bg-white rounded-md">
                        <h1 className="mb-4 text-xl text-text3 font-bold text-left">Net Profit Margin</h1>
                        <p className="mb-4 text-gray-400 text-left">Measures your business at generating prof... </p>
                        <RBChart data={data2} fill="blue"/>
                    </div>
                    <div className="h-80 w-100 mt-12 ml-6 bg-white rounded-md">
                        {/* <RBChart data={data3} fill="red"/> */}
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="h-96 w-100 mt-12 ml-6 mb-12 bg-white rounded-md">
                        {/* <RBChart data={data3} fill="red"/> */}
                    </div>
                    <div>
                        <div className="h-44 w-72 mt-12 ml-6 p-4 bg-white rounded-md">
                            <h1 className="mb-4 text-xl text-text3 font-bold text-left">TOTAL INCOME</h1>
                            <TBChart fill="purple"/>
                            <h1 className="mt-2 mb-2 text-xl font-bold text-text3 text-left">$10000.50</h1>
                            <p className="mb-4 text-gray-400 text-xs text-left">5% more than previous month </p>
                        </div>
                        <div className="h-44 w-72 mt-8 ml-6 p-4 bg-white rounded-md">
                            <h1 className="mb-4 text-xl text-text3 font-bold text-left">ACCOUNTS RECEIVABLE</h1>
                            <TBChart fill="green"/>
                            <h1 className="mt-2 mb-2 text-xl text-text3 font-bold text-left">$8700.50</h1>
                            <p className="mb-4 text-gray-400 text-xs text-left">0.7% higher vs previous month </p>
                        </div>
                    </div>
                    <div>
                        <div className="h-44 w-72 mt-12 ml-6 p-4 bg-white rounded-md">
                            <h1 className="mb-4 text-xl text-text3 font-bold text-left">TOTAL EXPENSES</h1>
                            <TBChart fill="blue"/>
                            <h1 className="mt-2 mb-2 text-xl text-text3 font-bold text-left">$83000.50</h1>
                            <p className="mb-4 text-gray-400 text-xs text-left">0.7% higher vs previous month </p>
                        </div>
                        <div className="h-44 w-72 mt-8 ml-6 p-4 bg-white rounded-md">
                            <h1 className="mb-4 text-xl text-text3 font-bold text-left">ACCOUNTS PAYABLE</h1>
                            <TBChart fill="red"/>
                            <h1 className="mt-2 mb-2 text-xl text-text3 font-bold text-left">$7865.50</h1>
                            <p className="mb-4 text-gray-400 text-xs text-left">0.7% higher vs previous month </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );

}

export default Home;