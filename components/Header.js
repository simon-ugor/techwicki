import Image from "next/image"
import Link from "next/link"

const Header = (props) => {

    const handleSearchClick = () => {
        props.searchClick()
    }

    const handleMenuClick = () => {
        props.menuClick()
    }

    return (
        <div className="header-main-div">
            <div className="left">
                <Image 
                    src="/search.png"
                    alt="Search"
                    width={28}
                    height={28}
                    onClick={handleSearchClick}
                    className="image"
                />
            </div>
            <div className="middle">
                <Image
                    src="/logo1.png"
                    alt="Logo"
                    width={142}
                    height={35}
                />
            </div>
            <div className="right">
                    <Image 
                        src="/menu.png"
                        alt="Menu"
                        width={30}
                        height={30}
                        onClick={handleMenuClick}
                    />
            </div>
            <div className="desktop-right"></div>
        </div>
    )   
}

export default Header