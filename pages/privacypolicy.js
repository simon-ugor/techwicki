import Layout from "../components/Layout"
import Head from "next/head"
import ArticleStructure from "../components/ArticleStructure"

const privacyPolicy = () => {
    return (
        <Layout>
            <Head>
                <title>Privacy Policy - TechWicki</title>
                <meta name="description" content="" />
            </Head>
            <ArticleStructure 
                heading="Privacy Policy"
            />
        </Layout>
    )
}

export default privacyPolicy