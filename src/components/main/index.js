import React, { useContext } from "react";
import { SOURCE } from "../../const";

//Context
import CorebizContext from "../../context/CorebizContext";

//Components
import ErrorDetected from "../error";
import LoadingData from "../loading";
import CardProducts from "./CardProducts";

const MainProduct = () => {
  const { data, loading } = useContext(CorebizContext);

  return (
    <>
      <div className="w-full">
        <img src={SOURCE.banner} alt="banner" />
      </div>
      <>
        <div className="flex justify-center w-full mt-10">
          {loading ? (
            <LoadingData />
          ) : (
            <>
              <section className="text-gray-600 body-font">
                <h2 className="text-xl titulo-vendido capitalize font-bold text-black">Mais vendidos</h2>
                <div className="container px-5 py-24 mx-auto">
                  <ul className="flex flex-wrap -m-4">
                    {data && data.length >= 1 ? (
                      data.map((item) => (
                        <CardProducts key={item.id} item={item} />
                      ))
                    ) : (
                      <ErrorDetected
                        messageColor="bg-yellow-500"
                        messageInfo="No hay información"
                      />
                    )}
                  </ul>
                </div>
              </section>
            </>
          )}
        </div>
      </>
    </>
  );
};

export default MainProduct;
