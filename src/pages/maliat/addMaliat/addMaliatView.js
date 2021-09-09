import Button from "../../../utils/button";
import DataGrid from "../../../utils/dataGrid";
import FormikControl from '../../../components/formikControl'
import { Formik, Form } from 'formik'
import { AddIcon } from "../../../utils/iconButton"
import { useState } from "react";

const gridStyle = { 
    minHeight: 250 ,
}

const AddMaliatView = ({ closeModal, validationSchema, initialValues, onSubmit }) => {
    const [taxDetails, setTaxDetails] = useState([
        {
            fromIncome: 0,
            toIncome: 0,
            taxPercent: 0,
            id: 0
        },
        {
            fromIncome: 0,
            toIncome: 0,
            taxPercent: 0,
            index:0
        }
    ])

    const addIconClicked = (data) => {
        setTaxDetails([
            ...taxDetails.slice(0, taxDetails.length-1),
            {
                fromIncome: 0,
                toIncome: 0,
                taxPercent: 0,
                id: taxDetails.length-1
            },
            ...taxDetails.slice(taxDetails.length-1, taxDetails.length),
        ])
    }

    const columns = [
        { name: 'fromIncome', render:({data}) => data.index === 0 ? <div><AddIcon onclick={() => addIconClicked(data)}/></div> : <FormikControl min='0' className="bg-white w-100 ms-2" control='input' type='number' name={`taxDetails[${data.id}].fromIncome`}/>,header: ' از مبلغ ', defaultFlex:1},
		{ name: 'toIncome', render:({data}) => data.index === 0 ? null : <FormikControl min='0' className="bg-white w-100 ms-2" control='input' type='number' name={`taxDetails[${data.id}].toIncome`}/>, header: ' تا مبلغ ', defaultFlex:1},
		{ name: 'taxPercent', render:({data}) =>  data.index === 0 ? null : <FormikControl min='0' max="100" className="bg-white w-100 ms-2" control='input' type='number' name={`taxDetails[${data.id}].taxPercent`}/>, header: ' درصد ', defaultFlex:1}
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
 
export default AddMaliatView;