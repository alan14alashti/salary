import { Input ,Select } from '../../../utils/input'
import { useQuery } from "react-query"
import axios from "axios"
import { BaseUrl } from "../../../utils/baseUrl"
const getfetcher = async () => {
	const token = localStorage.getItem("accessToken")
    const res =await 
		axios(`${BaseUrl}/api/Authenticate/listOfRoles`, {
		   method:'POST',
		   headers: {
			   "Content-Type": "application/json"	,
			   "accept": "*/*",
			   'Authorization':`Bearer ${token}`
		   },                                   
		   data : ""
	    })
    return res
}
const LoginInfo = ({BlurHandler}) => {
    const { isLoading, error, data } = useQuery('listOfRoles', getfetcher)
   	if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    console.log(data)
    const roles = []
    data.data.map((item) => {
        roles.push({
            value: item.id,
            title: item.roleName
        })
    })
    console.log(roles)
    return (
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-10  row row-cols-1 g-2">
            <div className="col">
                <Input
                required="false"
                label="نام کاربری"
                BlurHandler={BlurHandler}
                id="userName"
                name="userName"
                type="number"
                />
            </div>
            <div className="col">
            <Input
                required="false"
                label="کلمه رمز"
                BlurHandler={BlurHandler}
                id="passWord"
                name="passWord"
                type="password"
            />
            </div>
            <div className="col">
            <Input
                required="false"
                label="تکرار کلمه رمز"
                BlurHandler={BlurHandler}
                id="passWordB"
                name="passWordB"
                type="password"
            />
            </div>
            <div className="col">
            <Select
				options={roles}
				defaultOpt="انتخاب کنید"
				required="false"
				label=" نقش "
				changeHandler={BlurHandler}
				id="roles"
				name="roles"
			/>
            </div>
        </div>
    );
}
export default LoginInfo;