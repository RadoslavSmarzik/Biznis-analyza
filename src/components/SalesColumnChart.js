import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import MyColumnChart from "./MyColumnChart"

const SalesColumnChart = () => {
  
    const businessData = useSelector((state) => state.businessData.data)
    const [data, setData] = useState([])
    const [documentsNumber, setDocumentsNumber] = useState(0)
    const [sum, setSum] = useState(0)

    useEffect( () => {
        if (businessData == null || businessData.balance == null){
          return
        } 
        const sales = []

        for (const record of businessData.balance){
            sales.push(record.salesAmount)
        }
        setData(sales)
        setDocumentsNumber(businessData.salesTotalDocs)
        setSum(businessData.salesTotal)
    }, [businessData])

  return (
    <MyColumnChart title="Tržby" data={data} color="green" sum={sum} documentsNumber={documentsNumber}/>
  )
}

export default SalesColumnChart