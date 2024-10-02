import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/Action";
import { Link, useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../FirebaseFolder/Firebaser";
// import { toast, ToastContainer } from "react-toastify";

const Singleeditproduct = () => {
  const [state, setState] = useState({
    product: "",
    brand: "",
    price: "",
    strikedOffPrice: "",
    category: "",
    imageURL: "",
  });
  const navigate = useNavigate();
  // const [single,setSingle] = useState({})
  const { id } = useParams();
  useEffect(() => {
    async function getData() {
      let a = doc(db, "products", id);
      let d = await getDoc(a);
      console.log(d);
      if (d.exists()) {
        setState(d.data());
      }
    }
    getData();
  }, []);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (E) => {
    E.preventDefault();
    let data = doc(db, "products", id);
    await updateDoc(data, state);
    toast.success("Item Updated Successfully", { autoClose: 3000 });
    setTimeout(() => {
      navigate("/product");
    }, 2000);
  };

  let { product, brand, price, strikedOffPrice, category, imageURL } = state;

  return (
    <>
      {/* <ToastContainer /> */}
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
                    <div className="col-lg-6">
                      <div className="dashboard_breadcam text-end">
                        <p>
                          <Link to={'/allproduct'}>Dashboard</Link>
                          {/* <link rel="stylesheet" href="" />Dashboard{" "} */}
                          <i className="fas fa-caret-right"></i> ADD PRODUCT
                        </p>
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
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              className="form-control"
                              value={category}
                              name="category"
                              placeholder="Enter Product category"
                              onChange={handleChange}
                            />
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
                        <div className="custom-card">
  <img className="custom-card-img" src={state.imageURL} alt={state.title} />
  <div className="custom-card-content">
    <h6 className="custom-card-title"><b>Title:</b> {state.title}</h6>
    <h6 className="custom-card-price"><b>Price:</b> ₹{state.price}</h6>
  </div>
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

export default Singleeditproduct;
