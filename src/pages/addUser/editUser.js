import { useQueryClient } from "react-query"
import AddEditForm from './addEditForm'
import { useEditEmployee, useEmployeeSearch } from '../../hooks'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import React, { useState } from "react"
import { toast } from "react-toastify"
import { changeFormat, useGetNowJalalyObj } from "../../hooks/dateHooks"

const EditUser = ({ closeModal, id }) => {
    console.log(id)
    const queryClient = useQueryClient()
    const { isLoading, error, data } = useEmployeeSearch(id)
    const [clickedTab, setClickedTab] = useState(0)
    const tabClickHandler = (index) => {
        setClickedTab(index)
    }
    // const changeFormat = (objDate) => {
    //     console.log(objDate)
    //     let strDate = objDate.year + '/' + objDate.month + '/' + objDate.day
    //     console.log(strDate)
    //     const date = moment.from(`${strDate} 00:00:00:000`, 'fa', 'YYYY/MM/DD HH:mm:ss:sss')
    //     .format('YYYY-MM-DDTHH:mm:ss.sssZ');
    //     return date 
    // }
    const now = useGetNowJalalyObj()
    const [ formState, setFormState ] = useState({
        isActive: true, //done
        personalCode: 0, //done
        name: "", // done
        family: "", //doen
        hireDate: "", //done
        leaveDate: "", //done
        attendanceStart: "", //done
        attendanceCode: 0, //done
        extraDetails: {
          nationalCode: "", //done
          birthDate: "", //done
          birthPlace: "", //done
          gender: 0, //done
          isMarried: 0, //done
          militaryService: 0, //done 
          fatherName: "", //done
          identityCardNo: "", //done
          identityCardIssued: 0, //done 
          nationality: 0, //done
          familySize: 0, //done
          callsList: [
              {
                  itemName: "",
                  itemValue: ""
              }
          ],
          educationList: [
                {
                itemName: "",
                itemValue: ""
                }
          ],
          physicalList: [
            {
              itemName: "",
              itemValue: ""
            }
          ],
          workshopCode: "",
          insuranceNo: "",
          jobNo: "",
          detailedCode: "",
          accountNo: "",
          cardNo: "",
          shabaNo: "",
          costCenterCode: "",
          accountBank: 0,
          cardBank: "",
          documentsList: [
            {
              itemName: "",
              itemValue: ""
            }
          ],
          entrancePermission: 0
        },
        userName: "", //done
        password: "", //done
        isLogin: true, //done
        lastLogin: "2021-09-06T07:38:00.469Z", //done
        roleId: 0, //done
        positionId: 0, //done
        locationId: 0 //done
    })
    const initialValues = {
        isActive: true,
        personalCode: null,
        name: "",
        family: "",
        hireDate: "",
        leaveDate: "",
        attendanceStart: "",
        attendanceCode: null,
        extraDetails: {
          nationalCode: "",
          birthDate: now,
          birthPlace: "",
          gender: 0,
          isMarried: 0,
          militaryService: 0,
          fatherName: "",
          identityCardNo: "",
          identityCardIssued: 0,
          nationality: 0,
          familySize: 0,
          callsList: [
            {
              itemName: "",
              itemValue: ""
            }
          ],
          educationList: [
            {
              itemName: "",
              itemValue: ""
            }
          ],
          physicalList: [
            {
              itemName: "",
              itemValue: ""
            }
          ],
          workshopCode: "",
          insuranceNo: "",
          jobNo: "",
          detailedCode: "",
          accountNo: "",
          cardNo: "",
          shabaNo: "",
          costCenterCode: "",
          accountBank: 0,
          cardBank: "",
          documentsList: [
            {
              itemName: "",
              itemValue: ""
            }
          ],
          entrancePermission: 0
        },
        userName: "",
        password: "",
        passwordConfirm:"",
        isLogin: true,
        roleId: 0,
        positionId: 0,
        locationId: 0
    }

    const validationSchema = Yup.object({
        personalCode: Yup.string().required('فیلد اجباری است').nullable(),
        name: Yup.string().required('فیلد اجباری است'),
        family: Yup.string().required('فیلد اجباری است'),
        extraDetails: Yup.object().shape({
            nationalCode: Yup.string().required('فیلد اجباری است')
        }),
        hireDate: Yup.object().required('فیلد اجباری است'),
        attendanceStart: Yup.object().required('فیلد اجباری است'),
        attendanceCode: Yup.number().required('فیلد اجباری است').positive("عدد مثبت قابل قبول است").nullable(),
        password: Yup.string().required('فیلد اجباری است').min(8," حداقل هشت کارکتر مورد نیازاست ").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,"رمز عبور باید شامل (@#$%^&*!) ,حروف بزرگ  , حروف کوچک و اعداد باشد (حداقل هشت کاراکتر)"),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password'), ''], ' تکرار رمز عبور مطابقت ندارد ').required(' فیلد اجباری است ')
    })
    
    const mutation = useEditEmployee(formState)
    // console.log(formState)
	const onSubmit = (values) => {
        
		setFormState({
            isActive: values.isActive,
            personalCode: values.personalCode,
            name: values.name,
            family: values.family,
            hireDate: changeFormat(values.hireDate),
            leaveDate: changeFormat(values.leaveDate),
            attendanceStart: changeFormat(values.attendanceStart),
            attendanceCode: values.attendanceCode,
            extraDetails: {
                nationalCode: values.extraDetails.nationalCode,
                birthDate: changeFormat(values.extraDetails.birthDate),
                birthPlace: values.extraDetails.birthPlace,
                gender: Number(values.extraDetails.gender),
                isMarried: Number(values.extraDetails.isMarried),
                militaryService: Number(values.extraDetails.militaryService),
                fatherName: values.extraDetails.fatherName,
                identityCardNo: values.extraDetails.identityCardNo,
                identityCardIssued: values.extraDetails.identityCardIssued,
                nationality: Number(values.extraDetails.nationality),
                familySize: values.extraDetails.familySize,
                callsList: [
                    {
                        itemName: values.extraDetails.callsList[0].itemName,
                        itemValue: values.extraDetails.callsList[0].itemValue
                    }
                ],
                educationList: [
                    {
                        itemName: values.extraDetails.educationList[0].itemName,
                        itemValue: values.extraDetails.educationList[0].itemValue
                    }
                ],
                physicalList: [
                    {
                        itemName: values.extraDetails.physicalList[0].itemName,
                        itemValue: values.extraDetails.physicalList[0].itemValue
                    }
                ],
                workshopCode: values.extraDetails.workshopCode,
                insuranceNo: values.extraDetails.insuranceNo,
                jobNo: values.extraDetails.jobNo,
                detailedCode: values.extraDetails.detailedCode,
                accountNo: values.extraDetails.accountNo,
                cardNo: values.extraDetails.cardNo,
                shabaNo: values.extraDetails.shabaNo,
                costCenterCode: values.extraDetails.costCenterCode,
                accountBank: Number(values.extraDetails.accountBank),
                cardBank: values.extraDetails.cardBank,
                documentsList: [
                    {
                        itemName: values.extraDetails.documentsList[0].itemName,
                        itemValue: values.extraDetails.documentsList[0].itemValue
                    }
                ],
                entrancePermission: values.extraDetails.entrancePermission
            },
            userName: values.userName,
            password: values.password, 
            isLogin: values.isLogin,
            lastLogin: "2021-09-06T07:38:00.469Z",
            roleId: Number(values.roleId),
            positionId: Number(values.positionId),
            locationId: Number(values.locationId)
        })
        
        mutation.mutate(formState, {
            onSuccess: (res) => {
                // console.log(res)
                toast.success(" کارمند با موفقیت ثبت شد ",)

                // console.log(res)
                // const charts = queryClient.getQueryData("OrgChart")
                // console.log(charts)
                // QueryClient.refetchQueries("OrgChart")
                // queryClient.refetchQueries(["OrgChart"])
                queryClient.refetchQueries({ stale: true })
                closeModal()
            },
            onError: (error) => {
                toast.error(error.response.data.message)
            }
        })
    }
    console.log(data.data)
    if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            { formik => (
                <Form >
                    <AddEditForm 
                        closeModal={closeModal}   
                        clickedTab={clickedTab} 
                        tabClickHandler={tabClickHandler} 
                    />
                </Form>
            )}
        </Formik> 
    )
    }
export default EditUser;