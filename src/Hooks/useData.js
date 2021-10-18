import { useEffect, useState } from 'react';

const useData = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch('/data.json')
        .then(r=>r.json())
        .then(d=>setData(d))
    },[])
    return data
};

export default useData;