import React, {useState, useEffect} from "react";
import RBChart from "./charts/RadialBarChart";
import TBChart from "./charts/TinyBarChart";
import axios from "axios";
import Chart from "./charts/Chart";



    
let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        }
    }
})



const Home = () => {
    

    const [gpmargin,setGpmargin] = useState(undefined);
    const [totalincome,setTotalincome] = useState();
    const [npmargin, setNpmargin] = useState(undefined)
    const [accountsreceivable, setaccountsreceivable] = useState();
    const [accountspayable, setaccountspayable] = useState();
    const [totalexpense,settotalexpense] = useState();
    const [chart,setChart] = useState();
    const gp =[];
 
    useEffect (async () => {
        try {
            let res = await instance.get('/api/finance/gross_profit_margin/',
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setGpmargin( res.data);



            res = await instance.get('/api/finance/net_profit_margin/',
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );

            setNpmargin( res.data);

            res = await instance.get('/api/finance/total_income/',
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );

            setTotalincome((totalIncome) => res.data["TI"])

            res = await instance.get('/api/finance/total_expenses/',
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );


            settotalexpense((totalexpense) => res.data["TE"])
            

            res = await instance.get('/api/finance/receivable/',
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
                        
            setaccountsreceivable((receivable) => res.data["AR"])

            

            res = await instance.get('/api/finance/sales_data/',
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );

            setChart((chart) => res.data);


            
        }
        catch (e) {
            alert("Opps Something Went Wrong")
        }
    }, [])

           
    return(
        <>
            <div className="flex flex-col">
                <div className="flex flex-row mr-4">
                    <div className="h-88 w-72 mt-12 ml-6 p-4 bg-white rounded-md">
                        <h1 className="mb-4 text-xl text-text3 font-bold font-boldtext-left">Gross Profit Margin</h1>
                        <p className="mb-4 text-gray-400 text-left">The profit you make on each dollar of sales... </p>
                        { gpmargin !== undefined ? 
                            <>
                                {
                                    (gpmargin.value > 0) ?
                                    <>
                                        <RBChart data={gpmargin} value={gpmargin.value} fill="green"/> 
                                    </>:
                                    <>
                                        <RBChart data={gpmargin} value={gpmargin.value} fill="red"/>
                                    </>
                                }
                            </>:null
                        }

                        
                    </div>
                    <div className="h-88 w-72 mt-12 ml-6 p-4 bg-white rounded-md">
                        <h1 className="mb-4 text-xl text-text3 font-bold text-left">Net Profit Margin</h1>
                        <p className="mb-4 text-gray-400 text-left">Measures your business at generating prof... </p>
                        {
                            (npmargin !== undefined ) ?
                            <>
                            {
                                (npmargin.value > 0) ?
                                <>
                                    <RBChart data={npmargin} fill="blue"/>
                                </> :
                                <>
                                    <RBChart data={npmargin} fill="red"/>
                                </>
                            }
                            </>:null
                        }

                       
                    </div>
                    <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className="h-44 w-72 mt-12 ml-6 p-4 bg-white rounded-md">
                            <h1 className="mb-4 text-xl text-text3 font-bold text-left">TOTAL INCOME</h1>
                            <TBChart fill="purple"/>
                            <h1 className="mt-2 mb-2 text-xl font-bold text-text3 text-left">Rs {totalincome}</h1>
                        </div>
                        <div className="h-44 w-72 mt-12 ml-7 p-4 bg-white rounded-md">
                            <h1 className="mb-4 text-xl text-text3 font-bold text-left">TOTAL EXPENSES</h1>
                            <TBChart fill="blue" />
                            <h1 className="mt-2 mb-2 text-xl text-text3 font-bold text-left">Rs {totalexpense}</h1>
                        </div>
                        
                    </div>
                    <div className="flex flex-row">
                        <div className="h-44 w-110 mt-8 ml-6 p-4 bg-white rounded-md">
                            <h1 className="mb-4 text-xl text-text3 font-bold text-left">ACCOUNTS RECEIVABLE</h1>
                            <TBChart fill="green"/>
                            <h1 className="mt-2 mb-2 text-xl text-text3 font-bold text-left">Rs {accountsreceivable}</h1>
                        </div>
                        
                    </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="h-full w-144 mt-12 ml-6 mb-12 p-8 bg-white rounded-md">
                        <h1 className="mb-4 px-8 text-xl text-text3 font-bold text-left">Sales Chart</h1>
                        <div>
                            <Chart data={chart}/>
                        </div>
                    </div>
                    
                </div>
            </div>

            
            
        </>
    );

}

export default Home;