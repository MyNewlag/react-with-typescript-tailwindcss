import jMoment from 'jalali-moment'
jMoment.locale("fa-IR")

type formatType = 'dddd، jD jMMMM jYYYY HH:mm' | 'jD jMMMM jYYYY HH:mm' | 'jMM/jDD HH:mm' | 'jYYYY/jMM/jD HH:mm'

export const convertMiladiToJalali=(date?:string | undefined , format:formatType='jD jMMMM jYYYY HH:mm')=>{
    
    const newDate=jMoment(date)
    return newDate.format(format)
}