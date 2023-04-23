import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import "../css/BrandsComponent.css";
import { constantActions } from "../../../store/constantSlice";
import { useEffect } from "react";
import DashFooter from "./DashFooter";

export function showAdd(data = null) {
  /* const done = "notupdated";
  
  $("#slideform").slideToggle("slow");
  const information={
    count: "gift",
    name: "gift",
    description: "gift", 
    image: "gift",
    link: "gift"
  }

  
  $("#saveNewEntry").on("click",function(){
    if( 
      information.count !== "" && 
      information.name !== "" && 
      information.description !== "" && 
      information.image !== "" && 
      information.link !== ""
    ){
      done = "updated";
      return {status: done,newData: information};
    }else{
      done = "notupdated";
      return {status: done,newData: ""};
    }

  }) */
}

export default function BrandsComponent() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.merchant.CompanyTitle);

  // page titles
  dispatch(constantActions.updatePageTitles(companyName + " . " + "Brands"));
  dispatch(constantActions.setCurrentPage("DashBrands"));

  const Dashbrands = useSelector((state) => state.brands.brands.brands);

  const [showInputs, setShowInputs] = useState("hide");
  const [inputMode, setInputMode] = useState("add"); // add or update

  if (showInputs === "hide") {
    $("#slideform").hide();
  } else {
    $("#slideform").show();
  }

  const [brandsId, setBrandsId] = useState("");
  const [brandsCount, setBrandsCount] = useState("");
  const [brandsImage, setBrandsImage] = useState("");
  const [brandsName, setBrandsName] = useState("");
  const [brandsDescription, setBrandsDescription] = useState("");
  const [brandsLink, setBrandsLink] = useState("");
  

  function showAdd(data = null) {
    setShowInputs("show");
    if (showInputs === "hide") {
      $("#slideform").slideToggle("slow");
    } else {
      $("#slideform").slideToggle("slow");
    }

    if (data !== null) {
      setInputMode("update");

      setBrandsId(data._id);
      setBrandsCount(data.count);
      setBrandsName(data.name);
      //setBrandsImage(data.image);
      setBrandsImage(
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fimagetag%2F12651%2F2%2Fl%2FNew-2020-Rolls-Royce-Culllinan-Black-Badge.jpg&tbnid=WBMnJSCERdwbbM&vet=12ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-..i&imgrefurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fnew-vehicle-2020-rolls-royce-culllinan-black-badge-c-12651%2F&docid=sypvlQuzP7_psM&w=1920&h=1280&q=rolls%20royce%20black%20badge%202020&client=opera&ved=2ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-"
      );
      setBrandsDescription(data.description);
      setBrandsLink(data.link);
    } else {
      // reset states
      // for new data
      setInputMode("add");

      setBrandsId("");
      setBrandsCount("");
      setBrandsName("");
      setBrandsImage(
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fimagetag%2F12651%2F2%2Fl%2FNew-2020-Rolls-Royce-Culllinan-Black-Badge.jpg&tbnid=WBMnJSCERdwbbM&vet=12ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-..i&imgrefurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fnew-vehicle-2020-rolls-royce-culllinan-black-badge-c-12651%2F&docid=sypvlQuzP7_psM&w=1920&h=1280&q=rolls%20royce%20black%20badge%202020&client=opera&ved=2ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-"
      );
      setBrandsDescription("");
      setBrandsLink("");
    }
  }

  function saveNewEntry() {
    // adding new data
    if (inputMode == "add") {
      let information = {
        count: brandsCount,
        name: brandsName,
        description: brandsDescription,
        image: brandsImage,
        link: brandsLink,
      };
      const Config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      if (
        information.count !== "" &&
        information.name !== "" &&
        information.description !== "" &&
        information.image !== "" &&
        information.link !== ""
      ) {
        // posting data to API
        axios
          .post("http://localhost:3500/arafat/api/brands/", information, {
            Config,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // end of request
      }
    } // end of add function

    // updating data
    if (inputMode == "update") {
      let information = {
        id: brandsId,
        count: brandsCount,
        name: brandsName,
        description: brandsDescription,
        image: brandsImage,
        link: brandsLink,
      };

      if (
        information.id !== "" &&
        information.count !== "" &&
        information.name !== "" &&
        information.description !== "" &&
        information.image !== "" &&
        information.link !== ""
      ) {
        // posting data to API
        axios({
          method: "put",
          url: "http://localhost:3500/arafat/api/brands",
          data: information,
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // end of request
      }
    } //end of update
  } // end of function

  function DeleteBrand(_id) {
    axios
      .delete("http://localhost:3500/arafat/api/brands/" + _id)
      .then(() => alert("brand deleted"));
  }

  function DashBrandItem({ data }) {
    return (
      <div className="BrandsDash-item">
        <span className="BrandsDash-item-count">{data.count}</span>
        <span className="BrandsDash-item-thumbnail">
          <img src={data.image} alt="" />
        </span>
        <span className="BrandsDash-item-title">{data.name}</span>
        <span className="BrandsDash-item-description">{data.description}</span>
        <span className="BrandsDash-item-link">{data.link}</span>
        <span className="BrandsDash-item-buttons">
          <button onClick={() => showAdd(data)} className="edit" type="button">
            <i
              style={{ marginRight: "10px", fontSize: "13px", color: "white" }}
              className="fa fa-pen-to-square"
            ></i>{" "}
            edit
          </button>
          <button
            onClick={() => DeleteBrand(data._id)}
            className="delete"
            type="button"
          >
            <i
              style={{ marginRight: "10px", fontSize: "13px", color: "white" }}
              className="fa fa-trash"
            ></i>{" "}
            delete
          </button>
        </span>
      </div>
    );
  }

  return (
    <>
      <section className="BrandsComponent-section">
        <div className="BrandsComponent-section-head">
          <h2>Brands</h2>
          <button onClick={() => showAdd()} type="button">
            <i
              className="fa fa-add"
              style={{ color: "white", fontSize: "13px" }}
            ></i>{" "}
            add brand
          </button>
        </div>

        <div id="slideform">
          <form className="addData">
            <table border={0} cellPadding={5}>
              <tr>
                <td>count</td>
                <td>
                  <input
                    onChange={(event) => setBrandsCount(event.target.value)}
                    value={brandsCount}
                    type="text"
                    name="brandCount"
                    id=""
                  />
                </td>
              </tr>

              <tr>
                <td>name</td>
                <td>
                  <input
                    onChange={(event) => setBrandsName(event.target.value)}
                    value={brandsName}
                    type="text"
                    name="brandName"
                    id=""
                  />
                </td>
              </tr>

              <tr>
                <td>description</td>
                <td>
                  <textarea
                    onChange={(event) =>
                      setBrandsDescription(event.target.value)
                    }
                    value={brandsDescription}
                    name="brandDescription"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td>link</td>
                <td>
                  <input
                    onChange={(event) => setBrandsLink(event.target.value)}
                    value={brandsLink}
                    type="text"
                    name="brandLink"
                    id=""
                  />
                </td>
              </tr>
            </table>

            <div className="addimage">
              <span>drag drop</span>
              <input type="file" name="" id="" />
            </div>

            <div className="addsave">
              <button
                onClick={() => saveNewEntry()}
                id="saveNewEntry"
                type="button"
              >
                save
              </button>
            </div>
          </form>
        </div>

        <section>
          <hr />
          <div className="BrandsDash-container">
            {Dashbrands.map((item) => {
              return <DashBrandItem key={item._id} data={item} />;
            })}
          </div>
        </section>
        <DashFooter />
      </section>
    </>
  );
}
