import { useState } from "react";
import Swal from "sweetalert2";
import { useQueryClient, useMutation } from "react-query";
import Button from "../../utils/button";
import { Select, Input } from "../../utils/input";
import DataGrid from "../../utils/dataGrid";
import { AddIcon } from "../../utils/iconButton";
const gridStyle = { 
    minHeight: 250 ,
}


const AddMaliat = ({ id, closeModal }) => {

    const queryClient = useQueryClient()
    const addIconClicked = () => {
        console.log(data.length-2)
        setData([
            {from:"", to: "", percent:""},
            ...data
        ])
    }
    const columns =  [
        { name: 'from <input/>', render:({data}) => data.index === 0 ? <div><AddIcon onclick={addIconClicked}/></div> : <div className=""><input required="false" label="" id="from" name="from" type="number"/></div>, type:"number",header: ' از مبلغ ', defaultFlex:1},
		{ name: 'to', render:({data}) => data.index === 0 ? null : <div className=""><input required="false" label="" id="from" name="from" type="number"/></div>, header: ' تا مبلغ ', defaultFlex:1},
		{ name: 'percent', render:({data}) =>  data.index === 0 ? null : <div className=""><input required="false" label="" id="from" name="from" type="number"/></div>, header: ' درصد ', defaultFlex:1}
    ]
    const [data, setData] = useState([
        {from:"", to: "", percent:""},
        {from:"", to: "", percent:"", index:0}
    ])
    const BlurHandler = (event) => {
        let value = event.target.value
        const name = event.target.name
    }

	const clickHandler = (event) => {
		event.preventDefault();
		
  	}
    return (
		<div className="w-100 mx-auto">
			<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
				<h3> تغییر جدول مالیاتی </h3>
                <div className="col-8 d-flex">
                    <Input
                        required="true"
                        label=" نام جدول "
                        BlurHandler={BlurHandler}
                        id="detailName"
                        name="detailName"
                        type="text"
				    />
                </div>
                
                <div className="my-3 w-100">
                    <DataGrid showCellBorders="false" data={data} columns={columns} gridStyle={gridStyle}/>
                </div>
				<div className="col-12 d-flex justify-content-between mt-3">
                    <Button type="submit" sty="secondary" text=" ثبت "/>
                    <Button onclick={closeModal} sty="danger" text=" انصراف "/>
                </div>
			</form>
		</div>
    );
}
export default AddMaliat;