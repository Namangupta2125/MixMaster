import { act, useRef } from "react"
import { toast } from "react-toastify";
import axios from "axios";
import { replace, useNavigate } from "react-router-dom";


const newsletterUrl = "";
const action = async (form,navigate)=>{
  
    if(!form.current){
      toast.error('an unexpected error occurred');
      return null;
    }
    if(form.current.firstname.value == ""){
      console.log("inside")
      toast.info('You Cant submit empty form')
      return null;
    }
    if (form.current.lastname.value == "") {
      toast.info("You Cant submit empty form");
      return null;
    }
    if (form.current.email.value == "") {
      toast.info("You Cant submit empty form");
      return null;
    }

    try{
      // const resp = await axios.post(newsletterUrl, {
      //   firstname: form.current.firstname.value,
      //   lastname: form.current.lastname.value,
      //   email:form.current.email.value,
      // });
      toast.success('Newsletter Suscribed Successfully')
      return navigate('/',{replace:true})
    }
    catch(error){
      toast.error(error);
    }
    return null;
}

function Newsletter() {
  const navigate = useNavigate();
  const form = useRef()
  return (
    <div className="w-full h-full  flex justify-center items-center relative">
      <img
        src="./images/newsletter.svg"
        alt=""
        className="absolute bottom-10 left-30 h-[45%] w-auto max-sm:left-0"
      />
      <form
        action="#"
        ref={form}
        className="w-[40%] max-w-2xl bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-center items-start text-center border border-gray-300 z-[1] max-sm:w-[75%]"
      >
        <h4 className="text-3xl text-center w-[100%] mb-10">Our NewsLetter</h4>
        <label htmlFor="firstname">Firt Name</label>
        <input
          type="text"
          placeholder="Naman"
          id="firstname"
          name="firstname"
          className="bg-gray-200 mb-5 w-full p-1 rounded-sm"
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Gupta"
          id="lastname"
          name="lastname"
          className="bg-gray-200 mb-5 w-full p-1 rounded-sm"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="abc@gmail.com"
          id="email"
          name="email"
          className="bg-gray-200 mb-5 w-full p-1 rounded-sm"
        />
        <button
          type="submit"
          className="bg-green-700 text-white tracking-widest mb-5 w-full p-1 rounded-sm"
          onClick={(e)=>{e.preventDefault();action(form,navigate)}}
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}
export default Newsletter