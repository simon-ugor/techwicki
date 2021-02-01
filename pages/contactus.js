import Layout from "../components/Layout"
import Head from "next/head"
import ArticleStructure from "../components/ArticleStructure"

const contactUs = () => {
    return (
        <Layout>
            <Head>
                <title>Contact TechWicki</title>
                <meta name="description" content="For any questions or troubleshooting you can always contact us at: coldenwebdev@gmail.com" />
            </Head>
            <ArticleStructure 
                heading="Contact Us"
                img="/vr1.jpg"
                display="none"
                text="For any questions or troubleshooting you can always contact us at:"
                text2="coldenwebdev@gmail.com"
            />
        </Layout>
    )
}

export default contactUs