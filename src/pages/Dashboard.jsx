import { NavLink, Outlet, useLocation } from "react-router-dom"

function Dashboard(){
    const location = useLocation()
    console.log(location)

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