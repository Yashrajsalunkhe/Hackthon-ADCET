import React, { useState, useEffect } from 'react';
import { QrCode, CreditCard, Users, Monitor, Cpu } from 'lucide-react';

const Payment = ({ selectedCategory, teamSize }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    category: selectedCategory || 'software',
    amount: 0,
    totalMembers: teamSize || 1,
    totalAmount: 0
  });

  // Calculate amount based on category and team size
  useEffect(() => {
    const rates = {
      hardware: 300, // Rs 300 per member for hardware
      software: 200  // Rs 200 per member for software
    };

    const amount = rates[selectedCategory] || 200;
    const totalAmount = amount * teamSize;

    setPaymentDetails({
      category: selectedCategory,
      amount,
      totalMembers: teamSize,
      totalAmount
    });
  }, [selectedCategory, teamSize]);

  return (
    <div className="step-header">
      <CreditCard size={28} className="step-icon" />
      <h2>Payment Details</h2>
      <p>Complete your registration payment</p>
      
      <div className="payment-info">
        <div className="payment-summary">
          <div className="summary-row">
            <span>Project Category:</span>
            <span className="summary-value">
              {paymentDetails.category === 'hardware' ? (
                <><Cpu size={16} /> Hardware Project</>
              ) : (
                <><Monitor size={16} /> Software Project</>
              )}
            </span>
          </div>
          <div className="summary-row">
            <span>Rate per member:</span>
            <span className="summary-value">₹{paymentDetails.amount}</span>
          </div>
          <div className="summary-row">
            <span><Users size={16} /> Total members:</span>
            <span className="summary-value">{paymentDetails.totalMembers}</span>
          </div>
          <div className="summary-row total">
            <span>Total Amount:</span>
            <span className="summary-value">₹{paymentDetails.totalAmount}</span>
          </div>
        </div>

        <div className="qr-payment">
          <h3>
            <QrCode size={20} />
            Scan QR Code to Pay ₹{paymentDetails.totalAmount}
          </h3>
          <div className="qr-container">
            <img 
              src={paymentDetails.category === 'hardware' ? "/hardware.jpeg" : "/software.png"} 
              alt={`${paymentDetails.category} Payment QR Code`} 
              className="qr-code"
            />
            <div className="payment-instructions">
              <p><strong>Payment Instructions:</strong></p>
              <ol>
                <li>Scan the QR code with any UPI app (GPay, PhonePe, Paytm, etc.)</li>
                <li>Pay exactly <strong>₹{paymentDetails.totalAmount}</strong></li>
                <li>Note down the Transaction ID from payment confirmation</li>
                <li>Enter the Transaction ID in the next step</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;