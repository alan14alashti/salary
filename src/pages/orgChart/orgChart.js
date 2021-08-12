import { useQuery } from "react-query"
import React, { useState, useCallback } from 'react'
import classes from './orgChart.module.css'
import DefaultChart from "./dechart"
import useRequest from "../../components/fetchReq"

const OrgChart = () => {
    const { isLoading, error, data } = useQuery('OrgChart',useRequest(
		{
			url:"api/OrganizationChart/ShowPositions",
			method:"POST",
			body:""
		}
	))
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const response = data.data
	const chart = []
	function getUnflatten(arr, parentid) {
		let output = []
		for(const obj of arr) {
		  if(obj.parent == parentid) {
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
	console.log(chartt[0])
	return (
		<>
		<div className={classes.chart}>
			<DefaultChart ds={chartt[0]}/>
		</div>
		</>
    );
}
export default OrgChart;