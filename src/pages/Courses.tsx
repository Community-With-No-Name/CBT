import Cards from 'components/Courses/Cards'
import Title from 'components/Courses/Title'
import Layout from 'components/Layout'
import React from 'react'

export default function Courses() {
    const handleSearch = () => {
        
    }
    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    const [open, setOpen] = React.useState<boolean>(false)
    return (
        <Layout page="Courses">
            <>
            <Title
                handleSearch={handleSearch}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                open={open}
                setOpen={setOpen}
            />
            <Cards />
            </>
        </Layout>
    )
}
