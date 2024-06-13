// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {

  const data = useLoaderData()

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Saurabhrajmane-23')
  //   .then(response => {
  //     if(response.ok) return response.json();
  //     else throw new Error("Invalid Response")
  //   })
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }, [])

  return (
    
    <>
    <div className='p-4 text-center h-100'>
      <h1 className="text-3xl ">Github</h1>
      <p className="text-lg "> Followers: {data.followers}</p>
      <img className="rounded-full left-0" src={data.avatar_url} alt="Git pic" width={200}></img>
    </div>

    <div className="w-[300px] rounded-md border ml-7">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          About Macbook &nbsp;
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Macbook
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Apple
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Laptop
          </span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/Saurabhrajmane-23')
  return response.json()
}
