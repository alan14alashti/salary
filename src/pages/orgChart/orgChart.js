import { useQuery } from "react-query"
import axios from "axios"
import { BaseUrl } from "../../utils/baseUrl"
import React, { useState, useCallback } from 'react'
import classes from './orgChart.module.css'
import DefaultChart from "./dechart"
const getfetcher = async () => {
	const token = localStorage.getItem("accessToken")
    const res =await 
		axios(`${BaseUrl}/api/OrganizationChart/ShowPositions`, {
		   method:'POST',
		   headers: {
			   "Content-Type": "application/json"	,
			   "accept": "*/*",
			   'Authorization':`Bearer ${token}`
		   },                                   
		   data : ""
	    })
    return res
}
const OrgChart = () => {
    const { isLoading, error, data } = useQuery('OrgChart', getfetcher
	)
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
	return (
		<>
		<div className={classes.chart}>
			<DefaultChart ds={chartt[0]}/>
		</div>
		</>
    );
}
export default OrgChart;