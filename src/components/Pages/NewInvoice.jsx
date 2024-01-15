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
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'))
    setValue({...value, ...data})
  }, [])
  
  return (
    <>
      <Invoice
      companyAddress={value.companyAddress}
      companyEmail={value.companyEmail}
      companyName={value.companyName}
      customerAddress={value.customerAddress}
      customerEmail={value.customerEmail}
      customerName={value.customerName}
      />
      <Footer/>
    </>
  )
}

export default NewInvoice
