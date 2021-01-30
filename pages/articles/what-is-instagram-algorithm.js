import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const whatIsinstagramAlgorithm = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>What is Instagram Algorithm</title>
                    <meta name="description" content="What is this Instagram algorithm and why does it exist? In the simplest form it is an algorithm that is meant to prioritize in the feed based on what it thought each user wanted to see." />
                </Head>
                <ArticleStructure
                    heading="What is IG Algorithm?"
                    text="So, what is this algorithm and why does it exist? In the simplest form it is an algo- rithm that is meant to prioritize in the feed based on what it thought each user wanted to see. The exact equation that Instagram uses for its algorithm is unknown, but it’s clear that it takes two things into account to sort an individual users’ feed: Relevance (evaluated by which profiles and posts users interact with) and Engagement (calcu- lated by likes, comments, shares and saves). I will talk about these more in following parts of this writing but first, what is the point of this algorithm? Well, that is pretty obvious, from Instagram’s point of view it is to keep users as long on their platform as possible by showing them content they enjoy. When you look at it like that, it is really a great solution for both, users and Instagram owners. Obviously, when I visit Instagram I am looking to see content from my friends, family and hobbies I have and enjoy, no one would like feed full of random content. But it is way more powerful than it sounds and our original question is not easy to answer so let’s dive deeper."
                />
            </Layout>
        </div>
    )
}

export default whatIsinstagramAlgorithm