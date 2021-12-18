import React from "react";
import {BsPeople, BsPersonPlus, BsBoxSeam, BsMinecartLoaded,BsHourglassSplit,BsCart, BsPlusCircle, BsFileEarmark} from "react-icons/bs";
import {MdOutlinePrecisionManufacturing} from "react-icons/md";
import {AiOutlineEdit} from "react-icons/ai";
import {GiFactory} from "react-icons/gi";
import {MdAccountBalance} from "react-icons/md"
import {NavLink} from "react-router-dom";




const SubNavBar = (props) =>{
    const depid = localStorage.getItem('depid');
    const type = props.type
    return (
    <div className="h-28 flex flex-row items-end border-b-2 border-solid border-secondary text-xl  ">
        {   (type === 'notification') ?
            <>
            <NavLink to="/dashboard/notifications/purchase" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><MdAccountBalance className="inline-block mr-4 "/></NavLink>
            <NavLink to="/dashboard/notifications/production" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><GiFactory className="inline-block mr-4 "/></NavLink>
            </>:
            (type === 'employees') ?
            <>
            <NavLink to="/dashboard/employees/employeeslist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsPeople className="inline-block mr-4 "/></NavLink>
            <NavLink to="/dashboard/employees/addemployee" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsPersonPlus className="inline-block mr-4 "/></NavLink>
            <NavLink to="/dashboard/employees/updateemployee" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><AiOutlineEdit className="inline-block mr-4 "/></NavLink>
            </>:
            (type === 'purchase') ?
            <>
            {
                (depid === '3') ?
                <>
                    <NavLink to="/dashboard/purchase/purchaselist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsBoxSeam className="inline-block mr-4 "/></NavLink>
                </>:
                <>
                    <NavLink to="/dashboard/purchase/purchaselist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsBoxSeam className="inline-block mr-4 "/></NavLink>
                    <NavLink to="/dashboard/purchase/makepurchase" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsPlusCircle className="inline-block mr-4 "/></NavLink>
                </>
            }
            
            </>:
            (type === 'stock') ?
            <>
            {
                (depid === '3') ?
                <>
                    <NavLink to="/dashboard/stock/productlist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsBoxSeam className="inline-block mr-4 "/></NavLink>
                    <NavLink to="/dashboard/stock/rawmateriallist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsMinecartLoaded className="inline-block mr-4 "/></NavLink>
                </>:
                <>
                    <NavLink to="/dashboard/stock/productlist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsBoxSeam className="inline-block mr-4 "/></NavLink>
                    <NavLink to="/dashboard/stock/rawmateriallist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsMinecartLoaded className="inline-block mr-4 "/></NavLink>
                    <NavLink to="/dashboard/stock/addinventory" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsPlusCircle className="inline-block mr-4 "/></NavLink>
                </>
            }
            
            </>:
            (type === 'sales') ?
            <>
            {
                (depid === '3') ?
                <>
                    <NavLink to="/dashboard/sales/invoicelist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsFileEarmark className="inline-block mr-4 "/></NavLink>

                </>:
                (depid === '5') ?
                <>
                    <NavLink to="/dashboard/sales/customerslist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsPeople className="inline-block mr-4 "/></NavLink>
                    <NavLink to="/dashboard/sales/invoicelist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsFileEarmark className="inline-block mr-4 "/></NavLink>
                </>:
                <>
                    <NavLink to="/dashboard/sales/customerslist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsPeople className="inline-block mr-4 "/></NavLink>
                    <NavLink to="/dashboard/sales/addcustomer" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsPersonPlus className="inline-block mr-4 "/></NavLink>
                    <NavLink to="/dashboard/sales/invoicelist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsFileEarmark className="inline-block mr-4 "/></NavLink>
                    <NavLink to="/dashboard/sales/newcart" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsCart className="inline-block mr-4 "/></NavLink>
                </>
            }
            
            </>:
            (type === 'production') ?
            <>
            <NavLink to="/dashboard/production/underprogress" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsHourglassSplit className="inline-block mr-4 "/></NavLink>
            <NavLink to="/dashboard/production/neworder" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><MdOutlinePrecisionManufacturing className="inline-block mr-4 "/></NavLink>
            </>:
            (type === 'suppliers') ?
            <>
            <NavLink to="/dashboard/suppliers/supplierlist" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsPeople className="inline-block mr-4 "/></NavLink>
            <NavLink to="/dashboard/suppliers/addsuppliers" className= "w-12 px-3 py-2 text-primary hover:text-secondary"><BsPersonPlus className="inline-block mr-4 "/></NavLink>
            </>:
            <>
            </>
        }
    </div>
);
    
}

export default SubNavBar