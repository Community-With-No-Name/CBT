import Layout from 'components/Layout'
import Header from 'components/Result/Header'
import React from 'react'
export default function Result() {
    return (
        <Layout page="Result">
            <div className="flex flex-col items-center justify-center w-full h-screen">
            <Header />
            <div className="grid w-full grid-cols-2 gap-4 py-5 md:grid-cols-2">
      <div className="h-auto py-12 bg-white rounded-lg shadow">
      <h2 className="sr-only" id="profile-overview-title">
        User Profile
      </h2>
      <div className="h-auto px-2 pt-6 bg-white">
        <div className="h-5/6 sm:flex sm:items-center sm:justify-between">
          <div className="h-full sm:flex sm:space-x-5">
            <div className="flex flex-col items-center justify-center flex-shrink-0 h-full">
              <h1 className="text-3xl font-extrabold">40%</h1>
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">Your Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="h-auto py-12 bg-white rounded-lg shadow">
      <h2 className="sr-only" id="profile-overview-title">
        User Profile
      </h2>
      <div className="h-auto px-2 pt-6 bg-white">
        <div className="h-5/6 sm:flex sm:items-center sm:justify-between">
          <div className="h-full sm:flex sm:space-x-5">
            <div className="flex flex-col items-center justify-center flex-shrink-0 h-full">
              <h1 className="text-3xl font-extrabold">38:00</h1>
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">Time Spent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
            </div>
        </Layout>
    )
}
