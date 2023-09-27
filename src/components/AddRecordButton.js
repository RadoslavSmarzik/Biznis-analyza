import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useDispatch } from 'react-redux'
import { addRecord } from '../features/businessData/businessDataSlice'
import { Alert } from 'react-bootstrap'
// import axios from 'axios'
// import { setData } from '../features/businessData/businessDataSlice'


const AddRecordButton = () => {

  const [errorMessage, setErrorMessage] = useState("")
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(null)
  const [cost, setCost] = useState(null)
  const [sale, setSale] = useState(null)
  const dispatch = useDispatch()

  const openModul = () => {
    setShow(true)
    setErrorMessage("")
  }

  const closeModul = () => {
    setShow(false)
    setErrorMessage("")
  }

  const addNewRecord = () => {

    if(date == null){
      setErrorMessage("Vyberte dátum")
      return
    }
    
    if(isNaN(parseFloat(cost))) {
      setErrorMessage("Zle zadané náklady")
      return
    }

    if(isNaN(parseFloat(sale))) {
      setErrorMessage("Zle zadané tržby")
      return
    }

    dispatch(addRecord({
      costsAmount: parseFloat(cost), 
      salesAmount: parseFloat(sale), 
      month: date,
      costsTax: cost * 0.2,
      salesTax: sale * 0.2,
    }))
    closeModul()
    setDate(null)
    setCost(null)
    setSale(null)
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // funkcie fetchDataFromApi a addNewRecord_apiVersion by sa vyuzivali, keby chceme zaznam pridavat 
  // do Api a nie iba nam lokalne
  // fungovalo by to tak, ze by sme namiesto addNewRecord funckie volali addNewRecord_apiVersion

  // const fetchDataFromApi = () => {
  //   const url = "https://priklad.docflow.ai/"
  //   axios.get(url)
  //   .then(response => dispatch(setData(response.data)))
  //   .catch(error => console.log(error))
  // }

  // const addNewRecord_apiVersion = () => {
  //   const url = "https://priklad.docflow.ai/"
  //   axios.post(url, {
  //     costsAmount: parseFloat(cost), 
  //     salesAmount: parseFloat(sale), 
  //     month: date,
  //     costsTax: cost * 0.2,
  //     salesTax: sale * 0.2,
  //   })
  //   .then((response) => {
  //     fetchDataFromApi()
  //   })
  //   .catch((error) => console.log(error))
  // }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
    <Button onClick={openModul}>
        Pridať záznam
    </Button>

    <Modal show={show} onHide={closeModul}>
        <Modal.Header closeButton>
          <Modal.Title>Pridajte záznam</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {
          errorMessage && <Alert variant={"danger"}>{errorMessage}</Alert>
        }

          <Form>
            <Form.Group className="mb-3">
            <Form.Label>Vyberte mesiac:</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Zadajte náklady:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setCost(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Zadajte tržby:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setSale(e.target.value)}
              />
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModul}>
            Zavrieť
          </Button>
          <Button variant="primary" onClick={addNewRecord}>
            Pridať
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default AddRecordButton