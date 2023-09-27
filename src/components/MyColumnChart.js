import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Card, Container, Row, Col } from 'react-bootstrap';
import "./MyColumnChart.css"

const MyColumnChart = ({title, data, color, documentsNumber, sum}) => {

    const options = {
        chart: {
          height: 150,
          width: 200,
          type: 'column'
        },
        title: {
          text: "",
          align: "left"
        },
        yAxis:{
          visible: false
        },
        xAxis:{
          visible: false
        },
        legend:{ 
          enabled: false 
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
          column: {
            pointPadding: 0,
            borderWidth: 0
        },
          series: {
              states: {
                hover: {
                    enabled: false
                }
              },
              borderRadius: {
                radius: 100
              },
              stacking: 'normal',
              negativeColor: "red"

          }
      },
        series: [
          {
            color: color,
            data: data
          }
        ]
      }
  let formatter = Intl.NumberFormat('en', { notation: 'compact' });

  return (
    <Card style={{ width: '400px', height:"250px"}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Container>
          <Row>

          <Col className='col-4 numbers-color'>
            <h1 style={{color: (sum<0)? "red" : color}}>{formatter.format(sum)}</h1>
            <p>{documentsNumber} dokladov</p>
          </Col>

          <Col className='col-8'>
          <HighchartsReact highcharts={Highcharts} options={options} />
          </Col>

          </Row>
        </Container>
      </Card.Body>
    </Card>
    
  )
}

export default MyColumnChart