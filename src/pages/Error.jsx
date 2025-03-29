import { Link,useRouteError } from "react-router-dom"
function Error() {

  const error = useRouteError();
  if(error.status === 404){
    return (
      <div className="relative w-screen h-screen bg-[url(./images/not-found.svg)] border-2 border-black bg-no-repeat bg-auto bg-top">
        <div className="w-[30%] absolute bottom-5 left-[50%] flex flex-col justify-center items-center translate-[-50%]">
          <span className="font-bold">
            Oops We cant find the page u looking for
          </span>
          <Link
            to="/"
            className="underline text-blue-500 hover:text-blue-700 and visited:text-purple-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>Error</div>
  )
}
export default Error