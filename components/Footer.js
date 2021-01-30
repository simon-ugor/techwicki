
import Link from "next/link"

const Footer = () => {
    return (
        <div>

            <div className="footer-main-div">
                <p className="mobile">Copyright © 2021, techwicki.com</p>
                <Link href="/"><a className="desktop-footer">Homepage</a></Link>
                <Link href="/aboutus"><a className="desktop-footer">About Us</a></Link>
                <Link href="/contactus"><a className="desktop-footer">Contact Us</a></Link>
                <Link href="/termsofuse"><a className="desktop-footer">Terms of Use</a></Link>
                <Link href="/privacypolicy"><a className="desktop-footer">Privacy Policy</a></Link>
            </div>

        </div>
    )
}

export default Footer