import React from 'react'
import classes from './mahalKhedmat.module.css'
import MahalKhedmatChart from "./mahalKhedmatChart"
import { useLocationChart } from "../../hooks"

const MahalKhedmat = () => {
    const { isLoading, error, data } = useLocationChart()
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const response = data.data
	const chart = []
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
	return (
		<>
        
		<div className={classes.chart}>
			<MahalKhedmatChart ds={chartt[0]}/>
		</div>
		</>
    );
}
export default MahalKhedmat;