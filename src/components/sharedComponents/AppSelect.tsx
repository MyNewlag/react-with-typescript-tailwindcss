import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { type ComponentProps } from 'react';

type AppSelectType= Omit<ComponentProps<"select"> , "title" | "onChange"> & {
    title:string
    onChange:(val:string)=>void 
    options : {value : string ; title:string}[]
}


const AppSelect = ({title ,className,onChange , options, ...rest} : AppSelectType) => {
return (
        <div className="mb-5">
            <label  className="block mb-2 text-right text-sm font-medium text-gray-900 dark:text-white">{title}</label>
          
           <Select onValueChange={(val)=>onChange(val)}>
            <SelectTrigger dir="rtl" className={`shadow-none h-10 w-full flex justify-between ${className}`}>
                <SelectValue placeholder="انتخاب دسته بندی " {...rest}/>
            </SelectTrigger>
            <SelectContent className="bg-gray-300" >
                {options.map((option , i)=>(
                    <SelectItem  key={option.value + i} value={option.value}>
                        {option.title}
                    </SelectItem>
                ))}
            </SelectContent>
            </Select>
            
        </div>
    );
}
export default AppSelect;
