import React from 'react'
import Layout from 'components/Layout'
import Header from 'components/User/Header'
import Stats from 'components/User/Stats'
import Courses from 'components/User/Courses'
import jwt_decode from "jwt-decode"
import { getRequest } from 'api/apiCall'
import { GETUSERCOURSE } from 'api/apiUrl'
import { queryKeys } from 'api/queryKey'
import { useQuery } from 'react-query'
export default function User() {
    const user = jwt_decode(localStorage?.getItem("cbt_token"))
    console.log(user)
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
    return (
        <Layout page="Dashboard">
            <Header user={user} />
            <Stats />
            <Courses course={userCourses} />
        </Layout>
    )
}
