import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setData } from './features/businessData/businessDataSlice'
import BusinessTable from './components/BusinessTable'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import SalesPieChart from './components/SalesPieChart'
import CostsPieChart from './components/CostsPieChart'
import MyAreasplineChart from './components/MyAreasplineChart'
import CostsColumnChart from './components/CostsColumnChart'
import SalesColumnChart from './components/SalesColumnChart'
import LossColumnChart from './components/LossColumnChart'
import DphTable from './components/DphTable'
import { Container, Col, Row } from 'react-bootstrap'
import TimeIntervalButton from './components/TimeIntervalButton'

const url = "https://priklad.docflow.ai/"
document.body.style = 'background: #f5f5f7;'

const App = () => {
  const dispatch = useDispatch()

  useEffect( () => {

    axios.get(url)
      .then(response => dispatch(setData(response.data)))
      .catch(error => console.log(error))

    // fetch(url)
    // .then(response => response.json())
    // .then(data => dispatch(setData(data)))
    // .catch();
  }, [dispatch])

  return (
    <Container fluid>
      <Row style={{margin:"10px", textAlign:"right"}}>
        <Col>
        <TimeIntervalButton/>
        </Col>
      </Row>
      
      <Row>
        <Col style={{marginBottom:"50px"}}>
          <LossColumnChart />
        </Col>

        <Col style={{marginBottom:"50px"}}>
          <SalesColumnChart />
        </Col>

        <Col style={{marginBottom:"50px"}}>
          <CostsColumnChart />
        </Col>

        <Col style={{marginBottom:"50px"}}>
          <DphTable />
        </Col>
      </Row>

      <Row style={{marginBottom:"50px"}}>
        <Col className='col-6'>
          <MyAreasplineChart />
        </Col>

        <Col className='col-6'>
        <BusinessTable />
        </Col>
      </Row>

    <Row style={{marginBottom:"50px"}}>
      <Col className='col-6'>
        <SalesPieChart />
      </Col>

      <Col className='col-6'>
        <CostsPieChart />
      </Col>
    </Row>

    </Container>
  )
}

export default App