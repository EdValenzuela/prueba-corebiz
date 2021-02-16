import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingData from "../loading";

const DetailProduct = () => {
  const { id } = useParams();

  const [showsData, setShowsData] = useState([]);
  const [fetching, setFetching] = useState(true);

  const getDetail = async () => {
    try {
      const url = `https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products/${id}`;
      const resp = await fetch(url);
      const data = await resp.json();
      setShowsData(data);
      setFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  //Titulo, anio, genero, lenguaje, actores, pais
  const { product, img, sku, description, category, price, color } = showsData;
  return (
    <>
      {fetching ? (
        <LoadingData />
      ) : (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap border-2 border-black p-2">
              <img
                alt="img-detail"
                className="lg:w-1/4 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={img}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-xl title-font text-gray-500 tracking-widest">
                  {product}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font capitalize font-medium mt-2 p-2 bg-red-200">
                    Price ${price}
                </h1>
                <div className="bg-gray-200 p-4 my-5">
                  <p className="leading-relaxed">Cod.SKU: <span className="font-light">{sku}</span></p>
                  <p className="leading-relaxed">Description: {description}</p>
                  <p className="leading-relaxed">Category: {category}</p>
                  <p className="leading-relaxed">Color: {color}</p>
                </div>
                <Link
                  to={`/`}
                  title="Volver"
                  className="flex justify-center uppercase ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DetailProduct;
