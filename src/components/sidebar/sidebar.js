import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addBalance } from "../../redux/actions/account-action";
import "./sidebar.css";

const Sidebar = (props) => {
  const { accounts } = props;
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const addAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  return (
    <div className="sidebar">
      <h1 className="heading">Accounts</h1>
      <div>Count : {accounts.length}</div>
      <div className="sidebar-content">
        Add Balance :
        <input
          type="number"
          placeholder={" Default 5000"}
          value={amount}
          onChange={addAmount}
        />
        <button
          disabled={amount > 0 ? false : true}
          onClick={(e) => {
            dispatch(addBalance(amount));
            setAmount(0);
          }}
        >
          Submit
        </button>
        {accounts.map((item, i) => (
          <div key={i}>Balance : {item}</div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
