import axios from "axios";
import { useLoaderData, Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${url}${id}`);
  return { id, data };
};

function Cocktail() {
    const { searchRef } = useGlobalContext();
  const { data } = useLoaderData();
  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter((key) => key.startsWith("strIngredient") && singleDrink[key])
    .map((key) => singleDrink[key]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center bg-white shadow-xl rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full md:w-1/2 h-80 object-cover ml-5 rounded-l-2xl"
        />
        <div className="w-full md:w-1/2 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <div className="text-gray-700 space-y-2">
            <p>
              <span className="font-semibold text-green-800">Category:</span>{" "}
              {category}
            </p>
            <p>
              <span className="font-semibold text-green-800">Info:</span> {info}
            </p>
            <p>
              <span className="font-semibold text-green-800">Glass:</span>{" "}
              {glass}
            </p>
            <p>
              <span className="font-semibold text-green-800">Ingredients:</span>{" "}
              {validIngredients.join(", ")}
            </p>
            <p>
              <span className="font-semibold text-green-800">
                Instructions:
              </span>{" "}
              {instructions}
            </p>
          </div>
          <Link
            to={`/?search=${searchRef.current}`}
            className="inline-block mt-4 px-5 py-2 bg-green-800 text-white rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
