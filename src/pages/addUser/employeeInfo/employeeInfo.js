import Date from "../../datePicker/datePicker" 
import { Input, Select } from "../../../utils/input" 
import { useOrgChart } from "../../../hooks" 
import moment from 'jalali-moment'

const EmployeeInfo = ({moreInfoHandler, commonInfoHandler, formState}) => {
    const date = moment.from('1400/06/14 05:23:32:300', 'fa', 'YYYY/MM/DD HH:mm:ss:sss')
    .format('YYYY-MM-DDTHH:mm:ss.sssZ'); // 2013-8-25 16:40:00
    console.log(date)

    const { isLoading, error, data } = useOrgChart()
    if (isLoading) return 'Loading...'
   	if (error) return 'An error has occurred: ' + error.message
    const orgChart = []
    data.data.map((item) => {
        orgChart.push({
            value: item.id,
            title: item.title
        })
    })
    return (
        <div className="container">
            <div className="px-5 row row-cols-md-2 row-cols-1 gx-5 gy-3">
                <div className="col">
                    <Date label=" تاریخ استخدام "/>
                </div>
                <div className="col">
                    <Date label=" تاریخ تسویه "/>
                </div>
                <div className="col">
                    <Date label=" تاریخ ساعت زنی "/>
                </div>
                <div className="col">
                    <Input
                        value={formState.attendanceCode}
                        required="flase"
                        label="کد ساعت زنی"
                        changeHandler={(e) => commonInfoHandler(e.target.name, e.target.value)}
                        id="attendanceCode"
                        name="attendanceCode"
                        type="number"
                    />
                </div>
                <div className="col">
                    <Select
                        value={formState.positionId}
                        options={orgChart}
                        defaultOpt="انتخاب کنید"
                        required="false"
                        label=" انتخاب سمت "
                        changeHandler={(e) => commonInfoHandler(e.target.name, e.target.value)}
                        id="positionId"
                        name="positionId"
                    />
                </div>
                <div className="col">
                    <Select
                        value={formState.locationId}
                        options={orgChart}
                        defaultOpt="انتخاب کنید"
                        required="false"
                        label=" محل خدمت "
                        changeHandler={(e) => commonInfoHandler(e.target.name, e.target.value)}
                        id="locationId"
                        name="locationId"
                    />
                </div>
            </div>
        </div>
    );
}

export default EmployeeInfo;