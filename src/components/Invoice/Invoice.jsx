import React, {useEffect} from 'react'

const Invoice = ({companyName,companyAddress,companyEmail,customerName,customerAddress,customerEmail}) => {

  return (
    <main className="invoice-container">
        <div className="invoice-header">
          <div className="logo-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="88"
              viewBox="0 0 81 88"
              fill="none"
            >
              <path
                d="M0 88H18.8698C18.8698 88 24.897 76.0367 40.1539 76.0367C55.4109 76.0367 59.6629 88 59.6629 88L81 88L53.2862 0L27.7138 0L0 88ZM22.9892 66.9653L40.311 15.5833L57.117 66.9653C57.117 66.9653 51.5655 61.579 40.1539 61.579C28.7424 61.579 22.9892 66.9653 22.9892 66.9653Z"
                fill="#222222"
              />
            </svg>
          </div>
          <div className="invoice-title-wrapper">
            <div className="invoice-title-container">
              <div className="invoice-title">
                Invoice <span className="separator">|</span> {customerName}
              </div>
              <p className="invoice-number">
                No.<span className="date">0000</span> | Date{" "}
                <span contenteditable className="date">
                  00.00.2022
                </span>
              </p>
            </div>
            <div className="invoice-recipent-container">
              <div className="invoice-recipent">
                <div className="invoice-recipent-title">From</div>
                <div className="recipent-info">
                  <p className="invoice-recipent-name">{companyName}</p>
                  <p className="address">{companyAddress}</p>
                  <p className="address">Zipcode & city</p>
                  <p className="address">{companyEmail}</p>
                </div>
              </div>
              <div className="invoice-recipent">
                <div className="invoice-recipent-title">To</div>
                <div className="recipent-info">
                  <p className="invoice-recipent-name">{customerName}</p>
                  <p className="address">{customerAddress}</p>
                  <p className="address">Zipcode & city</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="invoice-content">
          <div className="payment-info-container">
            <p className="payment-info">PAYMENT INFO</p>
            <div className="acct-name-wrapper">
              <p className="acct-title">Account name</p>
              <p>{customerName}</p>
            </div>
            <div className="acct-name-wrapper">
              <p className="acct-title">IBAN</p>
              <p>NL00 INGB 0000 0000 00</p>
            </div>
            <div className="acct-name-wrapper">
              <p className="acct-title">PayPal</p>
              <p>{customerEmail}</p>
            </div>
          </div>
          <div className="table-wrapper">
            <div className="table-header">

              <div className="description">DESCRIPTION</div>
              <div className="rate">RATE</div>
              <div className="hours">HRS</div>
              <div className="amount">AMOUNT</div>
            </div>
            <div className="table-content">
              <div className="descText">
                <div className="descTitle">Design</div>
                <div className="descT">Description here</div>
              </div>
              <div className="rateCol">	€600</div>
              <div className="hrsCol">1</div>
              <div className="amtCol">	€600</div>

            </div>
          </div>
        </div>
        <div className="subtotal-content">
          <div className="paymentTermsWrapper">
            <p>Payment Terms</p>
            <p>Payment within 14 days</p>
            <p>from Invoice receipt</p>
            <p>without deductions</p>
          </div>
          <div className="subTotalWrapper">
              <div className="discountWrapper">
                <div className="discTitle">
                  <p>Sub Total</p>
                  <p>BTW 21%</p>
                </div>
                <div className="discAmt">
                  <p>$600</p>
                  <p>$600</p>
                </div>

              </div>
          </div>
        </div>
        <div className="totalAmtContainer">
          <div>TOTAL</div>
          <div className="totalAmt"><span>$600</span></div>
        </div>
      </main>
  )
}

export default Invoice