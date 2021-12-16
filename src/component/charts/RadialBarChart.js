import React from "react";
import { useState } from "react/cjs/react.development";
import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";


const RBChart = (props) =>{

  // const valuePer = props.data[0].value/100
  // console.log(props.value);
  // const [value,setValue] = useState();
  // {setValue(Math.abs(props.value))}
  //       {console.log(value)}

    
  return(
    <>
          <RadialBarChart
            width={400}
            height={400}
            cx={125}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            barSize={10}
            data={props.data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              clockWise
              dataKey="value"
              cornerRadius={200}
              fill={props.fill}
            />
            <text x={125} y={100} dy={8} textAnchor="middle" fill={props.fill} className="text-2xl">
            {`${(props.value).toFixed(0)}%`}
            </text>
          </RadialBarChart>
        </>  
    )
}

export default RBChart
  
  