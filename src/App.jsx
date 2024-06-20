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
import ContactUs from './components/web/contact/ContactUs';
import ResultSearch from './components/web/searchResult/ResultSearch';
import Dashbord from './components/dashbord/Dashbord';
import Properties from './components/dashbord/properties/Properties';
import SearchOnCity from './components/web/searchResult/SearchOnCity';
import SeeAllApartment from './components/web/apartment/SeeAllApartment';
import SeeAllStore from './components/web/store/SeeAllStore';
import SeeAllChalet from './components/web/chalet/SeeAllChalet';
import AddFeedback from './components/web/addFeedback/AddFeedback';
import Intersting from './components/web/profile/Intersting';
// import { LoadingContext, LoadingContextProvider } from './components/web/context/Loading';
// import Loading from './components/web/loading/Loading';

export default function App() {
  let {setUserToken,setUserId}=useContext(UserContext);
  // const { startLoading, endLoading, isLoading} = useContext(LoadingContext);
  
  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    const storedUserId = localStorage.getItem("userId");

    // startLoading();
    if (storedToken && storedUserId) {
      setUserToken(storedToken);
      setUserId(storedUserId);
    }

    // Simulate resource loading
    // setTimeout(() => {
    //   endLoading();
    // }, 3000);
  }, [setUserToken, setUserId]);

  
  const router = createBrowserRouter([
    {
      path:"/dash",
      element:<WebLayout/>,
      children:[
        {
          path:"dashboard",
          element:<Dashbord/>,
          children:[
            {
              path:"properties",
              element:<Properties/>
            }
          ]
        },
        
      ]
    },
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
            ]
          },
          {
            path:"updateInfo",
            element:<UpdateInfo/>
          },
          {
            path:"interst",
            element:<Intersting/>
          }
        ]
      }
    ]
    },
  ]);
  return (
    
     <RouterProvider router={router} />
    
  )
}
