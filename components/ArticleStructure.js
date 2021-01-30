import Footer from "./Footer"

const ArticleStructure = (props) => {
    return (
        <div className="article-structure-div">
            <h2 className="article-structure-heading">{props.heading}</h2>
            <h3 className="article-structure-subheading">{props.subheading}</h3>
            <p className="article-structure-paragraph">{props.text}</p>
            <h3 className="article-structure-subheading">{props.subheading2}</h3>
            <p className="article-structure-paragraph">{props.text2}</p>
            <h3 className="article-structure-subheading">{props.subheading3}</h3>
            <p className="article-structure-paragraph">{props.text3}</p>
            <h3 className="article-structure-subheading">{props.subheading4}</h3>
            <p className="article-structure-paragraph">{props.text4}</p>
            <h3 className="article-structure-subheading">{props.subheading5}</h3>
            <p className="article-structure-paragraph">{props.text5}</p>
            <h3 className="article-structure-subheading">{props.subheading6}</h3>
            <p className="article-structure-paragraph">{props.text6}</p>
            <Footer />
        </div>
    )
}

export default ArticleStructure