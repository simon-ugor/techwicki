import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import articles from "../data/articles.js"
import Article from "../components/Article.js"
import Footer from "../components/Footer"
import Head from "next/head"

const articlesAboutWebScraping = () => {

    const [data, setData] = useState([...articles])

    useEffect(() => {
        setData((data) => data.filter((item) => item.category === "WS"))
    }, [])
    

    return (
        <Layout>
            <Head>
                <title>Web Scraping</title>
                <meta name="description" content="What is Web Scraping? Is Web Scraping legal and is it ethically correct?" />
            </Head>
            <div className="content-main-div">
                <div className="categories-div">
                    <div className="desktop-categories-div">
                    <h1 className="articles-heading">Web Scraping</h1>
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

export default articlesAboutWebScraping