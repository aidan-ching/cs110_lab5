import { useState, useEffect } from "react"


export default function Title({sort,time}){
    const [sortTitle, setSortTitle] = useState('');
    const [timeTitle, setTimeTitle] = useState('');
    
    useEffect(()=>{
        if (sort === 'viewed'){
            setSortTitle("Most Viewed")
        }
        else if (sort === 'shared'){
            setSortTitle("Most Shared")
        }
        else if (sort === 'emailed'){
            setSortTitle("Most Emailed")
        }

        if (time === '1'){
            setTimeTitle("Day")
        }
        else if (time === '7'){
            setTimeTitle("Week")
        }
        else if (time === '30'){
            setTimeTitle("Month")
        }
    },[sort,time])





    return(
        <div className="title">{`${sortTitle} - ${timeTitle}`}</div>
    )
}