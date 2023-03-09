// libraries
import React from "react";

// css
import "../css/dashboard.css";

// images
import notification from "../assets/icons/notification.png";
import prf from "../assets/prf.svg";
import paypal from "../assets/logo/paypal.png";
import mastercard from "../assets/logo/mastercard.png";
import qiwi from "../assets/logo/qiwi.png";
import transferwise from "../assets/logo/transferwise.png";
import webmoney from "../assets/logo/webmoney.png";
import income from "../assets/icons/import.png";
import expense from "../assets/icons/share.png";
import Table from "../component/Table";
import BarChart from "../component/Chart";
import PieChart from "../component/PieChart";

function Dashboard() {
  const CardComponent = ({ title, logo }) => {
    return (
      <div className="card">
        <div className="topCardArea">
          <h4>{title}</h4>

          <div className="breadCumer">1 - 5%</div>
        </div>
        <img src={logo} className="clogo paypal" alt="paypal" />
      </div>
    );
  };

  const IncomeExpenseCard = ({ amount, label, icon, iconclass }) => {
    return (
      <div className="incexpCard">
        <img src={icon} className={iconclass} alt="expense-icon" />
        <div className="incexprs">
          <h2>${amount}</h2>
          <h4>{label}</h4>
        </div>
      </div>
    );
  };
  return (
    <div className="dmain">
      <div className="uppersec">
        <div className="leftuppersec">
          <div className="upperNav">
            <h2>Balance</h2>
            <div className="rightNavGrp">
              <img className="notification" src={notification} alt="notification" />
              <img className="prf" src={prf} alt="profile" />
            </div>
          </div>
          <BarChart />
        </div>
        <div className="rightuppersec">
          <h3>Balance statistic</h3>
          <PieChart />
        </div>
      </div>
      <div className="middlesec">
        <h3>Payment methods</h3>
        <div className="paymentMethod">
          <CardComponent title={"Paypal"} logo={paypal} />
          <CardComponent title={"Mastercard"} logo={mastercard} />
          <CardComponent title={"Webmoney"} logo={webmoney} />
          <CardComponent title={"Qiwi"} logo={qiwi} />
          <CardComponent title={"Transferwise"} logo={transferwise} />
        </div>
      </div>
      <div className="bottomsec">
        <div className="leftbottomsec">
          <div className="tableHeading">
            <h3>Transactions</h3>
            <div className="tableHeadingFilter">
              <h4>Today</h4>
              <h4>This Week</h4>
              <h4 className="active">This Month</h4>
            </div>
          </div>
          <Table />
        </div>
        <div className="rightbottomsec">
          <h3>Income / Expense</h3>
          <IncomeExpenseCard
            amount={"22,578.00"}
            label={"Total amount expense"}
            icon={expense}
            iconclass={"expenseIcon"}
          />
          <IncomeExpenseCard
            amount={"5,783.00"}
            label={"Total amount income"}
            icon={income}
            iconclass={"incomeIcon"}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
