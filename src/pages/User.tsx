import React from 'react'
import Layout from 'components/Layout'
import Header from 'components/User/Header'
import Stats from 'components/User/Stats'
import Courses from 'components/User/Courses'

export default function User() {
    return (
        <Layout page="Dashboard">
            <Header />
            <Stats />
            <Courses />
        </Layout>
    )
}
