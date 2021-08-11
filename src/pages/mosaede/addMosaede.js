import Button from '../../utils/button'
import Date from "../datePicker/datePicker"
import { Input } from '../../utils/input'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-community/theme/default-light.css'
const gridStyle = { 
    minHeight: 400 ,
}
const AddMosaede = ({closeModal}) => {
    const columns =  [
        { name: 'date', header: ' تاریخ سررسید ', defaultFlex:1},
		{ name: 'amount', header: ' مبلغ قسط ', defaultFlex:1},
        { name: 'payedAmount', header: ' مبلغ پرداخت شده ', defaultFlex:1},
		{header: ' حذف ', defaultFlex:1 ,render:({data}) => <Button text=" حذف " sty="danger"/>},
        {header: ' ویرایش ', defaultFlex:1 ,render:({data}) => <Button text=" ویرایش " sty="secondary"/>},
    ]
    const phoneNumbers = [
        {date: "1400/03/03", amount: "400,000", payedAmount:"300,000"},
        {date: "1400/03/03", amount: "400,000", payedAmount:"300,000"}
    ]
    const BlurHandler = (event) => {
        console.log(event.target.value)
    }
    return (
        <div className="container d-felx flex-column">
            <div className="row row-cols-1 row-cols-md-2 gx-5 gy-4">
                <div className="col d-flex flex-column align-items-start">
                    <div className="col-10 col-lg-9 align-self-center">
                        <Input
                            required="true"
                            label=" مبلغ "
                            BlurHandler={BlurHandler}
                            id="amount"
                            name="amount"
                            type="number"
                        />
                    </div>
                    <div className="col-10 col-lg-9 align-self-center">
                        <Input
                            required="true"
                            label=" تعداد اقساط "
                            BlurHandler={BlurHandler}
                            id="installmentCount"
                            name="installmentCount"
                            type="number"
                        />
                    </div>
                    <div className="my-3 align-self-center"> 
                        <Date label="سررسید اولین پرداخت"/>
                    </div>
                    <div className="align-self-center my-2">
                        <Button sty="primary" text=" ثبت استراحت برای قسط "/>
                    </div>
                    <div className="align-self-center my-2">
                        <Button sty="primary" text=" تسویه "/>
                    </div>
                </div>
                <div className="col">
                    <ReactDataGrid
                        theme="default-light"
                        idProperty="id"
                        rtl={true}
                        style={gridStyle}
                        columns={columns}
                        dataSource={phoneNumbers}
                    />
                </div>
            </div>
            <div className="mt-5 col-12 d-flex justify-content-between my-3">
                <Button onclick={() => console.log("ثبت")} sty="secondary" text=" ثبت "/>
                <Button onclick={closeModal} sty="danger" text=" انصراف "/>
            </div>
        </div>
    );
}
export default AddMosaede;