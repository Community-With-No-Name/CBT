import React from "react";

export default function Cards({courses}) {
  return (
    <>
      <div className="pt-5" />
      
      <div className="flex flex-wrap pt-5 -m-2" id="Guests">
        {courses?.courses.map((course: any) => (
          <div
            className="w-full p-2 lg:w-1/3 md:w-1/2 sm:w-full searchBody"
            key={course._id}
          >
            <div className="flex items-center h-full p-4 transform bg-gray-100 border border-gray-200 rounded-lg shadow cursor-pointer hover:scale-105 hover:bg-gray-200">
              <>
                <div
                  className={`avatar avatar-lg text-white flex-shrink-0 rounded-full mr-4 bg-gray-700 p-3`}
                ></div>
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                    {course?.courseName}
                  </h2>
                  {[
                    {
                      title: "Total Question Answered",
                      value: 50,
                    },
                    {
                      title: "Total Right Answer",
                      value: 50,
                    },
                    {
                      title: "Speed And Accuracy",
                      value: 50,
                    },
                  ].map((detail, i) => (
                    <div className="flex justify-between w-3/4" key={i}>
                      <p className="py-1 text-sm font-medium text-gray-500 truncate font-dosis">
                        {detail.title}
                      </p>
                      <p className="py-1 text-sm font-medium text-gray-500 truncate font-dosis">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
