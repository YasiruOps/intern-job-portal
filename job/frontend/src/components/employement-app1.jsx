import React from "react";
import "../CSS/employement-app1.css";
import Header from "./header";

export default function employement_app1() {
  return (
    <div className="row">
      <Header />

        <div className="employement-appform col-6">

            <p className="timehire-tag">Time hire the best</p>
            <hr className="timehire-hr" />

           <div className="empform1 row">
                <div className="formlname col-xxl-6"><p className="empacc">Employer Account Name</p></div>
                <div className="formlname col-xxl-6"> <input type="email" className="form-control"/></div>
                <div className="formlname col-xxl-6"><p className="empacc">Company Name</p></div>
                <div className="formlname col-xxl-6"><input type="text" className="form-control"/></div>
                <div className="formlname col-xxl-6"><p className="empacc">Position calling for</p></div>
                <div className="formlname col-xxl-6"><input type="text" className="form-control"/></div>
                <div className="formlname col-xxl-6"><p className="empacc">Applicaiton open Date</p></div>
                <div className="formlname col-xxl-6"><input type="text" className="form-control"/></div>
                <div className="formlname col-xxl-6"><p className="empacc">Applicaiton closing Date</p></div>
                <div className="formlname col-xxl-6"><input type="text" className="form-control"/></div>
             </div>

            <div className="empform1btnline">
                <button type="button" class="btn addapplicaiton1btn">Add applicaiton</button>
                <button type="button" class="btn publishbtn">Publish</button>
             </div>
        </div>
    </div>
  );
}