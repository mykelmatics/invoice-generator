import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const WorkOrder = () => {
    const [orders, setOrders] = useState([])
    const [formValues, setFormValues] = useState({
        id:'',
        title:'',
        description:'',
        rate:'',
        amount:'',
     
    })
    const handleChange = (e) =>{
       const {name, value} = e.target
       setFormValues({...formValues, [name]:value})
    }
    const handleAddItem = () => {
    setOrders((current => [...current, {...formValues, id: uuidv4()}]))
    localStorage.setItem('items', JSON.stringify([...orders,{...formValues, id: uuidv4()}]))
    setFormValues({...formValues,
        id:'',
        title:'',
        description:'',
        rate:'',
        amount:'',
    })

    }
  const handleDeleteItem = (id) => {
    const newOrders = orders.filter((order)=> order.id !== id)
    localStorage.setItem('items', JSON.stringify(newOrders))
    setOrders(newOrders)
  }

  return (
    <div className='order-wrapper'>
       <h3>Work Orders</h3>
      {/* <form > */}
      {orders.length ?
       <div className='orders-table'>
       <div className="orders-header">
           <div className="orders-title">Title</div>
           <div className="orders-desc">Description</div>
           <div className="orders-rate">Rate(Hrs)</div>
           <div className="orders-amt">Amount</div>
       </div>
       {orders.map((order)=> {
         return(
            <div className="orders-col">
            <div className="order-title-col">{order.title}</div>
            <div className="order-desc-col">{order.description}</div>
            <div className="order-rate-col">{order.rate}</div>
            <div className="order-amt-col">{order.amount} <span onClick={()=> {handleDeleteItem(order.id)} } className='delBtn'><i  class="fa">&#xf014;</i></span></div>
        </div>
         )
       })}

      </div>: <></>
      }
        <div className="form-container">
            <label htmlFor="">Title:</label>
            <input
            type="text"
            id="title"
            name="title"
            value={formValues.title}
            onChange={(e)=> handleChange(e)}
            placeholder="Enter work title"
            >
            </input>
        </div>
        <div className="form-container">
            <label htmlFor="">Description:</label>
            <textarea
            type="text"
            className='textArea'
            id="description"
            name="description"
            value={formValues.description}
            onChange={(e)=> handleChange(e)}
            placeholder="Enter work description"
            >
            </textarea>
        </div>  
        <div className="form-container">
            <label htmlFor="">Rate:</label>
            <input
            type="number"
            value={formValues.rate}
            id="rate"
            name="rate"
            onChange={(e)=> handleChange(e)}
            placeholder="Enter rate in hrs"
            >
            </input>
        </div>   
        <div className="form-container">
            <label htmlFor="">Amount:</label>
            <input
            type="number"
            value={formValues.amount}
            id="amount"
            name="amount"
            onChange={(e)=> handleChange(e)}
            placeholder="Enter amount per hr"
            >
            </input>
        </div>
        <span onClick={()=>{handleAddItem()}}  className='addItem'>Add Item</span>     
      {/* </form> */}
    </div>
  )
}

export default WorkOrder
