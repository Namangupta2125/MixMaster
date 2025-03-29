import { useRef } from "react";
import { toast } from "react-toastify";
import { Form, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";

function SearchForm() {
  const inp = useRef(null);
  const {searchRef} = useGlobalContext()
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    const searchValue = inp.current.value.trim();

    if (searchValue === "") {
      return toast.info("Enter A Drink in search bar");
    }
    searchRef.current = searchValue
    navigate(`/?search=${encodeURIComponent(searchValue)}`);
  };

  return (
    <Form className="bg-white w-[80%] p-4 h-20 flex items-center">
      <input
        type="search"
        ref={inp}
        placeholder="Margarita"
        className="bg-gray-400 p-1 flex-grow mr-2"
      />
      <button
        className="bg-green-600 p-1 font-semibold tracking-widest text-white"
        onClick={handleButtonClick}
      >
        Search
      </button>
    </Form>
  );
}

export default SearchForm;
