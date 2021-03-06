import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Line, LineChart} from "recharts";
import React from "react";
import { format, parseISO} from "date-fns";


const Chart = (props) => {
    return(
        <div className="py-8">
        <ResponsiveContainer width="100%" height={200}>
            <LineChart 
                data={props.data}

                // margin={{
                //     top: 20,
                //     right: 10,
                //     left: 0,
                //     bottom: 5,
                // }}
            >
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ff0000" stopOpacity={0.4}></stop>
                        <stop offset="75%" stopColor="#ff0000" stopOpacity={0.05}></stop>
                    </linearGradient>
                </defs>

                <Line type="monotone" dataKey="value" stroke="#ff0000" />

                <XAxis dataKey="date" tickFormatter={str => {
                    const date = parseISO(str)
                    if(date.getDate())
                        return format(date, "MMM, d")
                }}/>

                <YAxis dataKey="value" tickCount={10} domain={[0,10000]}/>
                
                <Tooltip content={<CustomTooltip/>}/>

                <CartesianGrid vertical={false}/>

            </LineChart>
        </ResponsiveContainer>
        </div>

    );
}

function CustomTooltip({active, payload, label}){
    if(active){
        return(
            <div>
                <h4>{format(parseISO(label), "yyyy,MM,dd")}</h4>
                <p>{payload[0].value}</p>
            </div>
        );
    }
    return null;
}

export default Chart;
