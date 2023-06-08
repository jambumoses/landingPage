import React, { useState } from "react";
import $ from "jquery";
import "../css/ProductsComponent.css";
import { constantActions } from "../../../store/constantSlice";
import { useDispatch, useSelector } from "react-redux";
import DashFooter from "./DashFooter";
import { showAdd } from "./BrandsComponent";
import axios from "axios";

export default function ProductsComponent() {
  const dispatch = useDispatch();
  const companyName = useSelector((state) => state.merchant.CompanyTitle);

  // page titles
  dispatch(constantActions.updatePageTitles(companyName + " . " + "Products"));
  dispatch(constantActions.setCurrentPage("DashProducts"));

  const Dashproducts = useSelector((state) => state.products.products);

  const [showInputs, setShowInputs] = useState("hide");
  const [inputMode, setInputMode] = useState("add"); // add or update

  if (showInputs === "hide") {
    $("#slideform").hide();
  } else {
    $("#slideform").show();
  }

  const [Product_id, setProduct_id] = useState("");
  const [Product_name, setProduct_name] = useState("");
  const [Product_category, setProduct_category] = useState("");
  const [Product_slug, setProduct_slug] = useState("");
  const [Product_description, setProduct_description] = useState("");
  const [Product_quantity, setProduct_quantity] = useState("");
  const [Product_mainImage, setProduct_mainImage] = useState("");
  const [Product_detailed_imagesId, setProduct_detailed_imagesId] =
    useState("");
  const [Product_detailed_imagesAlt, setProduct_detailed_imagesAlt] =
    useState("");
  const [Product_detailed_imagesURL, setProduct_detailed_imagesURL] =
    useState("");
  const [Product_priceRaw, setProduct_priceRaw] = useState("");
  const [Product_priceFormated, setProduct_priceFormated] = useState("");
  const [Product_subtotalRaw, setProduct_subtotalRaw] = useState("");
  const [
    Product_subtotalFormatedWithSymbol,
    setProduct_subtotalFormatedWithSymbol,
  ] = useState("");

  function showAdd(data = null) {
    setShowInputs("show");
    if (showInputs === "hide") {
      $("#slideform").slideToggle("slow");
    } else {
      $("#slideform").slideToggle("slow");
    }

    if (data !== null) {
      setInputMode("update");

      setProduct_id(data._id);
      setProduct_name(data.name);
      setProduct_category(data.category);
      setProduct_slug(data.slug);
      setProduct_description(data.description);
      setProduct_quantity(data.quantity);
      setProduct_mainImage(data.images.url)
      setProduct_detailed_imagesId(data.images.detailed_images.id);
      setProduct_detailed_imagesAlt(data.images.detailed_images.alt);
      setProduct_detailed_imagesURL(data.images.detailed_images.url);
      setProduct_detailed_imagesURL(data.images.detailed_images.url);
      setProduct_priceRaw(data.initialPrice.raw);
      setProduct_priceFormated(data.initialPrice.formatted_with_symbol);
      setProduct_subtotalRaw(data.subtotal.raw);
      setProduct_subtotalFormatedWithSymbol(
        data.subtotal.formatted_with_symbol
      );
    } else {
      // reset states
      // for new data
      setInputMode("add");

      //setProduct_id(data._id)
      setProduct_name("");
      setProduct_category("");
      setProduct_slug("");
      setProduct_description("");
      setProduct_quantity("");
      //setProduct_mainImage(data.images.url)
      setProduct_mainImage(
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fimagetag%2F12651%2F2%2Fl%2FNew-2020-Rolls-Royce-Culllinan-Black-Badge.jpg&tbnid=WBMnJSCERdwbbM&vet=12ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-..i&imgrefurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fnew-vehicle-2020-rolls-royce-culllinan-black-badge-c-12651%2F&docid=sypvlQuzP7_psM&w=1920&h=1280&q=rolls%20royce%20black%20badge%202020&client=opera&ved=2ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-"
      );
      //setProduct_detailed_imagesId("");
      //setProduct_detailed_imagesAlt("");
      setProduct_detailed_imagesURL(
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fimagetag%2F12651%2F2%2Fl%2FNew-2020-Rolls-Royce-Culllinan-Black-Badge.jpg&tbnid=WBMnJSCERdwbbM&vet=12ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-..i&imgrefurl=https%3A%2F%2Fwww.rolls-roycemotorcarsphiladelphia.com%2Fnew-vehicle-2020-rolls-royce-culllinan-black-badge-c-12651%2F&docid=sypvlQuzP7_psM&w=1920&h=1280&q=rolls%20royce%20black%20badge%202020&client=opera&ved=2ahUKEwiLns6Rr7_-AhVjkScCHXWeDK8QMyg2egQIARA-"
      );
      setProduct_priceRaw(0);
      setProduct_priceFormated("");
      setProduct_subtotalRaw(0);
      setProduct_subtotalFormatedWithSymbol("");
    }
  }

  function saveNewEntry() {
    // adding new data
    if (inputMode == "add") {
      let information = {
        //id: Product_id,
        name: Product_name,
        category: Product_category,
        slug: Product_slug,
        description: Product_description,
        quantity: Product_quantity,
        mainImage: Product_mainImage,
        detailed_imagesId: "Product_detailed_imagesId",
        detailed_imagesAlt: "Product_detailed_imagesAlt",
        detailed_imagesURL: Product_detailed_imagesURL,
        priceRaw: Product_priceRaw,
        priceFormated: Product_priceFormated,
        subtotalRaw: Product_subtotalRaw,
        subtotalFormatedWithSymbol: Product_subtotalFormatedWithSymbol,
      };

      const Config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      if (
        information.name !== "" &&
        information.category !== "" &&
        information.slug !== "" &&
        information.description !== "" &&
        information.quantity !== "" &&
        information.mainImage !== "" &&
        information.detailed_imagesId !== "" &&
        information.detailed_imagesAlt !== [] &&
        information.detailed_imagesURL !== "" &&
        information.priceRaw !== "" &&
        information.priceFormated !== "" &&
        information.subtotalRaw !== "" &&
        information.subtotalFormatedWithSymbol !== ""
      ) {
        // posting data to API
      
        axios
          .post("http://localhost:3500/arafat/api/products/", information, {
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
        id: Product_id,
        name: Product_name,
        category: Product_category,
        slug: Product_slug,
        description: Product_description,
        quantity: Product_quantity,
        mainImage: Product_mainImage,
        detailed_imagesId: "Product_detailed_imagesId",
        detailed_imagesAlt: "Product_detailed_imagesAlt",
        detailed_imagesURL: Product_detailed_imagesURL,
        priceRaw: Product_priceRaw,
        priceFormated: Product_priceFormated,
        subtotalRaw: Product_subtotalRaw,
        subtotalFormatedWithSymbol: Product_subtotalFormatedWithSymbol,
      };

      if (
        information.id !== "" &&
        information.name !== "" &&
        information.category !== "" &&
        information.slug !== "" &&
        information.description !== "" &&
        information.quantity !== "" &&
        information.mainImage !== "" &&
        information.detailed_imagesId !== "" &&
        information.detailed_imagesAlt !== [] &&
        information.detailed_imagesURL !== "" &&
        information.priceRaw !== "" &&
        information.priceFormated !== "" &&
        information.subtotalRaw !== "" &&
        information.subtotalFormatedWithSymbol !== ""
      ) {
        // posting data to API
        console.log(information);
        axios({
          method: "put",
          url: "http://localhost:3500/arafat/api/products/",
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

  function DeleteProduct(_id) {
    axios
      .delete("http://localhost:3500/arafat/api/products/" + _id)
      .then(() => alert("product deleted"));
  }

  function DashProductItem({ data }) {
    return (
      <div
        className="products-section-item products-section-item-main"
        style={{ alignItems: "center" }}
      >
        <span className="products-section-item-image">
          <img src={data.images.url} alt="" />
        </span>
        <span className="products-section-item-name">{data.name}</span>
        <span className="products-section-item-category">{data.category}</span>
        <span className="products-section-item-slug">{data.slug}</span>
        <span className="products-section-item-description">
          {data.description.slice(0, 100)} ...
        </span>
        <span className="products-section-item-price">
          {data.initialPrice.formatted_with_symbol}
        </span>
        <span className="products-section-item-buttons">
          <button onClick={() => showAdd(data)} className="edit" type="button">
            <i
              style={{ marginRight: "10px", fontSize: "13px", color: "white" }}
              className="fa fa-pen-to-square"
            ></i>{" "}
          </button>
          <button
            onClick={() => DeleteProduct(data._id)}
            className="delete"
            type="button"
          >
            <i
              style={{ marginRight: "10px", fontSize: "13px", color: "white" }}
              className="fa fa-trash"
            ></i>{" "}
          </button>
        </span>
      </div>
    );
  }

  /* $("#slideform").hide(); */

  return (
    <section className="ProductComponent-section">
      <div className="ProductComponent-head">
        <h2>products</h2>
        <div className="ProductComponent-filter">
          <button onClick={() => showAdd()} className="edit" type="button">
            <i
              style={{ marginRight: "10px", fontSize: "13px", color: "white" }}
              className="fa fa-add"
            ></i>{" "}
            add product
          </button>
          <span className="ProductComponent-filter-search">
            <input
              type="search"
              placeholder="Search For Product"
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
              <td>product name</td>
              <td>
                <input
                  onChange={(event) => setProduct_name(event.target.value)}
                  value={Product_name}
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
                  onChange={(event) => setProduct_slug(event.target.value)}
                  value={Product_slug}
                  type="text"
                  name=""
                  id=""
                />
              </td>
            </tr>

            <tr>
              <td>category</td>
              <td>
                <input
                  onChange={(event) => setProduct_category(event.target.value)}
                  value={Product_category}
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
                    setProduct_description(event.target.value)
                  }
                  value={Product_description}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            {/* 
                    information.detailed_imagesId !== "" &&
        information.detailed_imagesAlt !== "" &&
        information.detailed_imagesURL !== "" &&
 */}

            <tr>
              <td>main image</td>
              <td>
                <input
                  onChange={(event) =>
                    setProduct_mainImage(event.target.value)
                  }
                  value={Product_mainImage}
                  type="text"
                  name=""
                  id=""
                />
              </td>
            </tr>

            <tr>
              <td>detailed id</td>
              <td>
                <input
                  onChange={(event) =>
                    setProduct_detailed_imagesId(event.target.value)
                  }
                  value={Product_detailed_imagesId}
                  type="text"
                  name=""
                  id=""
                />
              </td>
            </tr>

            <tr>
              <td>detailed alt</td>
              <td>
                <input
                  onChange={(event) =>
                    setProduct_detailed_imagesAlt(event.target.value)
                  }
                  value={Product_detailed_imagesAlt}
                  type="text"
                  name=""
                  id=""
                />
              </td>
            </tr>

            <tr>
              <td>detailed image</td>
              <td>
                <input
                  onChange={(event) =>
                    setProduct_detailed_imagesURL(event.target.value)
                  }
                  value={Product_detailed_imagesURL}
                  type="text"
                  name=""
                  id=""
                />
              </td>
            </tr>

            <tr>
              <td>quantity</td>
              <td>
                <input
                  onChange={(event) => setProduct_quantity(event.target.value)}
                  value={Product_quantity}
                  type="text"
                  name=""
                  id=""
                />
              </td>
            </tr>

            <tr>
              <td>priceRaw</td>
              <td>
                <input
                  onChange={(event) => setProduct_priceRaw(event.target.value)}
                  value={Product_priceRaw}
                  type="text"
                  name=""
                  id=""
                />
              </td>
            </tr>

            <tr>
              <td>priceFormatted</td>
              <td>
                <input
                  onChange={(event) =>
                    setProduct_priceFormated(event.target.value)
                  }
                  value={Product_priceFormated}
                  type="text"
                  name=""
                  id=""
                />
              </td>
            </tr>

            <tr>
              <td>subtotalRaw</td>
              <td>
                <input
                  onChange={(event) =>
                    setProduct_subtotalRaw(event.target.value)
                  }
                  value={Product_subtotalRaw}
                  type="text"
                  name=""
                  id=""
                />
              </td>
            </tr>

            <tr>
              <td>subtotalFormatedWithSymbol</td>
              <td>
                <input
                  onChange={(event) =>
                    setProduct_subtotalFormatedWithSymbol(event.target.value)
                  }
                  value={Product_subtotalFormatedWithSymbol}
                  type="text"
                  name=""
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

      <hr />
      <section className="products-section">
        <div className="products-section-item">
          <span>image</span>
          <span>product</span>
          <span>category</span>
          <span>slug</span>
          <span>decription</span>
          <span>price</span>
          <span>
            {/*               <button>edit</button>
              <button>delete</button> */}
          </span>
        </div>

        {Dashproducts.map(function (item) {
          return <DashProductItem key={item._id} data={item} />;
        })}
      </section>
      <DashFooter />
    </section>
  );
}
