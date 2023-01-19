import React from "react";
import AddAdmin from "./AddAdmin";
import Details from "./Details";
import RemoveAdmin from "./RemoveAdmin";


const Dashboard = () => {
  const [renderAdminForm, setRenderAdminForm] = React.useState(0);

  return (
    <div>
      <ul className="nav nav-tabs">
      <li className="nav-item">
          <span className="nav-link active" aria-current="page" href="/dashboard">SQMS | Admin Panel</span>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/dashboard">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Actions</a>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick = {() => {setRenderAdminForm(1)}}>Add admin</button></li>
            <li><button className="dropdown-item" onClick = {() => {setRenderAdminForm(2)}}>Remove Admin</button></li>
          </ul>
        </li>
        <li className="nav-item">
          <button className="nav-link " aria-current="page" >Queue Status</button>
        </li>
      </ul>

      {renderAdminForm === 1 ? <AddAdmin/> : renderAdminForm === 2 ? <RemoveAdmin/> : ""}
      <Details/>

    </div>
  )
}

export default Dashboard;