import React from "react";

function Routes(props){
    const {projection, routes, selectedAirline} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.
    if (selectedAirline==null) {
        return <g></g>;
    }
    const selectedRoutes = routes.filter(route => route.selectedAirline === selectedAirline);

    return <g>
        {/* Plot each route as a line */}
        {routes.map((route, index) => {
                const [x1, y1] = projection([route.SourceLongitude, route.SourceLatitude]);
                const [x2, y2] = projection([route.DestLongitude, route.DestLatitude]);

                return (
                    <line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#992a5b"
                        strokeWidth={0.05}
                    />
                );
            })}
    </g>
}

export { Routes }