import Layout from "../components/Layout"
import Head from "next/head"
import ArticleStructure from "../components/ArticleStructure"

const contactUs = () => {
    return (
        <Layout>
            <Head>
                <title>Contact TechWicki</title>
                <meta name="description" content="" />
            </Head>
            <ArticleStructure 
                heading="Contact Us"
            />
        </Layout>
    )
}

export default contactUs