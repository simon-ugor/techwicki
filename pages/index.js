
import { useEffect, useState } from "react"
import Article from "../components/Article.js"
import Category from "../components/Category.js"
import Layout from "../components/Layout.js"

import categories from "../data/categories.js"
import articles from "../data/articles.js"
import Footer from "../components/Footer.js"

const index = () => {

    const [cat, setCat] = useState([...categories])
    const [art, setArt] = useState([...articles])

    useEffect(() => {
        setArt((art) => art.filter((item) => item.top === "top"))
    }, [])

    return (
        <Layout>
            <div className="content-main-div">
                <div className="categories-div">

                    <div>
                        <h1 className="categories-heading">Categories</h1>
                        <div className="cats">

                        
                            {cat.map(d => {
                                return <Category bg={d.bg} key={d.heading} heading={d.heading} link={d.link} />
                            })}
                        </div>
                    </div>
                    
                    <div>
                        <h1 className="articles-heading">Top Articles</h1>
                        <div className="arts">
                        
                            {art.map(d => {
                                return <Article key={d.heading} heading={d.heading} link={d.link} />
                            })}
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default index