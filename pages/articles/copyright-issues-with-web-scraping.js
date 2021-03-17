import Head from "next/head"
import Footer from "../../components/Footer"
import Layout from "../../components/Layout"
import Image from "next/image"

const CopyrightWebScraping = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Copyright issues with web scraping</title>
                    <meta name="description" content="How to create new NextJS project? There are multiple ways to go about creating a NextJS project. Easiest way to get started is by typing npx create-next-app in your terminal. Created template by using NodeJS npx create-next-app might be confusing for beginners. So how do you create NextJS app from scratch?" />
                </Head>
                <div className="article-structure-div">
                    <div className="article-desktop">
                        <h2 className="article-structure-heading">Copyright issues with web scraping</h2>
                        <p className="article-structure-paragraph">As already mentioned, we have to be careful when it comes to web scraping so we don’t run into any legal issues. Sometimes it can get difficult to tell what content is legal to scrape and what content is not. But how do we differentiate this and what is causing legal issues when it comes to web scraping? Usually, these legal issues can be caused by copyright. Copyrighted content is considered illegal to scrape with intentions to use it for yourself and might be considered as stealing. So, what is this copyright?</p>

                        <div style={{marginTop: "2vh"}} className="article-image-div">
                            <Image
                                src="/copyright.jpg"
                                alt="VS Code"
                                width={640}
                                height={427}
                            />
                        </div>

                        <h3 className="article-structure-subheading">Copyright</h3>
                        <p className="article-structure-paragraph">Copyright is basically just what it sounds like, it is the right to copy. It refers to the legal right of the owner of intellectual property. This means that the original creators of products and anyone they give authorization to are the only ones with the exclusive right to reproduce the work. All sorts of content are eligible for copyright protection. Some examples are Audiovisual work (TV shows, movies, online videos), sound recordings (musical compositions), written work (lectures, articles, books), visual works (paintings, posters, advertisements), videos games, computer software and dramatic works such as plays and musicals. In some cases, it is possible to use copyright-protected work without violating the owner’s copyright. Some workarounds might me to give credit to the copyright owner or purchasing the content including a hard or digital copy. Of course, this depends on many factors and different cases might legal or illegal with different work and content creators.</p>
                        <h3 className="article-structure-subheading">Copyright vs Trademark</h3>
                        <p className="article-structure-paragraph">We have already stated what copyright is and what it means for content producers or web scrapers. But what is the difference between copyright and trademark? A trademark is a unique symbol, word or words used to represent a business or its products. Once registered, that same symbol or series of words cannot be used by any other organization. Copyright is just one form of intellectual property. It is not the same as trademark, which protects brand names, mottos, logos, and other source identifiers from being used by other for certain purposes. It is also different from patent law, which protects inventions.</p>
                        <h3 className="article-structure-subheading">Questionable content</h3>
                        <p className="article-structure-paragraph">Many web scrapers take use of content that is difficult to state if is copyrighted or not or is very difficult or impossible to control. One example may be lyrics (text of songs). There is countless amount of web pages providing lyrics content to its users such as <a style={{color: "black"}} href="https://coldenlyrics.com/" target="_blank">ColdenLyrics</a>, <a style={{color: "black"}} href="https://genius.com/" target="_blank">Genius</a>, <a style={{color: "black"}} href="https://www.metrolyrics.com/" target="_blank">MetroLyrics</a> and many more. We have already mentioned that this type of work is eligible for copyright but how to control this? Some artists even want these web pages to mention their lyrics as a form of advertisement. It is basically a win-win situation. Lyrics web pages such as <a style={{color: "black"}} href="https://genius.com/" target="_blank">Genius</a>, <a style={{color: "black"}} href="https://coldenlyrics.com/" target="_blank">ColdenLyrics</a> etc. get visitors and artists get recognition and provide their fans text to sing. But are these web pages paying for this content? There is a big chance that these web pages are simply scraping content from one another and using it. Another example might be price comparison tools and websites. Scraping content from e-shops and providing comparison of these pricing, quality and many other factors to end consumer. Also, probably not paying for the content, simply because it might be not eligible for copyright or is extremely difficult to control. Another a win-win situation as they may promote e-shops which in the end is good for both sides.</p>
                        <h3 className="article-structure-subheading">Conclusion</h3>
                        <p className="article-structure-paragraph">After reading this article, there is a chance you might be even more confused what to scrape and what rather not. You came looking for answers and didn’t find any. So here is one. Internet is a huge place with regulations very difficult to control. It may vary from situation if it is alright to scrape given content or not. Always make sure you think twice when web scraping and be aware of consequences.</p>
                        <p style={{marginBottom: "2vh"}} className="article-structure-paragraph">Happy scraping!</p>
                    </div>
                    <Footer />
                </div>
            </Layout>
        </div>
    )
}

export default CopyrightWebScraping