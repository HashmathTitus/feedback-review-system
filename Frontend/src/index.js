import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from '../src/component/Header' 
import Footer from '../src/component/Footer'
import { store } from "./redux/index";
import { Provider } from "react-redux";

import Review from "./page/Review"
import ReviewForm from "./page/formreview"
import ReviewList from "./page/listreview"
import ReviewView from "./page/reviewview"
import UserReview from "./page/Userreviewlist"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Review />} />
    
      <Route path="review" element={<Review/>} />
      <Route path="/formreview" element={<ReviewForm/>}/>
      <Route path="/listreview" element={<ReviewList/>}/>
      <Route path="/reviewview" element={<ReviewView/>}/>
      <Route path="//Userreviewlist" element={<UserReview/>}/>
      
    </Route>
  
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


