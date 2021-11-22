export const humanReadableTime = (date) => {
    date = new Date(date);
    var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return {
        fulldate: monthNames[monthIndex] + ' ' + day + ', ' + year,
        day,
        month: monthNames[monthIndex],
        year
    }
}