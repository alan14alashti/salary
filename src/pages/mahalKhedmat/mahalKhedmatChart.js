import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import './mahalKhedmatChart.css'
import MahalKhedmatNode from "./mahalKhedmatNode";
const MahalKhedmatChart = ({ ds }) => {
    return (
        <OrganizationChart 
            datasource={ds} 
            pan={true} 
            zoom={true} 
            chartClass="myChart"
            NodeTemplate={MahalKhedmatNode}
        />
    )
};
export default MahalKhedmatChart;