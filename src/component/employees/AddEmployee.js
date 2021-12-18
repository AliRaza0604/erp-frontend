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

export default function AddEmployee() {

    const [employeeRegisteration, setemployeeRegisteration] = useState({
        firstname: "",
        lastname: "",
        joindate: "",
        dob: "",
        salary: "",
        email: "",
        phonenum:"",
        cnic: "",
        address: "",
        city: "",
        province: "",
        country: "Pakistan",
        zipcode: "",
        depid: 3,
        username: "",
        password: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setemployeeRegisteration({...employeeRegisteration, [name] : value})
    }

    const handleSubmit = async (e) => {
        //send to backend from here
        e.preventDefault();
        console.log(employeeRegisteration)

        try {
          let res = await instance.post('/api/staff/', {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token')}`
          },

              "firstname":employeeRegisteration.firstname,
              "lastname":employeeRegisteration.lastname,
              "joindate":employeeRegisteration.joindate,
              "dob":employeeRegisteration.dob,
              "salary":employeeRegisteration.salary,
              "email":employeeRegisteration.email,
              "phonenum":employeeRegisteration.phonenum,
              "cnic":employeeRegisteration.cnic,
              "address":employeeRegisteration.address,
              "city":employeeRegisteration.city,
              "province":employeeRegisteration.province,
              "country":employeeRegisteration.country,
              "zipcode":employeeRegisteration.zipcode,
              "depid":employeeRegisteration.depid,
              "username":employeeRegisteration.username,
              "password":employeeRegisteration.password,
          })
      }
      catch (e) {
          alert("Invalid data!");

      }


        setemployeeRegisteration({
          firstname: "",
          lastname: "",
          joindate: "",
          dob: "",
          salary: "",
          email: "",
          phonenum:"",
          cnic: "",
          address: "",
          city: "",
          province: "",
          country: "Pakistan",
          zipcode: "",
          depid: 3,
          username: "",
          password: "",
      });
    }

    return (
      <>
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium pl-2 leading-6 text-text2">Profile</h3>
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
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-text2" >First Name</label>
                        <input type="text"
                          name="firstname"
                          id="firstname"
                          autoComplete="given-name"
                          required
                          value={employeeRegisteration.firstname}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-text2" >Last Name</label>
                        <input type="text"
                          name="lastname"
                          id="lastname"
                          autoComplete="family-name"
                          required
                          value={employeeRegisteration.lastname}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="user-name" className="block text-sm font-medium text-text2" >Username</label>
                        <input type="text"
                          name="username"
                          id="username"
                          required
                          value={employeeRegisteration.username}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="password" className="block text-sm font-medium text-text2" >Password</label>
                        <input type="password"
                          name="password"
                          id="password"
                          required
                          value={employeeRegisteration.password}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium text-text2" >Email</label>
                        <input type="email"
                          name="email"
                          id="email"
                          required
                          value={employeeRegisteration.email}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="dob" className="block text-sm font-medium text-text2" >Date of Birth</label>
                        <input type="date"
                          name="dob"
                          id="dob"
                          required
                          format="YYYY-MM-DD"
                          value={employeeRegisteration.dob}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="phonenum" className="block text-sm font-medium text-text2" >Phone Number</label>
                        <input type="text"
                          placeholder="03XX-XXXXXXX"
                          min="0"
                          name="phonenum"
                          id="phonenum"
                          required
                          value={employeeRegisteration.phonenum}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="cnic" className="block text-sm font-medium text-text2" >ID Number</label>
                        <input type="text"
                          name="cnic"
                          id="cnic"
                          required
                          value={employeeRegisteration.cnic}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="depid" className="block text-sm font-medium text-text2">
                          Job Title
                        </label>
                        <select
                          id="depid"
                          name="depid"
                          value={employeeRegisteration.depid}
                          onChange={handleInput}
                          className="mt-1 block w-full py-2 px-3 border border-secondary bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        >
                          <option value={2}>Member of Finance Dept</option>
                          <option value={4}>Member of Collection Dept</option>
                          <option value={1}>Member of Sales Dept</option>
                          <option value={3}>Member of Purchase Dept</option>
                          <option value={5}>Member of Production Dept</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="salary" className="block text-sm font-medium text-text2" >Salary</label>
                        <input type='text'
                          min="0"
                          name="salary"
                          id="salary"
                          required
                          value={employeeRegisteration.salary}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="joindate" className="block text-sm font-medium text-text2" >Date of Joining</label>
                        <input type="date"
                          name="joindate"
                          id="joindate"
                          required
                          format="YYYY-MM-DD"
                          value={employeeRegisteration.joindate}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-text2">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={employeeRegisteration.country}
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
                          value={employeeRegisteration.address}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-text2" >City</label>
                        <input type="text"
                          name="city"
                          id="city"
                          value={employeeRegisteration.city}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="province" className="block text-sm font-medium text-text2" >Province</label>
                        <input type="text"
                          name="province"
                          id="province"
                          value={employeeRegisteration.province}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="zipcode" className="block text-sm font-medium text-text2" >zipcode / Postal Code</label>
                        <input type="text"
                          name="zipcode"
                          id="zipcode"
                          value={employeeRegisteration.zipcode}
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
  