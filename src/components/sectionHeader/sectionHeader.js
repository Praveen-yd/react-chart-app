import React from "react";
import "./sectionHeader.css";

const SectionHeader = (props) => {
  const { totalAmount, setEmiAmount } = props;
  let emiAmountValue = 500;
  const transaction = (e) => {
    emiAmountValue = parseInt(e.target.value);
  };
  return (
    <div>
      <h2 className="heading">Initial Balance: {totalAmount} </h2>
      <div>
        Monthly Payment
        <input
          type="number"
          placeholder={" Default 500"}
          onChange={transaction}
        />
        <button
          onClick={() => {
            setEmiAmount(emiAmountValue);
          }}
        >
          Get chart
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
