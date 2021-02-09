import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const whatIsWebScraping = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>What is Web Scraping?</title>
                    <meta name="description" content="Web scraping, in other words web harvesting or web data extraction is extracting data from the World Wide Web. What are the best tools for web scraping?" />
                </Head>
                <ArticleStructure
                    heading="What is Web Scraping?"
                    text="Web scraping, in other words web harvesting or web data extraction is extracting data from the World Wide Web. Simply said, web scraping software may access the World Wide Web and take any data accessible on public webpages. So, what is the difference between this and just copy and paste? Big advantage of web scraping is the automation and I would consider this as the main difference. While you might just copy and paste some data you need, with bigger amount of data web scraping simplifies this a lot. If done right, with small amount of code you can extract huge amount of valuable data. In any field data can be very valuable and useful. For example, in fields like statistics, marketing or even IT success can be based on amount of information or data we have access to. There are a few questions we can ask to evaluate if the data is valuable or not. What type of data is it? How workable is the data? Does the data drive business? With these questions I am just trying to point out that web scraping is not just about extracting as many data as we can. No one wants to have a ton of useless data. Simply said, the more time and effort is spent on a specific web scraping software the better. Usually you want to scrape data on given topic, not just some random information. But it doesn’t end with web scraping only. With this being said, next most relevant topic would be data processing."
                    img="/ws1.jpg"
                    subheading2="Data Processing"
                    text2="So, you successfully scraped lots of useful data on some topic? What’s next? Well, data processing is the answer. What is data processing? It is a process of translating collected data into usable and meaningful information. When data scraping, people collect various typed of data, usually not being very organized and easy to read. That’s why data processing is so important and directly connected to web scraping. No one likes to read through unorganized data that is difficult to read. In fact, data processing covers it all and we may say web scraping is part of data processing. There are 4 main stages of data processing: data collection, data input, data processing and data output. The first stage, data collection, is the stage where discussed web scraping fits into. We have already defined data processing stage and data output is usually where meaningful and easy to read information is being outputted. While some sources mention 6 stages of data processing (collection, preparation, input, processing, output and storage), most important stages for our understanding of web scraping and data processing were already mentioned."
                    subheading3="What tools can you use?"
                    text3="Did you decide you want to try web scraping yourself? Now is the right time to pick the best tool to use. So, what are the best and most useful tools for data scraping? Well that depends on quite a few factors. Most important question to answer would be if you are a coder or non-coder. For coders, web scraping can be done in many programming languages with lots of useful libraries. Many sources list many different languages, most common are Python, Java, C & C++, Ruby, Node.js and a lot more. Some useful libraries (for Python) would be Requests, Beautiful Soup, Scrapy or Selenium. Also, for non-coders there is wide range of tools to use like Scrapingbee, Octoparse or Xtract. I will not dig deeper in best technologies to use for best scraping because it mostly depends on personal preferences of person performing web scraping. But is web scraping legal? If so, is it ethically correct to perform such web scraping? If you are interested in getting these questions answered feel free to read our next article on web scraping."
                />
            </Layout>
        </div>
    )
}

export default whatIsWebScraping