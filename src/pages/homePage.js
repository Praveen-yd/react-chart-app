import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../components/chart";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import Sidebar from "../components/sidebar/sidebar";
import "./homePage.css";
const HomePage = () => {
  const accounts = useSelector((state) => state.accountReducer.accounts);
  const [emiAmount, setEmiAmount] = useState(500);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total_Amount = accounts.reduce((acc, account) => {
      return (acc += account);
    }, 0);
    setTotalAmount(total_Amount);
  }, [accounts]);
  return (
    <div className="container">
      <Sidebar accounts={accounts} totalAmount={totalAmount} />
      <div>
        <div className="section">
          <SectionHeader
            totalAmount={totalAmount}
            setEmiAmount={setEmiAmount}
          />

          <Chart emiAmount={emiAmount} totalAmount={totalAmount} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
