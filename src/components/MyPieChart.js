import Highcharts from 'highcharts'
import PieChart from "highcharts-react-official";
import { Card } from 'react-bootstrap';

const MyPieChart = ({name, data}) => {

    const options = {
        title: {
            text: name,
            align: "left"
        },
        chart: {
          type: "pie"
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
            }
        },
        legend: {
            align: 'left',
            verticalAlign: 'top',
            layout: 'vertical',
            x: 0,
            y: 100
        },
        series: [
            {
                data: data
              }
        ]
      }

  return (
    <Card>
        <Card.Body>
        <PieChart highcharts={Highcharts} options={options} />
        </Card.Body>
    </Card>
  )
}

export default MyPieChart