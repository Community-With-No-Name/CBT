import { getRequest, postRequest } from "api/apiCall";
import { ADDUSERCOURSE, GETCOURSES, GETUSERCOURSE } from "api/apiUrl";
import { queryKeys } from "api/queryKey";
import Cards from "components/Courses/Cards";
import Title from "components/Courses/Title";
import Layout from "components/Layout";
import React from "react";
import { useMutation, useQuery } from "react-query";

export default function Courses() {
  const { data: courseList } = useQuery(
    queryKeys.getFacultyCourses,
    async () => await getRequest({ url: GETCOURSES }),
    {
      retry: 2,
    }
  );
  const { data: userCourseList } = useQuery(
    queryKeys.getUserCourses,
    async () => await getRequest({ url: GETUSERCOURSE }),
    {
      retry: 2,
    }
  );
  const [courses, setCourses] = React.useState(courseList?.data);
  const [userCourses, setUserCourses] = React.useState(userCourseList?.data);
  React.useEffect(() => {
    setCourses(courseList?.data);
    setUserCourses(userCourseList?.data);
  }, [courseList?.data, userCourseList?.data]);
  console.log(courses)
  const handleSearch = () => {};
  const handleChange = () => {};
  const [disabled, setDisabled] = React.useState(false)
  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      setDisabled(false);
      if(data?.message) {
        alert(`${data?.message}`)
      }
      else {
        alert(`${data?.error}`)
      }
    },
    onError(data) {
      setDisabled(false);
      alert("Course reg Failed")
    }
    
  });
  const handleSubmit = (e: any) => {
      e.preventDefault();
      setDisabled(true)
      var filteredCourse = courses?.filter(course=>course?.courseName===value)
      var courseToSubmit = {
          courseId: filteredCourse[0]._id,
          courseName: filteredCourse[0].courseName,
      }
    mutate({
      url: ADDUSERCOURSE,
      data: courseToSubmit,
    });
  };
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState();
  console.log(userCourses)
  return (
    <Layout page="Courses">
      <>
        <Title
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          open={open}
          setOpen={setOpen}
          courses={courses}
          value={value}
          setValue={setValue}
        />
        <Cards courses={userCourses} />
      </>
    </Layout>
  );
}
