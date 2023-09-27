import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import MyPieChart from "./MyPieChart"

const CostsPieChart = () => {
    const costsGrouped = useSelector((state) => state.businessData.data.costsGrouped)
    const [pieData, setPieData] = useState([])

    useEffect( () => {
        if (costsGrouped == null){
            return
        }

        let costsData = []
        for (const [key, value] of Object.entries(costsGrouped)) {
            costsData.push({
                name:key,
                y:value
            })
        }
        setPieData(costsData)
        
    }, [costsGrouped])

  return (
    <MyPieChart name="Náklady" data={pieData}/>
  )
}

export default CostsPieChart