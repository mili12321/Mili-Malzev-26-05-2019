export function getForecastDayName(day){
    const d = new Date(day)
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    const dayName = days[d.getDay()] 
    return dayName
}
export function getForecastDate(day){
    const d = new Date(day)
    const date = d.getDate()
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    
    const monthIndex = d.getMonth()
    const monthName = months[monthIndex]
    const formatted = `${date} ${monthName}`
    return formatted
}
export function getForecastDayNameShort(day){
    const d = new Date(day)
    const days = [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
    ]

    const dayName = days[d.getDay()] 
    return dayName
}
export function getCurrentDate(){

    const d = new Date()
    formatDate(d)
}

function formatDate(d) {
    const date = d.getDate()
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    
    const monthIndex = d.getMonth()
    const monthName = months[monthIndex]

    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]

    const dayName = days[d.getDay()] 
    const formatted = `${dayName}, ${date} ${monthName}`
    return formatted
}