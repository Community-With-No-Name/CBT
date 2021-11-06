import { getRequest } from 'api/apiCall'
import { GETUSERCOURSE } from 'api/apiUrl'
import { queryKeys } from 'api/queryKey'
import Layout from 'components/Layout'
import jwtDecode from 'jwt-decode'
import React from 'react'
import { useQuery } from 'react-query'
import AlertNotification from 'utils/Alerts'
import { SingleAutoComplete } from 'utils/AutoComplete'
import image from "../images/login.svg"
export default function Test() {
  
    const { data: userCourseList } = useQuery(
      queryKeys.getUserCourses,
      async () => await getRequest({ url: GETUSERCOURSE }),
      {
        retry: 2,
      }
    );
    const [userCourses, setUserCourses] = React.useState(userCourseList?.data);
    React.useEffect(() => {
      setUserCourses(userCourseList?.data);
    }, [userCourseList?.data]);
    const data = userCourses?.courses?.map(course=>{
      return {
        label: course?.courseName,
        value: course?.courseName
      }
    })
    const user: {fullName: string, department: string, email: String, faculty: String} = jwtDecode(localStorage.getItem("cbt_token"))
    const [open, setOpen] = React.useState(false)
    const [severity, setSeverity] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [value, setValue] = React.useState()
      const handleTest = (e: any) => {
          e.preventDefault()
          setSeverity("success")
          setMessage(`${value} Test`)
          setOpen(true)
          var filteredCourse = userCourses?.courses.filter(course=>course?.courseName===value)
          setTimeout(()=> {
            setOpen(false)
            window.location.href=`/test/${filteredCourse[0]?._id}`
          }, 4000 )
      }
    return (
      <>
          <AlertNotification open={open} setOpen={setOpen} message={message} severity="success" />
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
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user?.fullName}</p>
              <p className="text-sm font-medium text-gray-600">{user.email}</p>
              <p className="text-sm font-medium text-gray-600 capitalize">Department: {user.department}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
            <form onSubmit={handleTest} className='w-full px-6 mx-3 mb-3 mt-9'>
          <div className='my-2'>
              <label htmlFor="name">
                Course Name
              </label>
              <SingleAutoComplete data={data} classStyles="relative block w-full px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" value={value} setValue={setValue} />
              {/* <input onChange={handleChange}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Enter Course Name"
                /> */}
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
        </>
    )
}
