import { useEffect,useState } from "react";
function useCurrencyInfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        //fetching from API
        .then(res=>res.json())
        //converting response from string to JSON
        .then((res)=>{
            setdata(res[currency])
        })
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}
export default useCurrencyInfo;