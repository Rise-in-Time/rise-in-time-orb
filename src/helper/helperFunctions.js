export const prettyDate = () => {
    let objToday = new Date(),
        weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayOfWeek = weekday[objToday.getDay()],
        domEnder = function() {
            var a = objToday;
            if (/1/.test(parseInt((a + '').charAt(0)))) return 'th';
            a = parseInt((a + '').charAt(1));
            return 1 === a ? 'st' : 2 === a ? 'nd' : 3 === a ? 'rd' : 'th';
        }(),
        dayOfMonth = today + (objToday.getDate() < 10)
            ? '0' + objToday.getDate() + domEnder
            : objToday.getDate() + domEnder,
        months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'],
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear();
    let today = dayOfWeek + ' ' +
        dayOfMonth + ' of ' + curMonth + ', ' + curYear;
    return today;
};

export function formatNumber(number) {
    let n = Math.floor(number / 1000);
    if (Math.abs(n) < 1000) return n;
    if (Math.abs(n) < 1000000) return `${(n / 1000).toFixed(1)}k`;
    if (Math.abs(n) < 1000000000) return `${(n / 1000000).toFixed(1)}m`;
    else return `${(n / 1000000000).toFixed(1)}b`;
}

export function truncateWorldNames(worldName) {
    return worldName[0] + worldName[worldName.length - 1];
}