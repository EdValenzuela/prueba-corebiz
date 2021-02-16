import React from 'react';
import { Link } from 'react-router-dom';

const CardProducts = ({item}) => {
    const { id, product, img, sku, description, category, price, color } = item;
    return (
        <li className="p-4 md:w-1/3 w-full ">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-gray-300 cursor-pointer">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={img}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {product}
            </h1>
            <p className="text-black font-bold">Price : ${price} </p>
            <div className="flex justify-center items-center flex-wrap ">
              <Link
                to={`/detail/${id}`}
                title={`/detail/${id}`}
                className="text-white cursor-pointer bg-black rounded focus:outline-none hover:bg-red-600 inline-flex uppercase justify-center w-4/5 items-center py-3 px-1 mt-5 md:mb-2 lg:mb-0"
              >
                Comprar
              </Link>
            </div>
          </div>
        </div>
      </li>
    )
}

export default CardProducts
