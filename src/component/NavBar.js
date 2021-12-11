import React from "react";
import {BsPeopleFill} from "react-icons/bs"
import {RiNotification4Fill , RiHome2Fill, RiUserFill} from "react-icons/ri"
import {MdAccountBalance} from "react-icons/md"
import {FaWarehouse, FaTruck} from "react-icons/fa"
import {GiFactory} from "react-icons/gi"
import {AiOutlineStock, AiOutlineLogout} from "react-icons/ai"
import PageBox from "./PageBox";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
    <div >
        <div className= "flex flex-col justify-start w-56 h-screen bg-primary text-text1 text-2xl ">
            <PageBox />
            <NavLink to="/dashboard/home" className= "flex flex-row items-center w-full px-3 py-2 hover:bg-secondary" ><RiHome2Fill className="inline-block mr-4 "/>Home</NavLink>
            <NavLink to="/dashboard/profile" className= "flex flex-row items-center w-full px-3 py-2 hover:bg-secondary" ><RiUserFill className="inline-block mr-4 "/>Profile</NavLink>
            <NavLink to="/dashboard/notifications" className= "flex flex-row items-center w-full px-3 py-2 hover:bg-secondary" ><RiNotification4Fill className="inline-block mr-4 "/>Notifications</NavLink>
            <NavLink to="/dashboard/employees/employeeslist" className= "flex flex-row items-center w-full px-3 py-2 hover:bg-secondary" ><BsPeopleFill className="inline-block mr-4 "/>Employees</NavLink>
            <NavLink to="/dashboard/accounts"className= "flex flex-row items-center w-full px-3 py-2 hover:bg-secondary" ><MdAccountBalance className="inline-block mr-4 "/>Accounts</NavLink>
            <NavLink to="/dashboard/stock/productlist" className= "flex flex-row items-center w-full px-3 py-2 hover:bg-secondary" ><FaWarehouse className="inline-block mr-4 "/>Stock</NavLink>
            <NavLink to="/dashboard/sales/customerslist" className= "flex flex-row items-center w-full px-3 py-2 hover:bg-secondary" ><AiOutlineStock className="inline-block mr-4 "/>Sales</NavLink>
            <NavLink to="/dashboard/production/underprogress" className= "flex flex-row items-center w-full px-3 py-2 hover:bg-secondary" ><GiFactory className="inline-block mr-4 "/>Production</NavLink>
            <NavLink to="/dashboard/suppliers/supplierlist" className= "flex flex-row items-center w-full px-3 py-2 hover:bg-secondary" ><FaTruck className="inline-block mr-4 "/>Suppliers</NavLink>
            <NavLink to="/" className= "flex flex-row items-center w-full px-3 py-2 hover:bg-secondary" ><AiOutlineLogout className="inline-block mr-4 "/>Log Out</NavLink>
        </div>
    </div>
    );

}

export default NavBar;