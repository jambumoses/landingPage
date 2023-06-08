import React, { useState } from "react";
import $ from "jquery";
import axios from "axios";
import "../css/CategoriesComponent.css";
import { constantActions } from "../../../store/constantSlice";
import { useDispatch, useSelector } from "react-redux";
import DashFooter from "./DashFooter";

export default function CategoriesComponent() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.merchant.CompanyTitle);

  // page titles
  dispatch(
    constantActions.updatePageTitles(companyName + " . " + "Categories")
  );
  dispatch(constantActions.setCurrentPage("DashCategories"));

  const DashCategories = useSelector((state) => state.categories.categories);

  const [showInputs, setShowInputs] = useState("hide");
  const [inputMode, setInputMode] = useState("add"); // add or update

  if (showInputs === "hide") {
    $("#slideform").hide();
  } else {
    $("#slideform").show();
  }
  

  const [CategoryId, setCategoryId] = useState("");
  const [Category, setCategory] = useState("");
  const [CategorySlug, setCategorySlug] = useState("");
  const [CategoryType, setCategoryType] = useState("");
  const [CategoryDescription, setCategoryDescription] = useState("");
  const [CategoryMainImage, setCategoryMainImage] = useState("");

  function showAdd(data = null) {
    setShowInputs("show");
    if (showInputs === "hide") {
      $("#slideform").slideToggle("slow");
    } else {
      $("#slideform").slideToggle("slow");
    }

    if (data !== null) {
      setInputMode("update");

      setCategoryId(data._id);
      setCategory(data.category);
      setCategorySlug(data.slug);
      setCategoryType(data.type);
      setCategoryDescription(data.description);
      //setCategoryMainImage(data.images.url)
      setCategoryMainImage(
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fimagetag%2F12651%2F2%2Fl%2FNew-2020-Rolls-Royce-Culllinan-Black-Badge.jpg&tbnid=WBMnJSCERdwbbM&vet=12ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-..i&imgrefurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fnew-vehicle-2020-rolls-royce-culllinan-black-badge-c-12651%2F&docid=sypvlQuzP7_psM&w=1920&h=1280&q=rolls%20royce%20black%20badge%202020&client=opera&ved=2ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-"
      );
    } else {
      // reset states
      // for new data
      setInputMode("add");

      //setCategoryId("")
      setCategory("");
      setCategorySlug("");
      setCategoryType("");
      setCategoryDescription("");
      setCategoryMainImage(
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fimagetag%2F12651%2F2%2Fl%2FNew-2020-Rolls-Royce-Culllinan-Black-Badge.jpg&tbnid=WBMnJSCERdwbbM&vet=12ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-..i&imgrefurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fnew-vehicle-2020-rolls-royce-culllinan-black-badge-c-12651%2F&docid=sypvlQuzP7_psM&w=1920&h=1280&q=rolls%20royce%20black%20badge%202020&client=opera&ved=2ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-"
      );
    }
  }

  function saveNewEntry() {
    // adding new data
    if (inputMode == "add") {
      let information = {
        //id: CategoryId,
        category: Category,
        slug: CategorySlug,
        type: CategoryType,
        description: CategoryDescription,
        mainImage: CategoryMainImage,
      };

      const Config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      console.log(information)
      if (
        information.category !== "" &&
        information.slug !== "" &&
        information.type !== "" &&
        information.description !== "" &&
        information.mainImage !== ""
      ) {
        // posting data to API
        axios
          .post("http://localhost:3500/arafat/api/categories/", information, {
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
        id: CategoryId,
        category: Category,
        slug: CategorySlug,
        type: CategoryType,
        description: CategoryDescription,
        mainImage: CategoryMainImage,
      };

      if (
        information.id !== "" &&
        information.category !== "" &&
        information.slug !== "" &&
        information.type !== "" &&
        information.description !== "" &&
        information.mainImage !== ""
      ) {
        // posting data to API
        axios({
          method: "put",
          url: "http://localhost:3500/arafat/api/categories/",
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

  function DeleteCategory(_id) {
    axios
      .delete("http://localhost:3500/arafat/api/categories/" + _id)
      .then(() => alert("category deleted"));
  }

  return (
    <>
      <section className="CategoriesComponent-section">
        <div className="ProductComponent-head">
          <h2>categories</h2>
          <div className="ProductComponent-filter">
            <button onClick={() => showAdd()} className="edit" type="button">
              <i
                style={{
                  marginRight: "10px",
                  fontSize: "13px",
                  color: "white",
                }}
                className="fa fa-add"
              ></i>{" "}
              add category
            </button>
            <span className="ProductComponent-filter-search">
              <input
                type="search"
                placeholder="Search For category"
                name=""
                id=""
              />
              <span>
                <i className="fa fa-search"></i>
              </span>
            </span>
          </div>
        </div>

        <div id="slideform">
          <form className="addData">
            <table border={0} cellPadding={5}>
              <tr>
                <td>category</td>
                <td>
                  <input
                    onChange={(event) => setCategory(event.target.value)}
                    value={Category}
                    type="text"
                    name=""
                    id=""
                  />
                </td>
              </tr>

              <tr>
                <td>slug</td>
                <td>
                  <input
                    onChange={(event) => setCategorySlug(event.target.value)}
                    value={CategorySlug}
                    type="text"
                    name=""
                    id=""
                  />
                </td>
              </tr>

              <tr>
                <td>description</td>
                <td>
                  <textarea
                    onChange={(event) =>
                      setCategoryDescription(event.target.value)
                    }
                    value={CategoryDescription}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td>type</td>
                {/* <td><input type="text" name="" id="" /></td> */}
                <td>
                  <select
                    onMouseMove={(event) => setCategoryType(event.target.value)}
                    value={CategoryType}
                    name=""
                    id=""
                  >
                    <option value="normal">Normal</option>
                    <option value="TodayAd">TodayAd</option>
                  </select>
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

        <hr />
        <section className="products-section">
          <div className="products-section-item">
            <span>image</span>
            <span>category</span>
            <span>type</span>
            <span>slug</span>
            <span>decription</span>
            <span>
              {/*               <button>edit</button>
              <button>delete</button> */}
            </span>
          </div>

          {DashCategories.map((items) => {
            return (
              <div
                className="products-section-item products-section-item-main"
                key={items._id}
                style={{ alignItems: "center" }}
              >
                <span className="products-section-item-image">
                  <img src={items.images.url} alt="" />
                </span>
                <span className="products-section-item-name">
                  {items.category}
                </span>
                <span className="products-section-item-category">
                  {items.type}
                </span>
                <span className="products-section-item-slug">{items.slug}</span>
                <span className="products-section-item-description">
                  {items.description.slice(0, 100)} ...
                </span>

                <span className="products-section-item-buttons">
                  <button
                    onClick={() => showAdd(items)}
                    className="edit"
                    type="button"
                  >
                    <i
                      style={{
                        marginRight: "10px",
                        fontSize: "13px",
                        color: "white",
                      }}
                      className="fa fa-pen-to-square"
                    ></i>{" "}
                  </button>
                  <button
                    onClick={() => DeleteCategory(items._id)}
                    className="delete"
                    type="button"
                  >
                    <i
                      style={{
                        marginRight: "10px",
                        fontSize: "13px",
                        color: "white",
                      }}
                      className="fa fa-trash"
                    ></i>{" "}
                  </button>
                </span>
              </div>
            );
          })}
        </section>
        <DashFooter />
      </section>
    </>
  );
}
