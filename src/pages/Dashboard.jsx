import { NavLink, Outlet } from "react-router-dom"

function Dashboard(){
    return(
        <div id="dashboard">
            <div id="sidebar">
                <NavLink to={"profile"} >Profile</NavLink>
                <NavLink to={"payments"} >Payments</NavLink>
            </div>
            <Outlet/>   {/* /// use this to show children routes of dashboard: profile, payments*/ }
        </div>
    )
}

export default Dashboard