import React from "react";

import dashboard from "@/app/image/dashboard/dashboard (2).png";
import customer from "@/app/image/dashboard/customer.png";
import employee from "@/app/image/dashboard/employee.png";
import product from "@/app/image/dashboard/product.png";
import payment from "@/app/image/dashboard/payment.png";
import helpButton from "@/app/image/dashboard/help-web-button.png";
import setting from "@/app/image/dashboard/settings.png";

import searchIcon from "@/app/image/dashboard/search.png";
import notifications from "@/app/image/dashboard/notifications.png";
import userIcon from "@/app/image/dashboard/user.png";
import infoIcon from "@/app/image/dashboard/info.png";

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full bg-white shadow-md lg:h-full flex-shrink-0">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-gray-700">Brand</h1>
        </div>
        <ul className="space-y-4 p-4 text-gray-600">
          <li className="flex items-center gap-4">
            <img src={dashboard.src} alt="Dashboard" className="w-6 h-6" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center gap-4">
            <img src={customer.src} alt="Customer" className="w-6 h-6" />
            <span>Customer</span>
          </li>
          <li className="flex items-center gap-4">
            <img src={employee.src} alt="Employee" className="w-6 h-6" />
            <span>Employee</span>
          </li>
          <li className="flex items-center gap-4">
            <img src={product.src} alt="Product" className="w-6 h-6" />
            <span>Product</span>
          </li>
          <li className="flex items-center gap-4">
            <img src={payment.src} alt="Income" className="w-6 h-6" />
            <span>Income</span>
          </li>
          <li className="flex items-center gap-4">
            <img src={helpButton.src} alt="Help" className="w-6 h-6" />
            <span>Help</span>
          </li>
          <li className="flex items-center gap-4">
            <img src={setting.src} alt="Settings" className="w-6 h-6" />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <div className="bg-white shadow-md flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search.."
              className="border rounded-md px-3 py-1 w-full sm:w-64"
            />
            <button className="p-2 bg-gray-200 rounded-md">
              <img src={searchIcon.src} alt="Search" className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="btn bg-blue-500 text-white px-4 py-2 rounded-md">
              Add New
            </a>
            <img src={notifications.src} alt="Notifications" className="w-6 h-6" />
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src={userIcon.src} alt="User" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Cards Section */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-4 shadow rounded-lg flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">2194</h1>
                <h3 className="text-sm text-gray-500">Customers</h3>
              </div>
              <img src={customer.src} alt="Customer" className="w-10 h-10" />
            </div>
            <div className="bg-white p-4 shadow rounded-lg flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">53</h1>
                <h3 className="text-sm text-gray-500">Employees</h3>
              </div>
              <img src={employee.src} alt="Employee" className="w-10 h-10" />
            </div>
            <div className="bg-white p-4 shadow rounded-lg flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">5</h1>
                <h3 className="text-sm text-gray-500">Products</h3>
              </div>
              <img src={product.src} alt="Product" className="w-10 h-10" />
            </div>
            <div className="bg-white p-4 shadow rounded-lg flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">350000</h1>
                <h3 className="text-sm text-gray-500">Income</h3>
              </div>
              <img src={payment.src} alt="Income" className="w-10 h-10" />
            </div>
          </div>

          {/* Recent Payments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4">
                <h2 className="text-lg font-bold">Recent Payments</h2>
                <a href="#" className="btn text-blue-500">View All</a>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="p-2 text-left">Customer Name</th>
                      <th className="p-2 text-left">Product</th>
                      <th className="p-2 text-left">Amount</th>
                      <th className="p-2 text-left">Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(4)].map((_, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">John Doe</td>
                        <td className="p-2">Baggy Jean</td>
                        <td className="p-2">$120</td>
                        <td className="p-2">
                          <a href="#" className="text-blue-500">View</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* New Customers */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4">
                <h2 className="text-lg font-bold">New Customers</h2>
                <a href="#" className="btn text-blue-500">View All</a>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="p-2 text-left">Profile</th>
                      <th className="p-2 text-left">Name</th>
                      <th className="p-2 text-left">Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(4)].map((_, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">
                          <img src={userIcon.src} alt="Profile" className="w-6 h-6 rounded-full" />
                        </td>
                        <td className="p-2">John Steve Doe</td>
                        <td className="p-2">
                          <img src={infoIcon.src} alt="Info" className="w-6 h-6" />
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
    </div>
  );
};

export default Page;
