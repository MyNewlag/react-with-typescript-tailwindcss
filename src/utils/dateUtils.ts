import jMoment from 'jalali-moment'
jMoment.locale("fa-IR")

type formatType = 'dddd ، jD jMMMM jYYYY' | 'jD jMMMM jYYYY' | 'jMM/jDD HH:mm' | 'jYYYY/jMM/jD HH:mm'

export const convertMiladiToJalali=(date?:string | undefined , format:formatType='jD jMMMM jYYYY')=>{
    
    const newDate=jMoment(date)
    return newDate.format(format)
}

export const getDatesInRange = (startOffcet:number , endOffcet:number) : string[]=>{
    const today = new Date();
    const dates : string[]=[]
    
    startOffcet = - startOffcet 

    for(let i=startOffcet ; i <= endOffcet ; i++){
        const curentDate = new Date(today)
        curentDate.setDate(today.getDate() + i)
         dates.push(curentDate.toISOString())
    }
    return dates
}

export const compareDate=(date1:string , date2:string)=>{
    const d1=new Date(date1)
    const d2=new Date(date2)

    return(
        d1.getUTCFullYear()===d2.getUTCFullYear()&&
        d1.getUTCMonth()===d2.getUTCMonth()&&
        d1.getUTCDate()===d2.getUTCDate()
    )
}