import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MyPieChart from './MyPieChart';

const SalesPieChart = () => {
    const salesGrouped = useSelector((state) => state.businessData.data.salesGrouped)
    const [pieData, setPieData] = useState([])

    useEffect( () => {
        if (salesGrouped == null){
            return
        }

        let salesData = []
        for (const [key, value] of Object.entries(salesGrouped)) {
            salesData.push({
                name:key,
                y:value
            })
        }
        setPieData(salesData)
        
    }, [salesGrouped])

  return (
    <MyPieChart name="Tržby" data={pieData}/>
  )
}

export default SalesPieChart