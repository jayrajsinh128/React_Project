import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/Action";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseFolder/Firebaser";
import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
import './Allproduct.css'

const Allproduct = () => {
    const dispatch = useDispatch();
    const state = useSelector((s) => s.proReducer);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getData);
    }, []);

    const handleDelete = async (id) => {
        let data = doc(db, "products", id);
        await deleteDoc(data);
        alert("Data Deleted Successfully")
        dispatch(getData);
    };

    // if (state.loading) return <p>Loading...</p>;
    // if (!state.product || state.product.length === 0) return <p>No products found</p>;

    const [filterData, setFilter] = useState({
        headphon: false,
        watch: false,
      });
      const [sortData, setSort] = useState("");
      const [searchData, setSearchData] = useState("");
    
    
      const handleFilter = (e) => {
        setFilter({
          ...filterData,
          [e.target.name]: e.target.checked,
        });
      };
      console.log(filterData);
      let FilteredData = state.product;
    
      if (filterData.watch || filterData.headphon) {
        FilteredData = FilteredData.filter((el) => {
          if (
            filterData.watch == true && 
            el.category == "watch"
          ) {
            return true;
          }
          if (filterData.headphon && el.category == "headphon") {
            return true;
          }
        });
      }
      if (sortData) {
        FilteredData = FilteredData.sort((a, b) => {
          if (sortData == "desc") {
            return a.price - b.price;
          } else if (sortData == "Aasc") {
            return a.brand.localeCompare(b.brand);
          } else if (sortData == "Ddesc") {
            return b.brand.localeCompare(a.brand);
          }else if (sortData == "asc") {
            return b.price - a.price;
          }
        });
      }
      if (searchData) {
        FilteredData = FilteredData.filter((el) => {
          return el.brand.toLowerCase().includes(searchData.toLowerCase());
        });
    }

    return (
        <>
            {/* <ToastContainer /> */}
            <section className="main_content dashboard_part large_header_bg">
                <div className="container-fluid g-0">
                    <div className="row">
                    <div className="search-box">
                        <input type="text" id="search" placeholder="Search products..." onChange={(e) => setSearchData(e.target.value)}/>
                    </div>
                    
                    <div className="filter-box">
                        <label>Category:</label>
                        <input type="checkbox" name="watch" onChange={handleFilter} />{" "}watch
                        <input type="checkbox" name="headphon" onChange={handleFilter} />{" "}headphon
                    </div>

                    <div className="sort-box">
                        <label>Sort By:</label>
                        <select id="sort" onChange={(e) => setSort(e.target.value)}>
                            <option value="default">Default</option>
                            <option value="desc">Price: Low to High</option>
                            <option value="asc">Price: High to Low</option>
                            <option value="Aasc">Name: A to Z</option>
                            <option value="Ddesc">Name: Z to A</option>
                        </select>
                    </div>
                        {/* Other content */}
                        <div className="row">
                            { FilteredData.map((el) => {
                                return (
                                    <div className="col-md-3" key={el.id}>
                                        <div className="white_card position-relative mb_20 ">
                                            <div className="card-body">
                                                <img src={el.imageURL} alt="Product" height="150" />
                                                <div className="row my-4">
                                                    <div className="col">
                                                        <span className="badge_btn_3  mb-1">
                                                            {el.category}
                                                        </span>
                                                        <a className="f_w_400 color_text_3 f_s_14 d-block">
                                                            {el.product}
                                                        </a>
                                                    </div>
                                                    <div className="col-auto">
                                                        <h4 className="text-dark mt-0">
                                                            ₹{el.price} &nbsp;&nbsp;
                                                            <small className="text-muted font-14">
                                                                <del>₹{el.strikedOffPrice}</del>
                                                            </small>
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button
                                                        className="btn_2"
                                                        onClick={() => navigate(`/product/edit/${el.id}`)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn_2"
                                                        onClick={() => handleDelete(el.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Allproduct;
