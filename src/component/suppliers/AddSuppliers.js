import React from "react"
import { useState, useEffect } from "react"
import axios from "axios";

let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
})

export default function AddSuppliers() {
    const [supplierRegisteration, setsupplierRegisteration] = useState({
        name: "",
        contactperson: "",
        phonenum:"",
        address: "",
        city: "",
        province: "",
        country: "Pakistan",
        zipcode: "",
    });

  const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setsupplierRegisteration({...supplierRegisteration, [name] : value})
  }

  const handleSubmit = async (e) => {
      //send to backend from here
      e.preventDefault();
      console.log(supplierRegisteration)

      try {
        let res = await instance.post('/api/suppliers/', {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },

            "name":supplierRegisteration.name,
            "contactperson":supplierRegisteration.contactperson,
            "phonenum":supplierRegisteration.phonenum,
            "address":supplierRegisteration.address,
            "city":supplierRegisteration.city,
            "province":supplierRegisteration.province,
            "country":supplierRegisteration.country,
            "zipcode":supplierRegisteration.zipcode,
        })
    }
    catch (e) {
        alert("Invalid data!");

    }


      setsupplierRegisteration({
        name: "",
        contactperson: "",
        phonenum:"",
        address: "",
        city: "",
        province: "",
        country: "Pakistan",
        zipcode: "",
    });
  }
    return (
      <>
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium pl-2 leading-6 text-text2">Add Supplier</h3>
                <p className="mt-1 text-sm pl-2 text-text3">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="" onSubmit={handleSubmit}>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="name" className="block text-sm font-medium text-text2" >Shop Name</label>
                        <input type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          required
                          value={supplierRegisteration.name}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="contactperson" className="block text-sm font-medium text-text2" >Contact Person</label>
                        <input type="text"
                          name="contactperson"
                          id="contactperson"
                          autoComplete="contactperson"
                          required
                          value={supplierRegisteration.contactperson}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="phonenum" className="block text-sm font-medium text-text2" >Phone Number</label>
                        <input type="text"
                          placeholder="03XX-XXXXXXX"
                          min="0"
                          name="phonenum"
                          id="phonenum"
                          required
                          value={supplierRegisteration.phonenum}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="country" className="block text-sm font-medium text-text2">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={supplierRegisteration.country}
                          onChange={handleInput}
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-secondary bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        >
                          <option value="Pakistan">Pakistan</option>
                        </select>
                      </div>
  
                      <div className="col-span-6">
                        <label htmlFor="address" className="block text-sm font-medium text-text2" >Street address</label>
                        <input type="text"
                          name="address"
                          id="address"
                          autoComplete="address"
                          value={supplierRegisteration.address}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-text2" >City</label>
                        <input type="text"
                          name="city"
                          id="city"
                          value={supplierRegisteration.city}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="province" className="block text-sm font-medium text-text2" >Province</label>
                        <input type="text"
                          name="province"
                          id="province"
                          value={supplierRegisteration.province}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="zipcode" className="block text-sm font-medium text-text2" >zipcode / Postal Code</label>
                        <input type="text"
                          name="zipcode"
                          id="zipcode"
                          value={supplierRegisteration.zipcode}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
                  </div>
                 
                </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      id="register"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-text1 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  