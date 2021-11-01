/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function NavButtons({handlePrev, handleNext}) {
    return (
        <>
         <nav
      className="flex justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
        <button
          onClick={handlePrev}
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Previous
        </button>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-red-600 border border-gray-300 rounded-md text-red-50 hover:bg-red-50 hover:text-red-700"
        >
          Submit
        </a>
        <button
          onClick={handleNext}
          className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Next
        </button>
    </nav>   
        </>
    )
}
