import React from 'react'
import { useMutation } from "react-query";
import { login, postRequest } from 'api/apiCall';
import { ToastContext } from "../App"
import { queryKeys } from "api/queryKey";
import { REGISTER } from '../api/apiUrl';
import img from "../images/login.svg"
import { FacultyAndDepartments } from 'utils/FacultyAndDepartments';
export default function Register(props) {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    password2: "",
    fullName: "",
    faculty: "",
    department: ""
  })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const [disabled, setDisabled] = React.useState<boolean>(false)
  const {showAlert} = React.useContext(ToastContext)
  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      setDisabled(false);
      if(data?.message) {
        alert(`${data?.message}`)
        window.location.href="/login"
      }
      else {
        alert(`${data?.error}`)
      }
    },
    onError(data) {
      setDisabled(false);
      alert("Registration Failed")
    }
    
  });
  const submitForm = (e: any) => {
    e.preventDefault();
    if (state.password !== state.password2) {
        alert("Passwords Do Not Match")
    }
    if(!state.fullName){
        alert("Please Add ur name")
    }
    if(!state.faculty){
        alert("Please Select A Faculty")
    }
    if(!state.department){
        alert("Please Select A Department")
    }
    if(!state.email){
        alert("Please Select A Faculty")
    }
    if(!state.faculty){
        alert("Please Select A Faculty")
    }
    else{
        setDisabled(true)
        mutate({
            url: REGISTER,
            data: {
                email: state.email,
                password: state.password,
                faculty: state.faculty,
                fullName: state.fullName,
                department: state.department,
            },
        });
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div className="grid max-w-6xl max-h-screen grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
      <div className="hidden col-span-1 sm:my-auto sm:mx-auto sm:block" data-aos="fade-in-up" data-aos-duration="800">
      <img 
        src={img}
        // src="https://res.cloudinary.com/jewbreel1/image/upload/v1625737196/jewbreel/sms/otp_mqfisv.svg" 
        alt="" 
        className="transition-all transform hover:scale-105 hover:-translate-y-3" />
      </div>
    <div className="flex flex-col justify-center min-h-screen col-span-1 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="w-auto h-auto mx-auto transition-all transform sm:hidden hover:scale-105 hover:-translate-y-3"
          src={img}
          // src="https://res.cloudinary.com/jewbreel1/image/upload/v1625737196/jewbreel/sms/otp_mqfisv.svg"
            alt="Workflow"
            data-aos="fade-in-up" data-aos-duration="800"
        />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign Up</h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-gray-50 sm:rounded-lg sm:px-5">
            <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Enter Full Name
              </label>
              <div className="mt-1">
                <input
                  onChange={handleChange}
                  id="fullName"
                  name="fullName"
                  type="text"
                    autoComplete="fullName"
                    placeholder="Enter Full Name"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="faculty" className="block text-sm font-medium text-gray-700">
                Select Faculty
              </label>
              <div className="mt-1">
                <select
                  onChange={handleSelect}
                  id="faculty"
                  name="faculty"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                >
                    <option value="">Please Select Faculty</option>
                    {
                        FacultyAndDepartments?.map((faculty, i)=>(
                            <>
                            <option value={faculty.facultyName}>{faculty.facultyName}</option>
                            </>
                        ))
                    }
                </select>
              </div>
            </div>
            {
                state.faculty && state.faculty!=="" &&
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Select Department
              </label>
              <div className="mt-1">
                <select
                  onChange={handleSelect}
                  id="department"
                  name="department"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                >
                    <option value="">Please Select Department</option>
                    {
                        FacultyAndDepartments?.map((faculty, i)=>(
                            <>
                            {
                                state.faculty===faculty.facultyName && faculty.departments.map((department)=>(
                                    <option value={department}>{department}</option>
                                ))
                            }
                            </>
                        ))
                    }
                </select>
              </div>
            </div>
            }
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Enter Email Address
              </label>
              <div className="mt-1">
                <input
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                    autoComplete="email"
                    placeholder="Enter Email Address"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Create Password
              </label>
              <div className="mt-1">
                <input
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                    autoComplete="password"
                    placeholder="***********"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  onChange={handleChange}
                  id="password2"
                  name="password2"
                  type="password"
                    autoComplete="password2"
                    placeholder="***********"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>


            <div>
              <button
                type="submit"
                disabled={disabled}
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-all transform bg-gray-600 border border-transparent rounded-md shadow-sm hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Login
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
    </form>
  )
}
