import Button from "../../../utils/button";
import DataGrid from "../../../utils/dataGrid";
import FormikControl from '../../../components/formikControl'
import { Formik, Form } from 'formik'
import { AddIcon } from "../../../utils/iconButton"
import React, { useState } from "react"

const gridStyle = { 
    minHeight: 250 ,
}

const EditMaliatView = ({ data, closeModal, validationSchema, initialValues, onSubmit }) => {
    const newData = []
    data.taxDetails.map((item, index) => {
        newData.push({
            ...item,
            index: index
        })
    })
    const [taxDetails, setTaxDetails] = useState(newData.concat(
        {
            fromIncome: 0,
            toIncome: 0,
            taxPercent: 0,
            index:-1
        }
    ))
    const addIconClicked = (data) => {
        
        setTaxDetails([
            ...taxDetails.slice(0, taxDetails.length-1),
            {
                fromIncome: 0,
                toIncome: 0,
                taxPercent: 0,
                index: taxDetails.length-1
            },
            ...taxDetails.slice(taxDetails.length-1, taxDetails.length),
        ])
    }
    const columns = [
        { name: 'fromIncome', render:({data}) => data.index === -1 ? <div className="d-flex align-items-center "><AddIcon onclick={() => addIconClicked(data)}/></div> : <FormikControl className="bg-white w-100 ms-2" control='input' type='number' name={`taxDetails[${data.index}].fromIncome`}/>,header: ' از مبلغ ', defaultFlex:1},
		{ name: 'toIncome', render:({data}) => data.index === -1 ? null : <FormikControl className="bg-white w-100 ms-2" control='input' type='number' name={`taxDetails[${data.index}].toIncome`}/>, header: ' تا مبلغ ', defaultFlex:1},
		{ name: 'taxPercent', render:({data}) =>  data.index === -1 ? null : <FormikControl className="bg-white w-100 ms-2" control='input' type='number' name={`taxDetails[${data.index}].taxPercent`}/>, header: ' درصد ', defaultFlex:1}
    ]
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
        { formik => (
            <Form>
                <div className="w-100 mx-auto">
                    <div className={`w-100 d-flex flex-column align-items-center`}>
                        <div className="col-8 d-flex">
                            <FormikControl
                                control='input'
                                type='text'
                                label=' نام جدول مالیاتی '
                                name='taxTitle'
                            />
                        </div>
                        <div className="my-3 w-100">    
                            <DataGrid rowHeight={75} data={taxDetails} columns={columns} gridStyle={gridStyle}/>
                        </div>
                        <div className="col-12 d-flex justify-content-between mt-3">
                            <Button disabled={formik.isSubmitting} type="submit" sty="secondary" text=" ثبت "/>
                            <Button onclick={closeModal} sty="danger" text=" انصراف "/>
                        </div>
                    </div>
                </div>
            </Form>
        )}
        </Formik>
    );
}
 
export default EditMaliatView;