import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";

let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        put: {
            'Content-Type': 'application/json'
        },
        get: {
            'Content-Type': 'application/json'
        }
    }
})



const Profile = () => {

    const [username, setusername] = useState(localStorage.getItem('username'));

    const [password, setpassword] = useState();
    
    useEffect (async() => {
        try {
            let res = await instance.get(`/api/staff/username/${username}/`,
            {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
              }
            }
          );
            
            console.log(res)
            setStaffid(res.data[0].staffid)
            setemployeeRegisteration({
                firstname: res.data[0].firstname,
                lastname: res.data[0].lastname,
                email: res.data[0].email,
                phonenum: res.data[0].phonenum,
                cnic: res.data[0].cnic,
                address: res.data[0].address,
                city: res.data[0].city,
                province: res.data[0].province,
                country: res.data[0].country,
                zipcode: res.data[0].zipcode,
            });
        }

        catch (e) {
                alert("Invalid data!");
        }
    },[])

    const [employeeRegisteration, setemployeeRegisteration] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenum:"",
        cnic: "",
        address: "",
        city: "",
        province: "",
        country: "",
        zipcode: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setemployeeRegisteration({...employeeRegisteration, [name] : value})
    }

    const [staffid,setStaffid] = useState();

    const handleChangePassword = async (e) => {
        
      

      try {
          let res = await instance.put(`/api/staff/${staffid}/changepwd/`,
          {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
              password
          })

          console.log(res)
      }

      catch (e) {
              alert("Invalid data!");

      }

      setpassword('');

  }
    

    const handleSubmit = async (e) => {
        //send to backend from here
        e.preventDefault();

        console.log(employeeRegisteration)

        try {
          let res = await instance.put(`/api/staff/${staffid}/`, {
              "firstname":employeeRegisteration.firstname,
              "lastname":employeeRegisteration.lastname,
              "email":employeeRegisteration.email,
              "phonenum":employeeRegisteration.phonenum,
              "cnic":employeeRegisteration.cnic,
              "address":employeeRegisteration.address,
              "city":employeeRegisteration.city,
              "province":employeeRegisteration.province,
              "country":employeeRegisteration.country,
              "zipcode":employeeRegisteration.zipcode,
          })

          
      }
      catch (e) {
          alert("Invalid data!");
      }

    }


    return(
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

                    <div className="col-span-6 sm:col-span-6">
                        <label className="block text-sm font-medium text-text2" >Change Password</label>
                        <input type="password"
                          name="password"
                          id="password"
                          autoComplete="password"
                          placeholder="Enter password"
                          onChange={(e) => setpassword(e.target.value)}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md "/>
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                        <button
                        className="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-text1 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={handleChangePassword}
                        >
                        Change
                        </button>
                        </div>
                        
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-text2" >First Name</label>
                        <input type="text"
                          name="firstname"
                          id="firstname"
                          autoComplete="given-name"
                          disabled
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
                          disabled
                          value={employeeRegisteration.lastname}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="email" className="block text-sm font-medium text-text2" >Email</label>
                        <input type="email"
                          name="email"
                          id="email"
                          value={employeeRegisteration.email}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="phonenum" className="block text-sm font-medium text-text2" >Phone Number</label>
                        <input type="number"
                          placeholder="03XX-XXXXXXX"
                          min="0"
                          name="phonenum"
                          id="phonenum"
                          value={employeeRegisteration.phonenum}
                          onChange={handleInput}
                          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-secondary rounded-md"/>
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="cnic" className="block text-sm font-medium text-text2" >ID Number</label>
                        <input type="text"
                          name="cnic"
                          id="cnic"
                          disabled
                          value={employeeRegisteration.cnic}
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
                          disabled
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
    );
}

export default Profile