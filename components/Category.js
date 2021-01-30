
import Link from "next/link"

const Category = (props) => {
    return (
        <Link href={props.link}>
            <div className="category-main-div">
                <h2 className="category-heading">{props.heading}</h2>
                <p className="category-description">{props.description}</p>
                <div id={props.bg} className="bg-div"></div>
            </div>
        </Link>
    )
}

export default Category