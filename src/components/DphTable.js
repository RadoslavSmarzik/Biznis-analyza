import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Table } from "react-bootstrap"
import { Card } from "react-bootstrap"


const DphTable = () => {

    const balance = useSelector((state) => state.businessData.data.balance)
    const [records, setRecords] = useState([])

    useEffect( () => {
        if (balance == null){
            return
        } 
        setRecords(balance)
    }, [balance])

  return (
    <Card style={{ width: '400px', height:"250px"}}>
        <Card.Body>
        <Card.Title>Prehľad DPH</Card.Title>
        <div style={{height:"175px", overflow:"auto", marginTop:"20px"}}>
            <Table borderless>
                <thead style={{position:"sticky", top:"0px"}}>
                    <tr>
                    <th className="text-center">Mesiac</th>
                    <th className="text-end">Suma</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        records.map( (oneRecord, index) => {
                            const {month, costsTax, salesTax} = oneRecord
                            const date = new Date(month)
                            const monthNumber = date.getMonth() + 1
                            return (
                                <tr key={index} >
                                    <td className="text-center">{(monthNumber < 10) && "0"}{monthNumber +"/" + date.getFullYear()}</td>
                                    <td className="text-end">{(salesTax - costsTax).toFixed(2)}€</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
            </div>
        </Card.Body>
    </Card>
  )
}

export default DphTable