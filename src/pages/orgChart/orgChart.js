import React from 'react'
import classes from './orgChart.module.css'
import DefaultChart from "./dechart"
import { useOrgChart } from "../../hooks"

const OrgChart = () => {
    const { isLoading, error, data } = useOrgChart()
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const response = data.data
	function getUnflatten(arr, parentid) {
		let output = []
		for(const obj of arr) {
		  	if(obj.parentId == parentid) {
				var children = getUnflatten(arr, obj.id)
				if(children.length) {
			  		obj.children = children
				}
				output.push(obj)
		  	}
		}
		return output
	}
	const chartt = getUnflatten(response,null)
	console.log(chartt)
	console.log(chartt[0])
	return (
		<div className={classes.chart}>
			<DefaultChart ds={chartt[0]}/>
		</div>
    );
}
export default OrgChart;