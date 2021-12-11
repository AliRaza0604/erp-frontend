import React from "react"
import InputField from "../forms/InputField"
import PhoneInput from 'react-phone-number-input/input'
import { useState } from "react"

export default function AddSuppliers() {
  const [value, setValue] = useState()
    return (
      <>
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium pl-2 leading-6 text-text2">Supplier Details</h3>
                {/* <p className="mt-1 text-sm pl-2 text-text3">
                  This information will be displayed publicly so be careful what you share.
                </p> */}
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">

                      {/* <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-primary">Product Details</label>
                      </div>
                    
                      <div className="col-span-6 sm:col-span-4">
                        <InputField type="text"
                          name="product"
                          id="product"
                          htmlFor="product"
                          label="Product Name"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <InputField type="number"
                          min="0"
                          name="rate"
                          id="rate"
                          htmlFor="rate"
                          label="Rate"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                          <label className="block text-sm font-medium text-primary"> Supplier Details</label>
                      </div> */}

                      <div className="col-span-6 sm:col-span-3">
                        <InputField type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          htmlFor="first-name"
                          label="First name"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <InputField type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          htmlFor="last-name"
                          label="Last name"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-4">
                        <InputField type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          htmlFor="email-address"
                          label="Email address"/>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="country" className="block text-sm font-medium text-text2">
                          Contact Number
                        </label>
                        <PhoneInput placeholder="Enter phone number"
                          country="PK"
                          value={value}
                          onChange={setValue}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-text2">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-secondary bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        >
                          <option>Pakistan</option>
                        </select>
                      </div>
  
                      <div className="col-span-6">
                        <InputField type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          htmlFor="street-address"
                          label="Street address"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <InputField type="text"
                          name="city"
                          id="city"
                          htmlFor="city"
                          label="City"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputField type="text"
                          name="state"
                          id="state"
                          htmlFor="state"
                          label="State / Province"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputField type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          htmlFor="postal-code"
                          label="Zip / Postal"/>
                      </div>
                  </div>
                </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
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
  