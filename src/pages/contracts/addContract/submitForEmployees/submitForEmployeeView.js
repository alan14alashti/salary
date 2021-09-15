import React from 'react'
import { Formik, Form } from 'formik'
import FormikControl from '../../../../components/formikControl'
import Button from '../../../../utils/button'
import DualListBox from 'react-dual-listbox'
import 'react-dual-listbox/lib/react-dual-listbox.css';

const gridStyle = { 
    minHeight: 250 ,
}

const SubmitForEmployeeView = ({optionsHandler, selected, onChange, result, initialValues, onSubmit, validationSchema,  orgChartOptions, orgUnitOptions, closeModal }) => {
    
    // console.log(selected)
    let opt = []
    opt = opt.concat(result)
    // // result.map(item => {
    // //     options.push({value: item.id, label: item.family})
    // // })
    // console.log(options)

    return (
        <div>
            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                { formik => (
                    <Form className='row row-cols-md-2 row-cols-1 g-2'>
                        {/* <div className="col">
                            <FormikControl
                                type="number"
                                control='input'
                                label=' کد پرسنلی '
                                name='personalCode' 
                            />
                        </div> */}
                        {/* <div className="col">
                            <FormikControl
                                type="text"
                                control='input'
                                label=' نام خانوادگی '
                                name='familyName'
                            />
                        </div> */}
                        {/* <div className="col">
                            <FormikControl
                                options={orgChartOptions}
                                control='select'
                                label=' چارت سازمانی '
                                name='orgChart'
                            />
                        </div>
                        <div className="col">
                            <FormikControl
                                options={orgUnitOptions}
                                control='select'
                                label=' محل خدمت '
                                name='orgUnit'
                            />
                        </div> */}
                    </Form>
                )}
            </Formik>
            <div>
                <DualListBox
                    // simpleValue={false}
                    icons={{
                        moveLeft: <i className="fa fa-chevron-right" />,
                        moveAllLeft: [
                            <i key={0} className="fa fa-chevron-right" />,
                            <i key={1} className="fa fa-chevron-right" />,
                        ],
                        moveRight: <i className="fa fa-chevron-left" />,
                        moveAllRight: [
                            <i key={0} className="fa fa-chevron-left" />,
                            <i key={1} className="fa fa-chevron-left" />,
                        ],
                        moveDown: <i className="fa fa-chevron-down" />,
                        moveUp: <i className="fa fa-chevron-up" />,
                    }}
                    options={opt}
                    selected={selected}
                    onChange={onChange}
                    // alignActions="top"
                    canFilter={true}
                    filterPlaceholder="کد پرسنلی/نام خانوادگی"
                />
                {/* <div>
                    {selected.map(item => (<div>{item}</div>))}
                </div> */}
            </div>
            <div className="col-12 d-flex justify-content-between mt-3">
				<Button onclick={closeModal} type='submit' sty="secondary" text=" ثبت "/>
				<Button onclick={closeModal} sty="danger" text=" انصراف "/>
			</div>
        </div>
    );
}
 
export default SubmitForEmployeeView;