import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import './defChart.css'
import Modal from 'react-modal'
import FormModal from "../../utils/formModal";
import Register from "../registerPage/register";
import MyNode from "./myNode";
const DefaultChart = ({ ds }) => {
    return (
        <OrganizationChart 
            datasource={ds} 
            pan={true} 
            zoom={true} 
            chartClass="myChart"
            NodeTemplate={MyNode}
        />
    )
};
export default DefaultChart;