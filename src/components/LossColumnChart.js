import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import MyColumnChart from "./MyColumnChart"

const LossColumnChart = () => {

    const businessData = useSelector((state) => state.businessData.data)
    const [data, setData] = useState([])
    const [documentsNumber, setDocumentsNumber] = useState(0)
    const [sum, setSum] = useState(0)

    useEffect( () => {
        if (businessData == null || businessData.balance == null){
          return
        } 
        const costs = []
        for (const record of businessData.balance){
          costs.push(record.salesAmount - record.costsAmount)
        }
        setData(costs)
        setDocumentsNumber(businessData.costsTotalDocs + businessData.salesTotalDocs)
        setSum(businessData.salesTotal - businessData.costsTotal)
    }, [businessData])

  return (
    <MyColumnChart title="Náklady" data={data} color="green" documentsNumber={documentsNumber} sum={sum}/>
  )
}

export default LossColumnChart