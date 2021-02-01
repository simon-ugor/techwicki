import Footer from "./Footer"
import Image from "next/image"

const ArticleStructure = (props) => {
    return (
        <div className="article-structure-div">
            <div className="article-desktop">
            <h2 className="article-structure-heading">{props.heading}</h2>
            <h3 className="article-structure-subheading">{props.subheading}</h3>
            <p className="article-structure-paragraph">{props.text}</p>
            <div style={{marginTop: "2vh"}} className="article-image-div">
                <Image
                    src={props.img}
                    alt="Instagram Image"
                    width={640}
                    height={426}
                />
            </div>
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
            </div>
            <Footer />
        </div>
    )
}

export default ArticleStructure