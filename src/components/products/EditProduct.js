import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Globalstate } from "../../Globalstate";
import Loader from "../loader/Loader";



const EditProduct = (props) => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({ ...props.product });
  const [img, setImg] = useState(product?.img?.url);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const state = useContext(Globalstate);
  // const [Recipes, setRecipes] = state.recipesAPI;
  // const [fields, setFields] = useState([...recipe.ingredient]); // for dynamic inputs

  useEffect(() => {
    if (!token) return navigate("/login");
  }, []);
  useEffect(() => {
    
  }, [props.product]);


  const handleOnChange = ({ target }) => {
    setProduct({ ...product, [target.name]: target.value });
  };
  const removeImage = async () => {
    setLoading(true);
    try {
      // let res = await axios.post(
      //   "/api/image/delete-img",
      //   { public_id: recipe.image.public_id },
      //   { headers: { authorization: token } }
      // );

      // if (res) {
      //   setLoading(false);
      //   setImg(false);
      // }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (product.title && product.price && product.recipe) {
    //   if (product.image) {
    //     try {
          setLoading(true);
          // let res = await axios.put(
          //   `/api/recipes/${recipe._id}`,
          //   { ...recipe, ingredient: [...fields], image: img },
          //   { headers: { authorization: localStorage.getItem("token") } }
          // );
          // toast.success("Recipe Saved");

          
          setLoading(false);

    //   //   //   props.setParentRecipe(res.data.updatedRecipe);
    //   //   //   let newRecipes = Recipes.filter((item) => item);
    //   //   //   newRecipes.forEach((item, index) => {
    //   //   //     if (item._id === recipe._id) {
    //   //   //       newRecipes[index] = res.data.updatedRecipe;
    //   //   //     }
    //   //   //   });
    //   //   //   setRecipes([...newRecipes]);
    //   //   // } catch (err) {
    //   //   //   setLoading(false);
    //   //   //   if (err) return toast.error(err.response.data.msg);
    //   //   // }
    //   //   setLoading(false);
    //   // }
    // } else {
    //   toast.warning("missing feilds");
    //   setLoading(false);
    // }

    setLoading(false);
    console.log(product)
  };

  const handleUploadImg = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    if (!file) return toast.error("File not exist");
    if (file.size > 1024 * 1024)
      return toast.error("File size is larger than 1 MB");
    if (file.type !== "image/jpeg" && file.type !== "image/png")
      return toast.error("File format is incorrect");
    try {
      let formData = new FormData();
      formData.append("file", file);
      let res = await axios.post("/api/image/upload-img", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: token,
        },
      });
      setImg(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.msg);
    }
    setLoading(false);
  };

  return (
    product && (
      <div className="container">
   
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="title"
                onChange={handleOnChange}
                value={product.title}
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Title</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                name="price"
                onChange={handleOnChange}
                value={product.price}
                className="form-control"
                id="priceFloating"
                placeholder="name@example.com"
              />
              <label htmlFor="priceFloating">Price</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="number"
                name="text"
                onChange={handleOnChange}
                value={product.price}
                className="form-control"
                id="descriptionFloating"
                placeholder="name@example.com"
              />
              <label htmlFor="descriptionFloating">Description</label>
            </div>

         

            {loading ? (
              <div className=" row ">
                <div className="col-12 d-flex justify-content-center">
                  <Loader />
                </div>
              </div>
            ) : (
              img && (
                <div className=" ">
                  <div>
                    <button
                      className="btn btn-danger mb-2 rounded-circle "
                      onClick={removeImage}
                    >
                      &times;
                    </button>
                  </div>
                  <img
                    style={{ width: "400px", height: "400px" }}
                    className="   rounded-circle"
                    src={img}
                  />
                </div>
              )
            )}
            <div>
              <label htmlFor="formFileLg" className="form-label">
                Product Photo
              </label>
              <input
                className="form-control form-control-lg"
                name="dish-image"
                onChange={handleUploadImg}
                id="formFileLg"
                type="file"
                accept="image/png, image/jpeg"
              />
            </div>

            <div className="col-12  my-3">
              <button type="submit" className="btn btn-primary w-100">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EditProduct;
