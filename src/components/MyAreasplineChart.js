import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'

const MyAreasplineChart = () => {
    const balance = useSelector((state) => state.businessData.data.balance)
    const [costs, setCosts] = useState([])
    const [sales, setSales] = useState([])
    const [xAxis, setXAxis] = useState([])

    useEffect( () => {
        if (balance == null){
            return
        }

        const costsArray = []
        const salesArray = []
        const xAxisArray = []
       
        for ( const record of balance ){
            costsArray.push(record.costsAmount)
            salesArray.push(record.salesAmount)
            const date = new Date(record.month)
            xAxisArray.push(date.toLocaleString('default', { month: 'long' }) + " "+ date.getYear() % 100)
        }
        
        setCosts(costsArray)
        setSales(salesArray)
        setXAxis(xAxisArray)

    }, [balance])

    

    const options = {
        title: {
            text: "Mesačné tržby a náklady",
            align: "left",
        },
        chart: {
          type: "areaspline",
          height: 550
        },
        plotOptions: {
            
            areaspline: {
                fillOpacity: 0.3
            }
        },
        xAxis: {
            categories: xAxis,
            tickInterval: 3
        },
        yAxis: {
            title: false
         },
        legend: {
            align: "left"
        },
        series: [{
            name: 'Náklady',
            data: costs,
            color: "red"
        }, {
            name: 'Tržby',
            data: sales,
            color: "green"
        }]
      }

  return (
    <Card style={{height:"600px"}}>
        <Card.Body>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </Card.Body>
    </Card>
  )
}

export default MyAreasplineChart