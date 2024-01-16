import React ,{useEffect, useState}from 'react'
import Footer from '../Footer/Footer'
import Invoice from '../Invoice/Invoice'
import InvoiceForm from '../InvoiceForm/InvoiceForm'

const NewInvoice = () => {
  const [value, setValue] = useState(
    {
      companyName:'',
      companyAddress:'',
      companyEmail:'',
      customerName:'',
      customerAddress:'',
      customerEmail:'',
    }
  )
  const [items, setItems] =useState([])
  const [total, setTotal] = useState(null)
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'))
    const item = JSON.parse(localStorage.getItem('items'))
    const total = item.reduce((sum, currentItem) => { 
      return sum + (currentItem.rate * currentItem.amount); 
  }, 0);
    setValue({...value, ...data})
    setItems(item)
    setTotal(total)
  }, [])
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
     <div>
       <button className='printBtn' onClick={()=> handlePrint()}>Print Invoice</button>
     </div>
      <Invoice
      companyAddress={value.companyAddress}
      companyEmail={value.companyEmail}
      companyName={value.companyName}
      customerAddress={value.customerAddress}
      customerEmail={value.customerEmail}
      customerName={value.customerName}
      items={items}
      total={total}
      />
      <Footer/>
    </>
  )
}

export default NewInvoice
