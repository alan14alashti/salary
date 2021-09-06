import moment from 'jalali-moment'

const useGetNowJalalyObj = () => {
    const today = new Date(),
    date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    const now = {
        year: Number(moment(date, 'YYYY/MM/DD').locale('fa').format('YYYY')),
        month: Number(moment(date, 'YYYY/MM/DD').locale('fa').format('MM')),
        day: Number(moment(date, 'YYYY/MM/DD').locale('fa').format('DD'))
    }
    return now
}

const changeFormat = (objDate) => {
    console.log(objDate)
    let strDate = objDate.year + '/' + objDate.month + '/' + objDate.day
    console.log(strDate)
    const date = moment.from(`${strDate} 00:00:00:000`, 'fa', 'YYYY/MM/DD HH:mm:ss:sss')
    .format('YYYY-MM-DDTHH:mm:ss.sssZ');
    return date 
}

export {

    useGetNowJalalyObj,
    changeFormat

}