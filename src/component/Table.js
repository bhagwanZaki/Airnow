import React from "react";
import paypal from "../assets/logo/paypal.png";
import mastercard from "../assets/logo/mastercard.png";
import qiwi from "../assets/logo/qiwi.png";
import webmoney from "../assets/logo/webmoney.png";

function Table() {
  return (
    <table>
      <tr>
        <th>Date and time</th>
        <th>Payment Method</th>
        <th>Status</th>
        <th>Amount ($)</th>
      </tr>
      <tr>
        <td>17 Feb 2020, 16:30</td>
        <td className="cc">
          <img className="ccic m" src={mastercard} alt="mastercard" />
          Mastercard
        </td>
        <td>Pending</td>
        <td>- 400.00 $</td>
      </tr>
      <tr>
        <td>14 Feb 2020, 12:39</td>
        <td className="cc">
          <img className="ccic p" src={paypal} alt="paypal" />
          Paypal
        </td>
        <td>Pending</td>
        <td>- 250.00 $</td>
      </tr>
      <tr>
        <td>12 Feb 2020, 09:45</td>
        <td className="cc">
          <img className="ccic q" src={qiwi} alt="qiwi" />
          Qiwi
        </td>
        <td>Done</td>
        <td className="inc">+ 1000.00 $</td>
      </tr>
      <tr>
        <td>10 Feb 2020, 12:39</td>
        <td className="cc">
            <img className="ccic w" src={webmoney} alt="webmoney" />
          Webmoney
        </td>
        <td>Pending</td>
        <td>- 250.00 $</td>
      </tr>
    </table>
  );
}

export default Table;
