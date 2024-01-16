import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkOrder from "../WorkOrder/WorkOrder";

import "./style.css";

const InvoiceForm = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        companyName:'',
        companyAddress:'',
        companyEmail:'',
        customerName:'',
        customerAddress:'',
        customerEmail:'',
    })

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormValues({...formValues, [name]:value})
  }
const handleSubmit = () => {
    localStorage.setItem("data", JSON.stringify(formValues));
    navigate('/invoice')
    
}

  return (
    <>
      <div className="invoice">
        <div className="invoice-header">
          <h1>Invoice</h1>
        </div>
        <form className="invoice-form">
          <div className="input-container">
            <label for="company-name" id="company-name-label">
              Company Name:
            </label>
            <input
              type="text"
              id="company-name"
              name="companyName"
              onChange={(e)=> handleChange(e)}
              placeholder="Enter company name"
              required
            ></input>
          </div>
          <div className="input-container">
            <label for="company-address">Company Address:</label>
            <input
              type="text"
              id="company-address"
              placeholder="Enter company address"
              name="companyAddress"
              onChange={(e)=> handleChange(e)}
              required
            ></input>
          </div>
          <div className="input-container">
            <label for="company-mail">Company Email:</label>
            <input
              type="text"
              id="company-email"
              name="companyEmail"
              placeholder="Enter company mail"
              onChange={(e)=> handleChange(e)}
              required
            ></input>
          </div>
          <div className="input-container">
            <label for="customer-name">Customer Name:</label>
            <input
              type="text"
              id="customer-name"
              name="customerName"
              placeholder="Enter customer name"
              onChange={(e)=> handleChange(e)}
              required
            ></input>
          </div>
          <div className="input-container">
            <label for="customer-address">Customer Address:</label>
            <input
              type="text"
              id="customer-address"
              name="customerAddress"
              placeholder="Enter customer address"
              onChange={(e)=> handleChange(e)}
              required
            ></input>
          </div>
          <div className="input-container">
            <label for="mobile-number">Customer Email:</label>
            <input
              type="text"
              id="email"
              name="customerEmail"
              onChange={(e)=> handleChange(e)}
              placeholder="Enter email addreess"
              required
            ></input>
            <WorkOrder/>

            <button onClick={() => handleSubmit()} className="submitBtn">Generate Invoice</button>
          </div>           
        </form>
        
      </div>
    </>
  );
};

export default InvoiceForm;
