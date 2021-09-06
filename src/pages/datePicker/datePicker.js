import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import classes from './date.module.css'
import React, {useState} from 'react';
const Date = ({label}) => {
    const renderCustomInput = ({ ref }) => (
        <div className="col-12 d-flex align-items-start flex-column">
            {label?
                <label htmlFor={label} className={classes.form_input_label}>{label} <i class="m-2 fas fa-calendar-alt"></i></label>:
                null
            }
            <input
                name={label}
                readOnly
                ref={ref} // necessary
                placeholder="انتخاب کنید ... "
                value={selectedDay ? `${selectedDay.day}` : ''}
                className={classes.date_input}
            />
        </div>
    )
    const [selectedDay, setSelectedDay] = useState(null);
    return (
        <DatePicker
            calendarPopperPosition='top'
            renderInput={renderCustomInput}
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
            locale="fa"
        />
    );
    }
export default Date;