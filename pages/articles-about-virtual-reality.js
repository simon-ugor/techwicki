import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import articles from "../data/articles.js"
import Article from "../components/Article.js"
import Footer from "../components/Footer"

const articlesAboutVR = () => {

    const [data, setData] = useState([...articles])

    useEffect(() => {
        setData((data) => data.filter((item) => item.category === "VR"))
    }, [])
    

    return (
        <Layout>
            <div className="content-main-div">
                <div className="categories-div">
                    <div className="desktop-categories-div">
                    <h1 className="articles-heading">Articles about VR</h1>
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

export default articlesAboutVR