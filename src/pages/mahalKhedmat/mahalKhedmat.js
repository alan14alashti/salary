import { useQuery } from "react-query"
import axios from "axios"
import { BaseUrl } from "../../utils/baseUrl"
import React, { useState, useCallback } from 'react'
import classes from './mahalKhedmat.module.css'
import MahalKhedmatChart from "./mahalKhedmatChart"
// const getfetcher = async () => {
// 	const token = localStorage.getItem("accessToken")
//     const res =await 
// 		axios(`${BaseUrl}/api/OrganizationChart/ShowPositions`, {
// 		   method:'POST',
// 		   headers: {
// 			   "Content-Type": "application/json"	,
// 			   "accept": "*/*",
// 			   'Authorization':`Bearer ${token}`
// 		   },                                   
// 		   data : ""
// 	    })
//     return res
// }
const MahalKhedmat = () => {
    // const { isLoading, error, data } = useQuery('OrgChart', getfetcher
	// )
   	// if (isLoading) return 'Loading...'
   	// if (error) return 'An error has occurred: ' + error.message
    // const response = data.data
	// const chart = []
	// function getUnflatten(arr, parentid) {
	// 	let output = []
	// 	for(const obj of arr) {
	// 	  if(obj.parent == parentid) {
	// 		var children = getUnflatten(arr, obj.id)
	  
	// 		if(children.length) {
	// 		  obj.children = children
	// 		}
	// 		output.push(obj)
	// 	  }
	// 	}
	// 	return output
	// }
	// const chartt = getUnflatten(response,null)
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
			<MahalKhedmatChart ds={ds[0]}/>
		</div>
		</>
    );
}
export default MahalKhedmat;