import { useQuery } from "react-query"
import axios from "axios"
import { BaseUrl } from "../../utils/baseUrl"
import React, { useState, useCallback } from 'react'
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
    console.log(chartt)
    console.log(chartt[1])
    const ds = [
        {
            children:[
                {
                    children:[
                        {
                            children:[],
                            id:5,
                            parent:2,
                            title:"واحد 5"
                        },
                        {
                            children:[],
                            id:6,
                            parent:2,
                            title:"واحد 6"
                        },
                        {
                            children:[],
                            id:7,
                            parent:2,
                            title:"واحد 46"
                        },
                    ],
                    id:2,
                    parent:1,
                    title:"دفتر تهران" 
                },
                {
                    children:[],
                    id:3,
                    parent:1,
                    title:"دفتر بوشهر"
                }
            ],
            id:1,
            parent:null,
            title:"مدیر کل"
        }
    ]
	return (
		<>
		<div className={classes.chart}>
			<MahalKhedmatChart ds={chartt[0]}/>
		</div>
		</>
    );
}
export default MahalKhedmat;