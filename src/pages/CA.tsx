import Layout from 'components/Layout'
import React from 'react'
import image from "../images/login.svg"
export default function Test() {
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    const handleChange = () => {
        
    }
    return (
        <Layout page="Take Test">
            <div className="flex flex-col items-center justify-center h-screen max-w-4xl">
            <div className="grid w-full grid-cols-1 gap-4">
      <div className="overflow-hidden bg-white rounded-lg shadow">
      <h2 className="sr-only" id="profile-overview-title">
        User Profile
      </h2>
      <div className="p-6 bg-white">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <img className="object-cover object-center w-40 h-40 mx-auto transition-all transform rounded-full hover:scale-110 hover:-translate-y-3" src={image} alt="" />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">Jubril Musa</p>
              <p className="text-sm font-medium text-gray-600">Jewbreel1@gmail.com</p>
              <p className="text-sm font-medium text-gray-600 capitalize">Department: Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
            <form onSubmit={handleSubmit} className='w-full px-6 mx-3 mb-3 mt-9'>
          <div className='my-2'>
              <label htmlFor="name">
                Course Name
              </label>
              <input onChange={handleChange}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Enter Course Name"
                />
            </div>
            <div>
    </div>
            
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full py-2 mt-5 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md cursor-pointer group hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
              Start Test
            </button>
              </div>
        </form>
                </div>
        </Layout>
    )
}
