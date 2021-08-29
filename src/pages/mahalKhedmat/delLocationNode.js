import { useState } from "react"
import Swal from "sweetalert2"
import { useQueryClient } from "react-query"
import Button from "../../utils/button"
import { Select } from "../../utils/input"
import { useDeleteLocationChart } from "../../hooks"

const DelLocationNode = ({ nodeData, closeModal }) => {
    const queryClient = useQueryClient()
    const [formState, setFormState] = useState({
		id: nodeData.id ,
        deleteChildren : false
    })
    const BlurHandler = (event) => {
        let value = event.target.value == 1 ? true : false
        const name = event.target.name
        setFormState({
			...formState,
          	[name]: value
        })
    }

    const mutation = useDeleteLocationChart(formState)

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
                    timer: 2000
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
                    timer: 2000
                }
            )}
        })
  	}
    return (
		<div className="w-100 mx-auto">
				<form onSubmit={(e) => clickHandler(e)}  className={`w-100 d-flex flex-column align-items-center`}>
					<Select
					 	options={[{value: 1, title:" حذف با فرزندان "}, {value: 0, title:" حذف محل خدمت بدون حذف فرزندان "}]}
						defaultOpt="انتخاب کنید"
						required="false"
						label=" انتخاب نوع حذف "
						changeHandler={BlurHandler}
						id="deleteChildren"
						name="deleteChildren"
					/>
					<div className="col-12 d-flex justify-content-between align-items-start my-3">
                        <Button type="submit" sty="secondary" text=" ثبت "/>
                        <Button onclick={closeModal} sty="danger" text=" انصراف "/>
                    </div>
				</form>
		</div>
    );
}
export default DelLocationNode;