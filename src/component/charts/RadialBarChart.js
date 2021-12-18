import React from "react";
import { useState } from "react/cjs/react.development";
import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";


const RBChart = (props) =>{

    
  return(
    <>
          <RadialBarChart
            width={200}
            height={200}
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
            {`${(props.data[0].value)}%`}
            </text>
          </RadialBarChart>
        </>  
    )
}

export default RBChart
  
  