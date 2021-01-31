import Layout from "../components/Layout"
import Head from "next/head"
import ArticleStructure from "../components/ArticleStructure"

const termsOfUse = () => {
    return (
        <Layout>
            <Head>
                <title>Terms of Use - TechWicki</title>
                <meta name="description" content="" />
            </Head>
            <ArticleStructure 
                heading="Terms of Use"
            />
        </Layout>
    )
}

export default termsOfUse