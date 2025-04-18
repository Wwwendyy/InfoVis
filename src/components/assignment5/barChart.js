import React from "react";
import { max, scaleBand, scaleLinear } from "d3";
import { XAxis, YAxis } from "./axes";
import styles from "../../styles/assignment5_styles.module.css";

export function BarChart (props) {
    const {offsetX, offsetY, data, height, width, selectedAirline, setSelectedAirline} = props;
    // Task 1: TODO
    // 1. find the maximum of the Count attribute in the data
    // 2. define the xScale and yScale
    // 3. return the bars; (Remember to use data.map());
    // 4. return <XAxis/> and <YAxis/>

    const xScale = scaleLinear()
        .domain([0, max(data, d=> d.Count)])// Add padding to the right of the x-scale
        .range([0, width]);

    const yScale = scaleBand()
        .domain(data.map(d => d.AirlineName)) // Airline names as labels
        .range([0, height])
        .padding(0.2);
    // Task 3. TODO
    // 1. define an arrow function color; it takes a data item, d, as input. 
    // If d.AirlineID is equal to the selectedAirlineID, it returns "#992a5b"; 
    // otherwiese, it returns "#2a5599".
    // 2. define a function onMouseOver; it takes a data item, d, as input,
    // and sets the selectedAirlineID be the d.AirlineID
    // 3. define a function onMouseOut; it has no argument, and sets the selectedAirlineID be null.
    // 4. adding properties, onMouseOver and onMouseOut, to the <rect> tags.
    // Note: the function of the onMouseOver properties should be an arrow function 
    // that wraps the onMouseOver you defined since it takes d as input.
    const color = d => d.AirlineID === selectedAirline ? "#992a5b" : "#2a5599";

    // Interaction handlers
    const onMouseOver = (d) => {setSelectedAirline(d.AirlineID)};
    const onMouseOut = () => {setSelectedAirline(null)};



    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        {/* Render Bars */}
        {data.map(d => (
                <rect
                    key={d.AirlineID}
                    x={0}
                    y={yScale(d.AirlineName)}
                    width={xScale(d.Count)}
                    height={yScale.bandwidth()}
                    fill={color(d)}
                    stroke="black"
                    onMouseOver={() => onMouseOver(d)}
                    onMouseOut={onMouseOut}
                    className={styles.bar}
                />
            ))}

            {/* Render Axes */}
            <YAxis yScale={yScale} height={height} offsetX={offsetX} axisLabel='Airlines'/> {/* Adjust offset for Y-axis labels */}
            <XAxis xScale={xScale} height={height} width={width}/>
    </g>
}