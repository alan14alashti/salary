import { useQuery, useMutation } from "react-query"
import React, { useState, useCallback } from 'react'
import Button from "../../../utils/button"
import DataGrid from "../../../utils/dataGrid"

const gridStyle = { 
    minHeight: 250 ,
}

const EducationInfo = ({BlurHandler}) => {
    const columns =  [
        { name: 'title', header: ' عنوان ', defaultFlex:1},
		{ name: 'date', header: ' تاریخ ', defaultFlex:1},
		{header: ' حذف ', defaultFlex:1 ,render:({data}) => <Button text=" حذف " sty="danger"/>},
        {header: ' ویرایش ', defaultFlex:1 ,render:({data}) => <Button text=" ویرایش " sty="secondary"/>},
    ]
    const phoneNumbers = [
        {title: "تحصیلی", date: "1391/11/01"},
        {title: "دوره شبکه", date: "1400/02/03"}
    ]
    return (
        <div className="w-100 d-flex flex-column align-items-start">
            <div className="w-100">
                <div className="mb-3">
                    <Button text="اضافه کردن اطلاعات تحصیلی" sty="primary"/>
                </div>
                <DataGrid data={phoneNumbers} columns={columns} gridStyle={gridStyle}/>
            </div>
        </div>
    );
}
export default EducationInfo;