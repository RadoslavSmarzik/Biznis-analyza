import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table'
import "./BusinessTable.css"
import OneRow from "./OneRow"
import { Card } from "react-bootstrap"
import AddRecordButton from "./AddRecordButton"

const BusinessTable = () => {
    
    const businessData = useSelector((state) => state.businessData.data)
    const [tableData, setTableData] = useState(false)
    const [costsTotal, setCostsTotal] = useState(0)
    const [salesTotal, setSalesTotal] = useState(0)

    useEffect( () => {
        setTableData(businessData.balance)
        setCostsTotal(businessData.costsTotal)
        setSalesTotal(businessData.salesTotal)
    }, [businessData])

  return (
    <Card style={{height:"600px"}}>
        <Card.Body>
        <div style={{height:"500px", overflow:"auto"}}>
            <Table borderless hover>
                <thead style={{position:"sticky", top:"0px"}}>
                    <tr>
                    <th className="text-center">Mesiac</th>
                    <th className="text-end">Tržby</th>
                    <th className="text-end">Náklady</th>
                    <th className="text-end">Bilancia</th>
                    </tr>
                </thead>

                <tbody>
                {
                    tableData && tableData.map( (record, index) => {
                        return (
                            <OneRow key={index} record={record} index={index}/>
                        )
                    })
                }

                <tr className="text-end">
                <td className="text-center">SPOLU</td>
                <td className="text-success">{salesTotal}€</td>
                <td className="text-danger">{costsTotal}€</td>
                <td>{(salesTotal - costsTotal).toFixed(2)}€</td>
                </tr>

                </tbody>
            </Table>
        </div>
        <div style={{textAlign:"right", margin:"10px"}}>
            <AddRecordButton />
        </div>
        </Card.Body>
    </Card>
  )
}

export default BusinessTable