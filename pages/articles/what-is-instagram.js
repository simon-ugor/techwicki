import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const whatIsInstagram = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>What is Instagram</title>
                    <meta name="description" content="First of all, what even is Instagram, why most of us use it and what is the history of Instagam? Let’s dive in ang begin with a overview about Instagram." />
                </Head>
                <ArticleStructure
                    heading="What is Instagram?"
                    subheading="Introduction"
                    text="First of all, what even is Instagram and why most of us use it? Let’s dive in ang begin with a overview about Instagram."
                    subheading2="What is Instagram?"
                    text2="Simplest answer for this question would be that Instagram is social network service. Despite the fact that this answer is correct it doesn’t tell us much about how Insta- gram works. Instagram (commonly abbreviated to IG or Insta) was created by Kevin Systrom and Mike Krieger and was launched in October 2010 for iOS and April 2012 for Android. IG is based on sharing photos and videos among your followers. These are called posts and they can be shared publicly or with pre-approved followers. Media that can be edited with filters and organized by hashtags and geographical tagging. Originally, IG only allowed users to post content framed in square, 1:1 as- pect ratio with 640 pixels to match the display width of the iPhone at the time. In 2015, these restrictions were eased with an increase to 1080 pixels."
                    subheading3="History of Instagram"
                    text3="As I already mentioned, Instagram was launched in October 2010 for iOS and in April 2012 for Android. Later, in November 2012 a feature-limited desktop interface was released followed by a Fire OS app in June 2014 and app for Windows 10 in October 2016. On April 9 2012, Facebook bought Instagram for $1 billion in cash and stock, with a plan to keep company independently managed. In November 2012 IG launched website profiles, allowing anyone to see user feeds from a web browser with limited functionality. Over time Instagram kept growing, upgrading its function- ality and adding new features until reaching the form we know and use today."
                />
            </Layout>
        </div>
    )
}

export default whatIsInstagram