import {useState, useEffect} from "react";

export const useNowDate = () => {
    const [nowDate, setNowDate] = useState(new Date().toLocaleString())

    useEffect(() => {
        const interval = setInterval(() => {
            setNowDate(new Date().toLocaleString())
        }, 1000)
        return () => clearInterval(interval)
    },[])

    return nowDate;
}
