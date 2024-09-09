import React, { useEffect } from "react";
import bgDet from "../../assets/Banner2.png";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowCircleRight } from "react-icons/fa";
import { addToBasket } from "../../redux/reducers/addProductSlice";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductDet = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { productDeteils } = useSelector((s) => s.add);
  console.log(productDeteils, "prodd");
  const arrNumbers = [1, 2, 3, 4, 5];

  if (!productDeteils) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    window.scrollTo(0, 10);
  }, []);

  return (
    <>
      <div className="container px-4">
        <div className="flex items-center relative gap-8 justify-around 546:flex-col 400:flex-col 320:flex-col my-[80px] ">
          <a
            href=""
            className="text-4xl absolute top-[-45px] left-2"
            onClick={() => nav(`/shop`)}
          >
            <IoChevronBackCircleOutline />
          </a>
          <div className="relative  w-[400px] md:w-[350px] sm:w-[330px] 400:w-[300px] 320:w-[300px] h-[400px] md:h-[330px] sm:h-[300px] 400:h-[280px] flex items-center justify-center rounded-2xl shadow-2xl">
            <img
              src={productDeteils.url}
              alt=""
              className="w-[350px] 867:w-[300px] md:w-[230px] 546:w-[220px] 400:w-[200px] 320:w-[200px]"
            />
          </div>

          <div className="flex items-start flex-col gap-6 w-[500px] sm:w-[450px] 546:w-[400px] 400:w-[360px] 320:w-[280px]">
            <h1 className="text-3xl sm:text-2xl font-bold">
              {productDeteils.name}
            </h1>
            <div className="flex gap-1">
              {arrNumbers.map((number) => (
                <div
                  key={number}
                  className="star w-6 h-6"
                  style={{
                    backgroundColor:
                      number <= productDeteils.rating ? "orange" : "gray",
                  }}
                ></div>
              ))}
            </div>
            <h1 className="text-2xl font-bold">
              {productDeteils.price * productDeteils.quantity} $
            </h1>
            <p className="w-full text-[25px]">{productDeteils.description}</p>
            <div className="mm flex items-center  gap-4 sm:gap-2">
              <h1 className="text-[25px] sm:text-[22px] 400:text-[23px] 320:text-[0px]">
                Quantity :
              </h1>
              <h1 className="border-2 flex items-center justify-center text-xl border-black w-[120px] md:w-[100px] sm:w-[80px] 546:w-[80px] 400:w-[70px] 320:w-[70px] h-[58px] 546:h-[55px] md:h-[53px] sm:h-[45px] 400:h-[40px] 320:h-[50px] rounded-lg">
                {productDeteils.quantity}
              </h1>
              <button
                onClick={() => dispatch(addToBasket(productDeteils))}
                className="flex items-center gap-3 bg-[#274C5B] py-4 md:py-[16px] sm:py-[13px] 546:py-[18px] 400:py-[15px] px-6 md:px-5 text-white text-[20px] md:text-[15px] sm:text-[14px] 546:text-[15px] 400:text-[10px] 320:text-[13px]  font-bold sm:font-bold rounded-lg"
              >
                Add To Cart <FaArrowCircleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDet;
