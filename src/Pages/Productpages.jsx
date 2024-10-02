
import { React, useState } from "react";
// import { addData } from "../Redux/Product/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addData } from "../Redux/Product/Action";
import './Productpages.css'

const ProductPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.proReducer);
  const navigate = useNavigate();
  console.log(state);
  const [fromdata, setState] = useState({
    product: "",
    brand: "",
    price: "",
    strikedOffPrice: "",
    category: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...fromdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      product,
      brand,
      price,
      strikedOffPrice,
      category,
      imageURL,
    };

    dispatch(addData)(obj);
    navigate("/allproduct");
  };

  let { product, brand, price, strikedOffPrice, category, imageURL } = fromdata;
  return (
    <>
      <section className="main_content dashboard_part large_header_bg">
        <div className="main_content_iner ">
          <div className="container-fluid p-0">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="dashboard_header mb_50">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="dashboard_header_title">
                        <h3> ADD PRODUCT</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="white_box mb_30">
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="modal-content cs_modal">
                        <div className="modal-header theme_bg_1 justify-content-center">
                          <h5 className="modal-title text_white">
                            ADD PRODUCT
                          </h5>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={handleSubmit}>
                            <input
                              type="text"
                              className="form-control"
                              value={product}
                              name="product"
                              placeholder="Enter Product Name"
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              className="form-control"
                              value={brand}
                              name="brand"
                              placeholder="Enter Brand Name"
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              className="form-control"
                              value={price}
                              name="price"
                              placeholder="Enter Product Price"
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              className="form-control"
                              value={strikedOffPrice}
                              name="strikedOffPrice"
                              placeholder="Enter Product Offer Price"
                              onChange={handleChange} />
                            <input
                              type="text"
                              className="form-control"
                              value={category}
                              name="category"
                              placeholder="Enter Product category" onChange={handleChange}/>
                            <input
                              type="text"
                              className="form-control"
                              value={imageURL}
                              name="imageURL"
                              placeholder="Enter Product image-URL"
                              onChange={handleChange}
                            />
                            <button
                              type="submit"
                              className="btn_1 full_width text-center"
                            >
                              Add Product
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;