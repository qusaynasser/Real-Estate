import React, { useContext } from 'react';
import { UserContext } from '../../web/context/User';
import style from '../../../../src/components/dashbord/admin/admin.module.css';
import { Link,Outlet,useNavigate } from 'react-router-dom';

const Admin = () => {
  const { setUserToken,setUserData,setIsAdmin } = useContext(UserContext);
  const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem('userToken');
    setUserToken(null);
    setUserData(null);
    setIsAdmin(false);
    navigate("/");
  }

  return (
    <aside className={`${style.admin}`}>
         <div className={`${style.adminLinks}`}>
            <nav>
                    <Link to="/">Info</Link>
                    <Link to="updateInfo"> Update Data</Link>
                    <Link to="allEstate"> All Estate</Link> 
                    <Link to="allUser"> All User</Link>
                <Link onClick={logout}>Logout</Link>
            </nav>

        </div>
        <div className={`${style.data}`}>
        <Outlet />
      </div>
    </aside>
  );
};

export default Admin;
