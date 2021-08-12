import { useState } from "react";
import { BaseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { useQueryClient, useMutation } from "react-query";
import Button from "../../utils/button";
import { Select, Input } from "../../utils/input";
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
const gridStyle = { 
    minHeight: 250 ,
}
// const PostForm = async (body) => {
// 	const token = localStorage.getItem("accessToken")
//     console.log(body.body)
	
//     const res = await axios(`${BaseUrl}/api/Loan/EditLoanType`, {
//         method:'POST',
//         headers: {
// 			"Content-Type": "application/json",
// 			"accept": "*/*",
// 			'Authorization':`Bearer ${token}`
// 		},                                   
// 		data : body.body
// 	})
//     return res
// }

const AddMaliat = ({ id, closeModal }) => {
    const queryClient = useQueryClient()
    const columns =  [
        { name: 'from', type:"number",header: ' از مبلغ ', defaultFlex:1},
		{ name: 'to', header: ' تا مبلغ ', defaultFlex:1},
		{ name: 'percent', header: ' درصد ', defaultFlex:1}
    ]
    const data = [
        {from:"", to: "", percent:""},
        {from:"", to: "", percent:""},
        {from:"", to: "", percent:""},
        {from:"", to: "", percent:""},
        {from:"", to: "", percent:""},
        {from:"", to: "", percent:""},
        {from:"", to: "", percent:""}
    ]
    // const [formState, setFormState] = useState({
	// 	id: id,
    //     detailName: "",
    // 	detailValue: "",
    //     description: ""
    // })
    const BlurHandler = (event) => {
        let value = event.target.value
        const name = event.target.name
        // setFormState({
        //     ...formState,
        //     [name]: value
        // })
    }
    // const mutation = useMutation(PostForm, {
    //     onSuccess: (res) => {
    //         Swal.fire({
    // 			title: 'Success',
    //             text: res.data.message,
    //     		icon: 'success',
    // 			confirmButtonColor: '#0050F0',
    //             timer: 3000
    //         })
    //         // console.log(res)
    //         // const charts = queryClient.getQueryData("OrgChart")
    //         // console.log(charts)
    //         // QueryClient.refetchQueries("OrgChart")
    //         // queryClient.refetchQueries(["OrgChart"])
    //         queryClient.refetchQueries({ stale: true })
    //     },
    //     onError: (res) => {
    //         console.log(res.response)
    //         Swal.fire({
    //             title: 'Error!',
    //             text:  res.response.data.errors.Id[0],
    //             icon: 'error',
    //             confirmButtonColor: '#0050f0',
    //             confirmButtonText: 'امتحان دوباره',
    //             timer: 3000
    //         })
    //     }
    // }
    // )
	const clickHandler = (event) => {
		event.preventDefault();
		// const body = JSON.stringify(formState)
        // mutation.mutate({body: body})
  	}
    return (
		<div className="w-100 mx-auto">
			<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
				<h3> تغییر جدول مالیاتی </h3>
                <div className="col-8">
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
                    <ReactDataGrid
                        editable={true}
                        theme="default-light"
                        idProperty="id"
                        rtl={true}
                        style={gridStyle}
                        columns={columns}
                        dataSource={data}
                    />
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