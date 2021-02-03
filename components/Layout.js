import { useState } from "react"
import Header from "./Header"
import Link from "next/link"
import Articles from "../data/articles.js"
import Article from "./Article"

const Layout = (props) => {

    const [data, setData] = useState([])

    const [mainDisplay, setMainDisplay] = useState("")
    const [menuDisplay, setMenuDisplay] = useState("none")
    const [searchDisplay, setSearchDisplay] = useState("none")
    const [searchClick, setSearchClick] = useState(false)

    const handleMenuClick = () => {
        setMainDisplay("none")
        setSearchDisplay("none")
        setSearchClick(false)
        setMenuDisplay("")
    }

    const menuCloseClick = () => {
        setMenuDisplay("none")
        setMainDisplay("")
    }

    const handleSearchClick = () => {
        if (searchClick === false) {
            setSearchClick(true)
            setSearchDisplay("")
        } else if (searchClick === true) {
            setSearchClick(false)
            setSearchDisplay("none")
        }
    }

    const searchCloseClick = () => {
        setSearchDisplay("none")
        setSearchClick(false)
    }

    const handleSearch = (e) => {
        if (e.target.value !== "" && e.target.value !== " ") {
            setData(Articles.filter(item => {
                return item.heading.toLowerCase().includes(e.target.value.toLowerCase())
            }))
        } else {
            return ""
        }
    }

    const all = data.map(d => {
        return <Article key={d.heading} heading={d.heading} link={d.link} />
    })

    return (
        <div>
            <div style={{display: mainDisplay}}>
                <Header menuClick={handleMenuClick} searchClick={handleSearchClick} />
                {props.children}
            </div>

            <div className="menu-div" style={{display: menuDisplay}}>
                <div className="close-div">
                    <button onClick={menuCloseClick} className="x-button">x</button>
                </div>
                <ul className="menu-list">
                    <Link href="/"><a className="list-element">&#x2022; Homepage</a></Link>
                    <Link href="/aboutus"><a className="list-element">&#x2022; About Us</a></Link>
                    <Link href="/contactus"><a className="list-element">&#x2022; Contact Us</a></Link>
                    <Link href="/termsofuse"><a className="list-element">&#x2022; Terms of Use</a></Link>
                    <Link href="/privacypolicy"><a className="list-element">&#x2022; Privacy Policy</a></Link>
                </ul>
            </div>
            <div className="search-main-div" style={{display: searchDisplay}}>
                <div className="search-div">
                <input onChange={handleSearch} className="input-box" type="text" placeholder="Search articles"></input>
                <button onClick={searchCloseClick} className="x-button-search">x</button>
                </div>
                <div className="categories-search-div">
                    {all.slice(0, 9)}
                </div>
            </div>
        </div>
    )
}

export default Layout