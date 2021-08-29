import { useState } from "react"
import Swal from "sweetalert2"
import { useQueryClient } from "react-query"
import Button from "../../utils/button"
import { Select, Input } from "../../utils/input"
import { useEditOrgChart } from "../../hooks"

const EditPosition = ({ nodeData, closeModal }) => {
    const queryClient = useQueryClient()
    const orgchart = queryClient.getQueryData("OrgChart")
    // console.log(orgchart)
    const positions = []
    orgchart.data.map((item) => positions.push({
        value:  item.id,
        title: item.title
    }))
    // console.log(positions)
    const [formState, setFormState] = useState({
		id: nodeData.id ,
        title: nodeData.title, 
        parentId: nodeData.parentId,
        isChildMove: false
    })
    const BlurHandler = (event) => {
        let value = event.target.value
        const name = event.target.name
        switch (name) {
            case 'parentId':
                setFormState({
                    ...formState,
                    [name]: Number(value)
                })
                break;
            case 'isChildMove':
                setFormState({
                    ...formState,
                    [name]: value == 1 ? true : false
                })
                break;
            default:
                setFormState({
                    ...formState,
                    [name]: value
                })
                break;
        }
        
    }
    const mutation = useEditOrgChart(formState)
    
	const clickHandler = (event) => {
		event.preventDefault();
        console.log(formState)
        mutation.mutate(formState, {
            onSuccess: (res) => {
                Swal.fire({
                    title: 'Success',
                    text: res.data.message,
                    icon: 'success',
                    confirmButtonColor: '#5C8CBE',
                    timer: 3000
                })
                // console.log(res)
                // const charts = queryClient.getQueryData("OrgChart")
                // console.log(charts)
                // QueryClient.refetchQueries("OrgChart")
                // queryClient.refetchQueries(["OrgChart"])
                queryClient.refetchQueries({ stale: true })
                closeModal()
            },
            onError: (error) => {
                Swal.fire({
                    title: 'Error!',
                    text:  error.response.data.message,
                    icon: 'error',
                    confirmButtonColor: '#5C8CBE',
                    confirmButtonText: 'امتحان دوباره',
                    timer: 3000
                }
            )}
        })
  	}
    
    return (
		<div className="w-100 mx-auto">
				<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
					<h3> تغییر سمت </h3>
                    <Input
                        value={formState.title}
						required="true"
						label="عنوان شغلی"
						changeHandler={BlurHandler}
						id="title"
						name="title"
						type="text"
					/>
					<Select 
                        disabled={nodeData.parentId == null ? true : false }
                        value={formState.parentId}
					 	options={positions}
						defaultOpt=" انتخاب کنید "
						required="false"
						label=" انتخاب سرپرست "
						changeHandler={BlurHandler}
						id="parentId"
						name="parentId"
					/>
                    <Select
                        disabled={nodeData.parentId == null ? true : false}
					 	options={[{value: 1, title:"تغییر با فرزندان"}, {value: 0, title:" نغییر بدون فرزندان "}]}
						defaultOpt="انتخاب کنید"
						required="false"
						label=" انتخاب نوع تغییر "
						changeHandler={BlurHandler}
						id="isChildMove"
						name="isChildMove"
					/>
					<div className="col-12 d-flex justify-content-between align-items-start my-3">
                        <Button type="submit" sty="secondary" text=" ثبت "/>
                        <Button onclick={closeModal} sty="danger" text=" انصراف "/>
                    </div>
				</form>
		</div>
    );
}
export default EditPosition;