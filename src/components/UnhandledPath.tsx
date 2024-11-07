import { useNavigate } from "react-router-dom"

export default function UnhandledPath() {
  
  const navigate = useNavigate();
  
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center gap-8 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          404 Page Not Found
        </h1>
        <button 
          onClick={() => navigate('/')}
          type="button" 
          className="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Home
        </button>
      </div>
    </section>
  )
}
