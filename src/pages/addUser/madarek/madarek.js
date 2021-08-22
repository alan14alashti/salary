import { useQuery, useMutation } from "react-query"
import React, { useState, useCallback } from 'react'
import Button from "../../../utils/button"
import DataGrid from "../../../utils/dataGrid"
const gridStyle = { 
    minHeight: 250 ,
}

const Madarek = () => {
    const columns =  [
        { name: 'title', header: ' عنوان ', defaultFlex:1},
		{header: ' حذف ', defaultFlex:1 ,render:({data}) => <Button text=" حذف " sty="danger"/>},
        {header: ' ویرایش ', defaultFlex:1 ,render:({data}) => <Button text=" ویرایش " sty="secondary"/>},
    ]
    const data = [
        {title: "اسکن شناسنامه"},
        {title: "اسکن کارت ملی"}

    ]
    // const { isLoading, error, data } = useQuery('listOfUsers', getUsers)
    // const mutation = useMutation(getfetcher, {
    //     onSuccess : (res) => {
    //         setSearched(res.data)    
    //     }
    // })
    // const addPhoneNum = (e) => {
    //     mutation.mutate()
    // }
    return (
        <div className="w-100 d-flex flex-column align-items-start">
            <div className="w-100">
                <div className="mb-3">
                    <Button text=" اضافه کردن مدرک " sty="primary"/>
                </div>
                <DataGrid data={data} columns={columns} gridStyle={gridStyle}/>
            </div>
        </div>
    );
}
 
export default Madarek;