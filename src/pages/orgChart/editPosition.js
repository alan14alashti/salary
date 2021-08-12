import { useState } from "react"
import Swal from "sweetalert2"
import { useQueryClient, useMutation } from "react-query"
import Button from "../../utils/button"
import { Select, Input } from "../../utils/input"
import useRequest from '../../components/fetchReq'

const EditPosition = ({ nodeData }) => {
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
        thePosition : {
            title: "", 
            parentId: 0
        }
    })
    const BlurHandler = (event) => {
        let value = event.target.value
        const name = event.target.name
        if(name === "parentId"){
            value=Number(value)
        }
        setFormState({
			...formState,
          	thePosition: {
                ...formState.thePosition,
                [name]: value
            }
        })
    }
    const mutation = useMutation(useRequest({
		url:"api/OrganizationChart/EditPosition",
		method:"POST",
		body: JSON.stringify(formState)
	}),
    {
        onSuccess: (res) => {
            Swal.fire({
    			title: 'Success',
                text: res.data.message,
        		icon: 'success',
    			confirmButtonColor: '#0050F0',
                timer: 3000
            })
            // console.log(res)
            // const charts = queryClient.getQueryData("OrgChart")
            // console.log(charts)
            // QueryClient.refetchQueries("OrgChart")
            // queryClient.refetchQueries(["OrgChart"])
            queryClient.refetchQueries({ stale: true })
        },
        onError: (error) => {
            Swal.fire({
                title: 'Error!',
                text:  error.response.data.message,
                icon: 'error',
                confirmButtonColor: '#0050f0',
                confirmButtonText: 'امتحان دوباره',
                timer: 3000
            }
        )}
    })
	const clickHandler = (event) => {
		event.preventDefault();
        mutation.mutate()
  	}
    return (
		<div className="w-100 mx-auto">
				<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
					<h3> تغییر سمت </h3>
                    <Input
						required="true"
						label="عنوان شغلی"
						BlurHandler={BlurHandler}
						id="title"
						name="title"
						type="text"
					/>
					<Select 
					 	options={positions}
						defaultOpt=" انتخاب کنید "
						required="false"
						label=" انتخاب سرپرست "
						changeHandler={BlurHandler}
						id="parentId"
						name="parentId"
					/>
					<div className="my-3">
						<Button text="اعمال تغییرات" type="submit" sty="primary"/>
					</div>
				</form>
		</div>
    );
}
export default EditPosition;