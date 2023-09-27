import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecord, updateRecord } from '../features/businessData/businessDataSlice'
import { Form } from 'react-bootstrap'
import "./OneRow.css"
import { useRef } from 'react'
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

const OneRow = ({record, index}) => {
    const [showButtons, setShowButtons] = useState(false)
    const [edit, setEdit] = useState(false)
    const [monthValue, setMonthValue] = useState(null)
    const [costsValue, setCostsValue] = useState(null)
    const [salesValue, setSalesValue] = useState(null)
    const [errorMessage, setErrorMessage] = useState("")
    const target = useRef(null);

    const {month, costsAmount, salesAmount,} = record
    const date = new Date(month)
    const monthNumber = date.getMonth() + 1
    const dispatch = useDispatch()

    useEffect( () =>{
        setEdit(false)
        const newDate = new Date(record.month)
        setMonthValue(newDate.toISOString().split('T')[0])
        setCostsValue(record.costsAmount)
        setSalesValue(record.salesAmount)
    },[record, index])

    const handleEdit = () => {

        if(isNaN(parseFloat(salesValue))) {
            setErrorMessage("Zlé zadané tržby")
            return
          }

        if(isNaN(parseFloat(costsValue))) {
            setErrorMessage("Zlé zadané náklady")
            return
        }

        dispatch(updateRecord({
            id:index, 
            month: monthValue, 
            costsAmount: parseFloat(costsValue), 
            salesAmount: parseFloat(salesValue)
        }))
        setErrorMessage("")
        setEdit(false)
    }

    return (
        <>
        <tr className="text-end" ref={target}
            onMouseEnter={() => setShowButtons(true)} 
            onMouseLeave={() => setShowButtons(false)}
            style={{height: "50px"}}
            >

            <td className="text-center">
                {
                edit ? <Form.Control size="sm" 
                                     type="date"
                                     value={monthValue}
                                     onChange={(e) => {
                                        setMonthValue(e.target.value)
                                    }}
                                     /> :
                      ((monthNumber < 10) && "0") +  monthNumber +"/" + date.getFullYear()
                }
                
            </td>

            <td className="text-success">
                {
                edit ? <Form.Control size="sm" 
                                     type="text" 
                                     value = {salesValue}
                                     onChange={(e) => setSalesValue(e.target.value)}
                                     /> :
                        salesAmount+"€"
                }
            </td>

            <td className="text-danger">
                {
                edit ? <Form.Control size="sm" 
                                     type="text" 
                                     value = {costsValue}
                                     onChange={(e) => setCostsValue(e.target.value)}
                                     /> :
                        costsAmount+"€"
                }
            </td>

            <td>{(salesAmount - costsAmount).toFixed(2)}€</td>
            <td className='buttons-column'>
            {
                showButtons && 
                <>
                    { 
                        edit ?
                            <Button size="sm" onClick = {handleEdit} onMouseLeave={() => setErrorMessage("")}>Potvrdit</Button> :
                            <Button size="sm" onClick = {() => setEdit(true)}>Edit</Button>
                    }
                    <Button style = {{marginLeft:"5px"}}size="sm" variant='danger' onClick={() => dispatch(deleteRecord(index))}>Zmaž</Button>
                </>
            }
            </td>

        </tr>


        <Overlay target={target.current} show={errorMessage} placement="left">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {errorMessage}
          </Tooltip>
        )}
      </Overlay>
        </>
    )
}

export default OneRow