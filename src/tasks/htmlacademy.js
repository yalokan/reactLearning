var week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
function getDayOfWeek (firstDay, target){
    while (week[0] != firstDay){
        week.unshift(week.pop());
    }
    return target % 7 == 0 ? week[0] : week[target % 7 - 1];
}

console.log( getDayOfWeek("вторник", 21));
