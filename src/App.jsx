import React, {  useContext, useEffect, useState } from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import WebLayout from './layout/WebLayout';
import Login from './components/web/login/Login';
import Register from './components/web/register/Register';
import Home from './components/web/home/Home';
import {UserContext} from './components/web/context/User';
import AddState from './components/web/addState/AddState';
import Profile from './components/web/profile/Profile';
import UserInfo from './components/web/profile/UserInfo';
import RecentEstate from './components/web/recentEstates/RecentEstate';
import MyEstate from './components/web/profile/MyEstate';
import DetalisEstate from './components/web/displayEstate/DetalisEstate';
import UpdateInfo from './components/web/profile/UpdateInfo';
import SeeAllHouse from './components/web/house/SeeAllHouse';
import SeeAllLand from './components/web/land/SellAllLand';
import ContactUs from './components/web/contact/ContactUs';
import ResultSearch from './components/web/searchResult/ResultSearch';
import SearchOnCity from './components/web/searchResult/SearchOnCity';
import SeeAllApartment from './components/web/apartment/SeeAllApartment';
import SeeAllStore from './components/web/store/SeeAllStore';
import SeeAllChalet from './components/web/chalet/SeeAllChalet';
import AddFeedback from './components/web/addFeedback/AddFeedback';
import Intersting from './components/web/profile/Intersting';
// import Admin from './components/dashbord/admin/Admin';
// import UserList from './components/dashbord/admin/UserList';
// import AllEstate from './components/dashbord/admin/AllEstate';
// import DashbordLayout from './layout/DashbordLayout';
import UpdateMyEstate from './components/web/profile/UpdateMyEstate';
import FormUpdateEstate from './components/web/formUpdateEstate/FormUpdateEstate';
import GridLoader from "react-spinners/ClipLoader";
import Auth from '../protectedRoute/Auth';
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
// import DetalisEstateAdmin from './components/dashbord/admin/DetalisEstateAdmin';

export default function App() {
  let {setUserToken,setUserId}=useContext(UserContext);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },3000)
  },[])

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    const storedUserId = localStorage.getItem("userId");

    // startLoading();
    if (storedToken && storedUserId) {
      setUserToken(storedToken);
      setUserId(storedUserId);
    }
  }, [setUserToken, setUserId]);

  
  const router = createBrowserRouter([
    // {
    //   path:"/admin",
    //   element:<DashbordLayout/>,
    //   children:[
    //     {
    //       path:"/admin",
    //       element:<Admin/>,
    //       children:[
    //         {
    //           index:true,
    //           element:<UserInfo/>
    //         },
    //         {
    //           path:"updateInfo",
    //           element:<UpdateInfo/>
    //         },
    //         {
    //           path:"allEstate",
    //           element:<AllEstate/>,
    //         },
    //         {
    //           path:"ditalStateAdmin/:EstateId",
    //           element:<DetalisEstateAdmin/>
    //         },
    //         {
    //           path:"allUser",
    //           element:<UserList/>
    //         },
    //       ]
    //     },
        
    //   ]
    // },
    {
      path: "/",
      element: <WebLayout/>,
      children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'login',
        element:
        <Auth>
        <Login/>
        </Auth>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"addState",
        element:<AddState/>,
      },
      {
        path:"displayEstate",
        element:<RecentEstate/>
      },
      {
        path:"ditalState/:EstateId",
        element:<DetalisEstate/>
      },
      {
        path:"allHouse",
        element:<SeeAllHouse/>
      },
      {
        path:"allLands",
        element:<SeeAllLand/>
      },
      {
        path:"contact",
        element:<ContactUs/>
      },
      {
        path:"allApartments",
        element:<SeeAllApartment/>
      },
      {
        path:"allStores",
        element:<SeeAllStore/>
      },
      {
        path:"allChalets",
        element:<SeeAllChalet/>
      },
      {
        path:"searchResults",
        element:<ResultSearch/>
      },
      {
        path:"searchCity",
        element:<SearchOnCity/>
      },
      {
        path:"addFeedback",
        element:<AddFeedback/>
      },
      {
        path:"profile",
        element:
        <ProtectedRoute>
        <Profile/>,
        </ProtectedRoute>,
        children:[
          {
            index:true,
            element:<UserInfo/>
          },
          
          {
            path:"myEstate",
            element:<MyEstate/>,
            children:[
              {
                path:"ditalState/:EstateId",
                element:<DetalisEstate/>
              },
            ]
          },
          {
            path:"updateInfo",
            element:<UpdateInfo/>
          },
          {
            path:"interst",
            element:<Intersting/>
          },
          {
            path:"updateEstate",
            element:<UpdateMyEstate/>,
          },
        ]
      },
      {
        path:"/formUpdate/:EstateId",
        element:<FormUpdateEstate/>
      },
    ]
    },
  ]);
  return (
    <>
    {loading?
    <div className="spiners">
      <GridLoader
      color={"#36d7b7"} loading={loading} size={200}  aria-label="Loading Spinner" data-testid="loader"/>
      </div>
      : 
      <RouterProvider router={router} />
    }
    </>
  )
}
