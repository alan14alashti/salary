import Date from "../../datePicker/datePicker" 
import FormikControl from "../../../components/formikControl"
import { useLocationChart, useOrgChart } from "../../../hooks" 

const EmployeeInfo = () => {

    const locationChart = useLocationChart()
    const { isLoading, error, data } = useOrgChart()
    if (locationChart.isLoading) return 'Loading...'
   	if (locationChart.error) return 'An error has occurred: ' + error.message
    if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const locChart = []
    locationChart.data.data.map((item) => {
        locChart.push({
            value: item.id,
            title: item.unitName
        })
    })
    const orgChart = []
    data.data.map((item) => {
        orgChart.push({
            value: item.id,
            title: item.title
        })
    })
    return (
        <div className="container-fluid">
            <div className="px-5 row row-cols-md-2 row-cols-1 gx-5 gy-3">

                <div className="col">
                    <FormikControl
                    control='date'
                    label=' تاریخ استخدام '
                    name='hireDate'
                    />
                </div>

                <div className="col">
                    <FormikControl
                    control='date'
                    label=' تاریخ تسویه '
                    name='leaveDate'
                    />
                </div>

                <div className="col">
                    <FormikControl
                    control='date'
                    label=' تاریخ ساعت زنی '
                    name='attendanceStart'
                    />
                </div>

                <div className="col">
                    <FormikControl
                    control='input'
                    type='number'
                    label=' کد ساعت زنی '
                    name='attendanceCode'
                    />
                </div>
                
                <div className="col">
                    <FormikControl
                        options={orgChart}
                        control='select'
                        label=" انتخاب سمت "
                        name="positionId"
                    />
                </div>
                <div className="col">
                    <FormikControl
                        options={locChart}
                        control='select'
                        label=" محل خدمت "
                        name="locationId"
                    />
                </div>
            </div>
        </div>
    );
}

export default EmployeeInfo;