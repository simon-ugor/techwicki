import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const isWebScrapingLegal = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Is Web Scraping Legal?</title>
                    <meta name="description" content="Web scraping, in other words web harvesting or web data extraction is extracting data from the World Wide Web. What are the best tools for web scraping?" />
                </Head>
                <ArticleStructure
                    heading="Is Web Scraping Legal?"
                    text="This question is not so easy to answer. Web scraping by itself is not illegal, yet the problem comes when people use it without the site owner’s permission and/or disregard of the Terms of Service. Some studies state, that approximately 2% of online revenues can be lost due to the misuse of content because of web scraping. Despite the fact web scraping doesn’t have a clear law and terms to address its application, it is encompassed with other legal regulations. To make this clear, it is perfectly legal if you scrape data from websites for public consumption and use it for analysis. However, it is not legal if you scrape confidential information for profit. Most common form of illegal web scraping is scraping private contact information without permission and sell them to 3rd party for profit. It is not only important to know what data are you scraping but also how are they going to be used, or misused."
                    img="/ws2.jpg"
                    subheading2="Is Web Scraping ethically correct?"
                    text2="Well, after reading about legality of web scraping, I believe you can form you own opinion. It has been described pretty clearly and law connects to ethics well in this case. If you have permission or you are not violating any terms, there is no reason to consider web scraping ethically incorrect. On the other hand, if you violate terms of use, scrape personal data and use them for your profit, I am safe to say this is not only illegal, but also ethically incorrect."
                />
            </Layout>
        </div>
    )
}

export default isWebScrapingLegal