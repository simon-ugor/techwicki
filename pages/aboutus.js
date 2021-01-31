import Layout from "../components/Layout"
import Head from "next/head"
import ArticleStructure from "../components/ArticleStructure"

const aboutUs = () => {
    return (
        <Layout>
            <Head>
                <title>About TechWicki</title>
                <meta name="description" content="TechWicki is web page providing articles about multiple topics in tech industry. You can always learn something new in our articles. Pick a topic you enjoy and dive deep into it in structure of writings about given topic." />
            </Head>
            <ArticleStructure 
                heading="About Us"
                text="TechWicki is web page providing articles about multiple topics in tech industry. You can always learn something new in our articles. Pick a topic you enjoy and dive deep into it in structure of writings about given topic. As of right now, all articles are created by the same person who developed this website. If you are interested in providing any article you have written, we will be glad to feature it on our web page with full credits to the you. Feel free to send it here:"
                text2="Feel free to send your articles here:"
                text3="coldenwebdev@gmail.com"
            />
        </Layout>
    )
}

export default aboutUs