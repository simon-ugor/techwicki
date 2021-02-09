import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import articles from "../data/articles.js"
import Article from "../components/Article.js"
import Footer from "../components/Footer"
import Head from "next/head"

const articlesAboutReact = () => {

    const [data, setData] = useState([...articles])

    useEffect(() => {
        setData((data) => data.filter((item) => item.category === "JS"))
    }, [])
    

    return (
        <Layout>
            <Head>
                <title>ReactJS</title>
                <meta name="description" content="What is ReactJS, how does it work and what are React Hooks? Read our articles to find out more." />
            </Head>
            <div className="content-main-div">
                <div className="categories-div">
                    <div className="desktop-categories-div">
                    <h1 className="articles-heading">Articles about ReactJS</h1>
                        {data.map(d => {
                            return <Article key={d.heading} heading={d.heading} link={d.link} />
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default articlesAboutReact