import React, {  useContext, useEffect } from 'react'
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
import SearchSeeAll from './components/web/land/SearchSeeAll';
import ContactUs from './components/web/contact/ContactUs';

export default function App() {
  let {setUserToken,setUserId}=useContext(UserContext);

  useEffect(()=>{
    const storedToken = localStorage.getItem("userToken");
    const storedUserId = localStorage.getItem("userId");
    if(storedToken)
    {
      setUserToken(storedToken);
      setUserId(storedUserId);
      // localStorage.removeItem("userToken");
      // localStorage.removeItem("userId");
    }
  },[]);

  const router = createBrowserRouter([
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
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"addState",
        element:<AddState/>
      },
      {
        path:"displayEstate",
        element:<RecentEstate/>
      },
      // {
      //   path:"displayHouse",
      //   element:<DisplayHouse/>
      // },
      {
        path:"ditalState/:EstateId",
        element:<DetalisEstate/>
      },
      {
        path:"allHouse",
        element:<SeeAllHouse/>
      },
      {
        path:"allLand",
        element:<SeeAllLand/>,
        children:[
          {
            path:"searchSeeAll",
            element:<SearchSeeAll/>
          }
        ]
      },
      {
        path:"contact",
        element:<ContactUs/>
      },
      {
        path:"profile",
        element:<Profile/>,
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
              // {
              //   path:"myEstate/:EstateId",
              //   element:<MyEstate/>,
              // }
            ]
          },
          {
            path:"updateInfo",
            element:<UpdateInfo/>
          }
        ]
      }
    ]
    },
  ]);
  return (
    // <UserContextProvider>
    <RouterProvider router={router} />
    // </UserContextProvider>
  )
}
