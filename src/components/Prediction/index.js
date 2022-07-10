import React,{useState} from 'react'
import { SelectionContainer,SelectionData } from './predictionelemets'
import './predi.css'
const Predictpage = () => {
  const [values, setValues] = useState({
    room: '',
    area: '',
    parking: '',
    warehouse: '',
    elevator:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
     
  return (
    <>
    <a href="/" className='navlink'>Digi Forecast</a>
    {/* <h1>{values}</h1> */}
    <SelectionContainer>
          <SelectionData>
          <label >
            Area:
            <input type='text' values={values.area} name='Area' onChange={handleChange} placeholder='enter area'style={{margin:'10px'}}/>
            </label>
            <label>
            Room:
            <select value={values.room} onChange={handleChange} name='room' style={{margin:'10px'}}>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
            </label>
            <label>
              Parking:
              <label for='True'>True</label>
              <input type='radio' value={values.parking} onChange={handleChange} name='True'style={{margin:'10px'}}/>
              <label for='False'>False</label>
              <input type='radio' value={values.parking} onChange={handleChange} name='False' style={{margin:'10px'}}/>
            </label>
            <label>
              Elevator:
              <label for='True'>True</label>
              <input type='radio' value={values.elevator} onChange={handleChange} name='True'style={{margin:'10px'}}/>
              <label for='False'>False</label>
              <input type='radio' value={values.elevator} onChange={handleChange} name='False' style={{margin:'10px'}}/>
            </label>
            <label>
              Warehouse:
              <label for='True'>True</label>
              <input type='radio' value={values.warehouse} onChange={handleChange} name='True'style={{margin:'10px'}}/>
              <label for='False'>False</label>
              <input type='radio' value={values.warehouse} onChange={handleChange} name='False' style={{margin:'10px'}}/>
            </label>
            </SelectionData>
    </SelectionContainer>
    </>
  )
console.log(values)
  }
export default Predictpage