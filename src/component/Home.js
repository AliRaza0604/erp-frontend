import React, {useState, useEffect} from "react";
import RBChart from "./charts/RadialBarChart";
import TBChart from "./charts/TinyBarChart";
import axios from "axios";
import Chart from "./sales/Chart";
import { subDays} from "date-fns";



let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        get: {
            'Content-Type': 'application/json'
        }
    }
})


const data = [
    { name: 'Gross profit Margin', value: 235.26 }
  ];

  const data2 = [
    { name: 'L1', value: 72 }
  ];

  const data3 = [
      { name:'L3', value: 55}
  ];

const Home = () => {
    const [gpmargin,setGpmargin] = useState(undefined);
    const [totalincome,setTotalincome] = useState();
    const [npmargin, setNpmargin] = useState(undefined)
    const [value,setValue] = useState();
    const [chart,setChart] = useState();
 
    useEffect (async () => {
        try {
            let res = await instance.get('/api/finance/gross_profit_margin/',
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );
            // console.log(res.data);
            setGpmargin((gpmargin) => res.data);
            // console.log(gpmargin)

            // setValue(Math.abs(gpmargin.value))
            // console.log(value)

            res = await instance.get('/api/finance/total_income/',
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );

            // console.log(res);
            setTotalincome((totalIncome) => res.data["Total Income"])
            // console.log(totalincome)

            res = await instance.get('/api/finance/net_profit_margin/',
                {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token')}`
                    // }
                }
            );

            // console.log(res.data);
            setNpmargin((npmargin) => res.data);
            // console.log(npmargin)
            setValue(Math.abs(npmargin.value))
            console.log(value)

            // res = await instance.get('/api/finance/sales_data/',
            //     {
            //         // headers: {
            //         //     "Authorization": `Bearer ${localStorage.getItem('token')}`
            //         // }
            //     }
            // );
            // console.log(res);
            // setChart(res.data);
            // console.log((setvalue) => value);

            
        }
        catch (e) {
            console.log(e);
        }
    }, [])

    // const datachart = [];
    // for(let num = 30; num >= 0; num--){
    //     data.push({
    //     date: subDays(value.date[num], num).toISOString().substr(0, 10),
    //     value: 1 + Math.random(),
    //     value2: 1.25 + Math.random()
    //     })
    // }       
    return(
        <>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="h-80 w-72 mt-12 ml-6 p-4 bg-white rounded-md">
                        <h1 className="mb-4 text-xl text-text3 font-bold font-boldtext-left">Gross Profit Margin</h1>
                        <p className="mb-4 text-gray-400 text-left">The profit you make on each dollar of sales... </p>
                        { gpmargin !== undefined ? <RBChart data={gpmargin} value={gpmargin.value} fill="green"/> : <></> }
                    </div>
                    <div className="h-80 w-72 mt-12 ml-6 p-4 bg-white rounded-md">
                        <h1 className="mb-4 text-xl text-text3 font-bold text-left">Net Profit Margin</h1>
                        <p className="mb-4 text-gray-400 text-left">Measures your business at generating prof... </p>
                        {
                            (npmargin !== undefined ) ?
                            <>
                            {
                                (npmargin.value > 0) ?
                                <>
                                    <RBChart data={npmargin} value={npmargin.value} fill="blue"/>
                                </> :
                                <>
                                    <RBChart data={npmargin} value={(Math.abs(npmargin.value))/1000} fill="red"/>
                                </>
                            }
                            </>:null
                        }
                       
                    </div>
                    <div className="h-80 w-100 mt-12 ml-6 bg-white rounded-md">
                        {/* <RBChart data={data3} fill="red"/> */}
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="h-96 w-100 mt-12 ml-6 mb-12 bg-white rounded-md">
                        {/* <Chart data={value}/> */}
                    </div>
                    <div>
                        <div className="h-44 w-72 mt-12 ml-6 p-4 bg-white rounded-md">
                            <h1 className="mb-4 text-xl text-text3 font-bold text-left">TOTAL INCOME</h1>
                            <TBChart fill="purple"/>
                            <h1 className="mt-2 mb-2 text-xl font-bold text-text3 text-left">{totalincome}</h1>
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
                            <TBChart fill="blue" />
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

            
            {/* <Chart data={datachart}/> */}
        </>
    );

}

export default Home;