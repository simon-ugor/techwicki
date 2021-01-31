import Layout from "../components/Layout"
import Head from "next/head"
import ArticleStructure from "../components/ArticleStructure"

const aboutUs = () => {
    return (
        <Layout>
            <Head>
                <title>About TechWicki</title>
                <meta name="description" content="" />
            </Head>
            <ArticleStructure 
                heading="About Us"
            />
        </Layout>
    )
}

export default aboutUs