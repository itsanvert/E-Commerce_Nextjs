import React from "react";
import "../../styles/dashboard.css"; 
import dashboard from "@/app/image/dashboard/dashboard (2).png";
import customer from "@/app/image/dashboard/customer.png";
import employee from "@/app/image/dashboard/employee.png";
import product from "@/app/image/dashboard/product.png";
import payment from "@/app/image/dashboard/payment.png";
import helpButton from "@/app/image/dashboard/help-web-button.png";
import setting from "@/app/image/dashboard/settings.png";

// Additional imports for other images
import searchIcon from "@/app/image/dashboard/search.png";
import notifications from "@/app/image/dashboard/notifications.png";
import userIcon from "@/app/image/dashboard/user.png";
import infoIcon from "@/app/image/dashboard/info.png";

const Page = () => {
  return (
    <div>
      {/* Sidebar */}
      <div className="side-menu">
        <div className="brand-name">
          <h1>Brand</h1>
        </div>
        <ul>
          <li>
            <img src={dashboard.src} alt="" /> <span>Dashboard</span>
          </li>
          <li>
            <img src={customer.src} alt="" /> <span>Customer</span>
          </li>
          <li>
            <img src={employee.src} alt="" /> <span>Employee</span>
          </li>
          <li>
            <img src={product.src} alt="" /> <span>Product</span>
          </li>
          <li>
            <img src={payment.src} alt="" /> <span>Income</span>
          </li>
          <li>
            <img src={helpButton.src} alt="" /> <span>Help</span>
          </li>
          <li>
            <img src={setting.src} alt="" /> <span>Settings</span>
          </li>
        </ul>
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="nav">
            <div className="search">
              <input type="text" placeholder="Search.." />
              <button type="submit">
                <img src={searchIcon.src} alt="search" />
              </button>
            </div>
            <div className="user">
              <a href="#" className="btn">
                Add New
              </a>
              <img src={notifications.src} alt="notifications" />
              <div className="img-case">
                <img src={userIcon.src} alt="user" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <div className="cards">
            {/* Cards Section */}
            <div className="card">
              <div className="box">
                <h1>2194</h1>
                <h3>Customers</h3>
              </div>
              <div className="icon-case">
                <img src={customer.src} alt="customer" />
              </div>
            </div>
            <div className="card">
              <div className="box">
                <h1>53</h1>
                <h3>Employee</h3>
              </div>
              <div className="icon-case">
                <img src={employee.src} alt="employee" />
              </div>
            </div>
            <div className="card">
              <div className="box">
                <h1>5</h1>
                <h3>Product</h3>
              </div>
              <div className="icon-case">
                <img src={product.src} alt="product" />
              </div>
            </div>
            <div className="card">
              <div className="box">
                <h1>350000</h1>
                <h3>Income</h3>
              </div>
              <div className="icon-case">
                <img src={payment.src} alt="income" />
              </div>
            </div>
          </div>

          {/* Recent Payments */}
          <div className="content-2">
            <div className="recent-payments">
              <div className="title">
                <h2>Recent Payments</h2>
                <a href="#" className="btn">
                  View All
                </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Product</th>
                    <th>Amount</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(4)].map((_, index) => (
                    <tr key={index}>
                      <td>John Doe</td>
                      <td>Baggy Jean</td>
                      <td>$120</td>
                      <td>
                        <a href="#" className="btn">
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* New Customers */}
            <div className="new-students">
              <div className="title">
                <h2>New Customers</h2>
                <a href="#" className="btn">
                  View All
                </a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(4)].map((_, index) => (
                    <tr key={index}>
                      <td>
                        <img src={userIcon.src} alt="user profile" />
                      </td>
                      <td>John Steve Doe</td>
                      <td>
                        <img src={infoIcon.src} alt="info" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
