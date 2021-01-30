import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const howAlgorithmWorks = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>How Instagram algorithm works</title>
                    <meta name="description" content="How does Instagram algorithm works? What hides behind this IG algorithm? Read more in this article about Instagram Algorithm." />
                </Head>
                <ArticleStructure
                    heading="How IG Algorithm works"
                    text="For clear understanding, let me put this in an example. When user first creates a new IG account, he/she is presented with all kinds of content. Let’s say our user is a big fan of extreme sports and from all the content Instagram presented him/her with, he will most engage (like, comment, share and save) with this type of content. Instagram Algorithm notices it and decides to show this user more of the content he enjoys so he stays longer on the platform. To present our user with the best quality extreme sports content Instagram Algorithm is required to somehow pick and choose from all the content including extreme sports only the best. But how? Again, this points us to over and over discussed likes, comments, shares and saves. Simply said, the more engagement a post has, the more users will it be shown to. Let me also make it clear that IG Algorithm is changing a lot, Instagram is trying to improve their algorithm all the time which may result in multiple algorithmic changes in a short time period. Also, IG Algorithm behaves differently with feed posts, IGTV videos, Reels and Stories. Maybe, for better understanding of this algorithm, it would be better not trying to explain it, rather implement it."
                />
            </Layout>
        </div>
    )
}

export default howAlgorithmWorks