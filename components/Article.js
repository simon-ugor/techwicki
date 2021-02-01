
import Link from "next/link"
import Image from "next/image"

const Article = (props) => {
    return (
        <Link href={props.link}>
            <a className="article-main-div">
                <div className="article-image">
                    <Image
                        src="/article.png"
                        alt="Article Image"
                        width={47}
                        height={47}
                    />
                </div>
                <div className="article-name">
                    <h2>{props.heading}</h2>
                </div>
            </a>
        </Link>
    )
}

export default Article