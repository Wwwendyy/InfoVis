import React from "react";
import styles from "../../styles/assignment5_styles.module.css";

export { XAxis, YAxis };
//TODO: complete the YAxis
// 1.Draw the y-axis, using <line>;
// 2.Draw the ticks, using yScale.domain() to get the ticks (i.e., names of airlines);
// For each tick line, we set x1={-5}, x2={0}, y1 and y2 are the half of yScale.bandwidth()
// For the tick text, we set style={{textAnchor: 'start', fontSize:'10px'}}, x={-offsetX+10},y={yScale.bandwidth()/2}
function YAxis (props) {
    const { yScale, height, offsetX } = props;
    return <g>
        <line y2={height} stroke="black" />

        {yScale.domain().map((tickValue) => (
            <g key={tickValue} transform={`translate(0, ${yScale(tickValue)})`}>
                <line x1={-5} x2={0} y1={yScale.bandwidth()/2} y2={yScale.bandwidth()/2} stroke="black" />
                <text
                    style={{ textAnchor: 'start', fontSize: '10px' }}
                    x={10}
                    y={yScale.bandwidth() / 2}
                    transform={`translate(${-offsetX}, 3)`}
                >
                    {tickValue}
                </text>
            </g>
        ))}
    </g>
}

function XAxis(props) {
    const { xScale, width, height} = props;
    const customTicks = [0, 500, 1000, 1500, 2000, 2500];

    return <g transform={`translate(0, ${height})`}>
        {<line x1={0} x2={width} y1={0} y2={0} stroke='black'/>}
        {xScale.ticks(5).map(tickValue =>
            <g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
                <line y2={10} stroke='black' />
                <text style={{ textAnchor:'end', fontSize:'10px' }} x={5} y={20}>
                    {tickValue}
                </text>
            </g>
        )}
    </g>
}