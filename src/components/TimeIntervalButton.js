import React from 'react'
import { Button, Modal, Form, Alert } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setData } from '../features/businessData/businessDataSlice'

const TimeIntervalButton = () => {
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [startString, setStartString] = useState("")
    const [endString, setEndString] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const dispatch = useDispatch()

    const closeModul = () => {
        setShow(false)
    }

    const openModul = () => {
        setShow(true)
    }

    const setDataFromTimeInterval = () => {

        setErrorMessage("")

        if (startDate == null){
          setErrorMessage("Zvolte začiatočný dátum")
          return
        }

        if (endDate == null){
          setErrorMessage("Zvolte konečný dátum")
          return
        }

        const sDate = new Date(startDate)
        setStartString(sDate.getMonth() + 1 + "/" + sDate.getFullYear())

        const eDate = new Date(endDate)
        setEndString(eDate.getMonth() + 1 + "/" + eDate.getFullYear())

        const url = "https://priklad.docflow.ai/"

        setStartDate(null)
        setEndDate(null)

        axios.get(url)
            .then(response => dispatch(setData(response.data)))
            .catch(error => console.log(error))
            .finally(closeModul())
        
        // Pripravene na dynamicky endpoint, pri ktorom by sa nastavovali parametre from a to
        //
        // axios.get(url, {
        //   params: {
        //     from: startDate,
        //     to: endDate
        //   }
        // })
        // .then(response => dispatch(setData(response.data)))
        // .catch(error => console.log(error))
        // .finally(closeModul())

    }

  return (
    <>
        <Button onClick={openModul}>Obdobie { startString && endString && "(" + startString + " - " + endString + ")"}</Button>

        <Modal show={show} onHide={closeModul}>
        <Modal.Header closeButton>
          <Modal.Title>Zvolte obdobie</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {
          errorMessage && <Alert variant={"danger"}>{errorMessage}</Alert>
        }

          <Form>
            <Form.Group className="mb-3">
            <Form.Label>Vyberte zaciatok:</Form.Label>
              <Form.Control
                type="date"
                onChange={(e)=>setStartDate(e.target.value)}
              />
            </Form.Group>

          </Form>

          <Form>
            <Form.Group className="mb-3">
            <Form.Label>Vyberte koniec:</Form.Label>
              <Form.Control
                type="date"
                onChange={(e)=>setEndDate(e.target.value)}
              />
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModul}>
            Zavrieť
          </Button>
          <Button variant="primary" onClick={setDataFromTimeInterval}>
            Potvrdit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TimeIntervalButton