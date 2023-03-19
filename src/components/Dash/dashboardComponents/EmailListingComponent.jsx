import React from "react";
import "../css/EmailListingComponent.css";
import { constantActions } from '../../../store/constantSlice';
import { useDispatch, useSelector } from "react-redux";
import "../css/EmailListing.css";
import DashFooter from "./DashFooter";

export default function EmailListingComponent() {
  
  const dispatch = useDispatch();
  const companyName = useSelector(state=>state.merchant.CompanyTitle)

  // page titles
  dispatch(constantActions.updatePageTitles(companyName+" . "+"Email Listings"));
  dispatch(constantActions.setCurrentPage("DashEmailListing"));

  const Emails = useSelector(state=>state.emails.emails);


  return (
    <>
      <section className="EmailListingComponent-section">
        <h2>Email Listings</h2>

        <section className="emailing-section">
          <section className="emaillisting-list">
            <table cellPadding={10}>
              <tr className="email-heading">
                <td className="heading-check"><input type="checkbox" name="" id="" /></td>
                <td className="heading-label">select emails</td>
              </tr>


              {
                Emails.map(function(items){
                  return(
                    <tr className="mail" key={items._id}>
                      <td className="heading-check"><input type="checkbox" name="" id="" /></td>
                      <td className="heading-mail">{items.mail}</td>
                    </tr>
                  )
                })
              }

            </table>
          </section>

          <section className="emaillisting-filter">
            <span className="selected">selected 0 mails</span>
            <span className="results">jambgimo@gmail.com</span>
            <br />
            <input type="search" name="" placeholder="search for email" id="" />
            <span>
              <button>search</button>
            </span>
            <span>
              <button className="update">update</button>
              <button className="delete">delete</button>
            </span>
          </section>
            
        </section>
        <DashFooter/>
      </section>
    </>
  );
}
