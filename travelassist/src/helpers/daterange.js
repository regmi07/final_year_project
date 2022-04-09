import dayjs from "dayjs";

const monthString = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const currentdate = dayjs()
const endDate = currentdate.format('YYYY-MM-DD')
const startDate = currentdate.subtract(1,'year').add(1,'month').format('YYYY-MM-DD')
export function dateRange() {
  let start      = startDate.split('-');
  let end        = endDate.split('-');
  let startYear  = parseInt(start[0]);
  let endYear    = parseInt(end[0]);
  let dates      = [];

  for(let i = startYear; i <= endYear; i++) {
    let endMonth = i !== endYear ? 11 : parseInt(end[1]) - 1;
    let startMon = i === startYear ? parseInt(start[1])-1 : 0;
    for(let j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
      let month = j;
      dates.unshift([monthString[month], i].join(' '));
    }
  }
  return dates;
}