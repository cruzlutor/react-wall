import moment from 'moment'


export default {
  calculateDays(fromDate){
    const diff = moment(fromDate).diff(moment(new Date()), 'days') 
    return (diff == 0) ? 'Hoy' : (diff == 1) ? 'Hace '+diff+' dia' : 'Hace '+diff+' dias'
  }
}