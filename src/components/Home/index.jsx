import React, { useEffect } from "react";
import bgHome from "../../assets/Banner11.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import orange from "../../assets/Photo-orange.png";
import context from "../../assets/Content.png";
import counter from "../../assets/Counter.png";
import Blog from "../../assets/Blog.png";
import gallery from "../../assets/Gallery.png";
import are from "../../assets/Who We Are.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../Shop/ProductCard";
import emptyProd from "../../assets/empty_cart_prod1.png";

const Home = () => {
  const navigate = useNavigate();
  const { product, user } = useSelector((s) => s.add);
  useEffect(() => {
    window.scrollTo(0, 10);
  }, []);
  return (
    <>
      {/* <div className=""> */}
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${bgHome}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top",
          position: "relative",
        }}
      >
        <div className="">
          <button
            onClick={() => (user ? navigate(`/createProduct`) : alert(404))}
            className="text-[#274C5B] absolute top-[195px] 2xl:top-[307px] lg:mt-[38px] xl:top-[265px] 867:mt-[29px] md:mt-[-80px] sm:top-[115px] 546:top-[75px] 400:top-[115px] 320:top-[95px]  2xl:left-[150px] 867:ml-[6px] sm:left-[45px] lg:ml-[18px] xl:left-[120px] md:ml-[-40px] 546:left-[30px] 400:left-[10px]  320:left-[2px] ml-[40px] text-[20px] 546:text-[15px] sm:text-[17px] 400:text-[10px] 320:text-[10px] 867:text-[18px] bg-[#EFD372] font-bold flex items-center gap-3 py-[20px] 867:py-[18px] md:py-[17px] 546:py-[13px] sm:py-[15px] 400:py-[12px] 320:py-[10px] px-[30px] 867:px-[25px] md:px-[27px] sm:px-[25px] 546:px-[18px] 400:px-[13px] 320:px-[8px] rounded-xl"
          >
            Explore Now <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
      {/* <div className="container">
          <div className="flex items-center justify-center gap-[30px] my-[150px]">
            <img src={one} alt="" width={500} />
            <img src={two} alt="" width={500} />
          </div>
        </div>
        <h1 className="flex items-center justify-center text-5xl font-bold text-[#274C5B]">
          Our Products
        </h1>
        <div className="container">
          {product.length ? (
            <div className="my-[30px] flex items-center justify-center flex-wrap gap-[40px]">
              {product?.map((el) => (
                <ProductCard el={el} key={el._id} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <img src={emptyProd} alt="img" width={600} />
            </div>
          )}
        </div>
        <div
          className=""
          style={{
            background: `url(${counter})`,
            minHeight: "150vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        {/* <div className="bg-[#274C5b] h-[120vh] flex items-center justify-center flex-col">
          <div className="w-[900px]">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl text-white font-bold">
                We Offer Organic For You
              </h1>
              <div className="">
                <button
                  onClick={() => navigate(`/createProduct`)}
                  className="text-[#274C5B] text-[20px] bg-[#EFD372] font-bold flex items-center gap-3 py-[20px] px-[30px] rounded-xl"
                >
                  View All Product <FaArrowAltCircleRight />
                </button>
              </div>
            </div>
            <div className="flex items-start flex-wrap gap-[40px] mt-[40px] mb-[60px]">
              {filterCategory.map((el) => (
                <ProductCard el={el} key={el.id} />
              ))}
            </div>
          </div>
        </div> */}
      {/* <div
          className=""
          style={{
            height: "100vh",
            backgroundImage: `url(${are}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        <div
          className=""
          style={{
            height: "100vh",
            backgroundImage: `url(${gallery}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
        <div className="flex items-center justify-center my-[50px]">
          <img src={Blog} alt="" width={1200} />
        </div> */}{" "}
      {/* */}
      {/* </div> */}
    </>
  );
};

export default Home;
