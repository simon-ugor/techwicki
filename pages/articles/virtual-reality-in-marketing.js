import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const vrInMarketing = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Virtual Reality in Marketing</title>
                    <meta name="description" content="Most common use of VR in marketing are virtual tours and real-time product demos. Read more to find out how exactly companies use VR as a marketing tool." />
                </Head>
                <ArticleStructure
                    heading="VR in Marketing"
                    text="Most common use of VR in marketing are virtual tours and real-time product demos. For example, in 2016, Oreo ran a fun VR marketing campaign that transported view- ers into the magical land of milk rivers and filled cupcake-flavored Oreo biscuits, the brand’s latest creation. It is considered as one of the most useful ways to convince a customer to buy a product, to allow them to use or see it in real-time and see how it looks and works. From manufacturing and packaging to interior design, busi- nesses can use VR to give consumers a demo of the product, to understand better what goes into making it. Other great example of this is Lowe’s home improvement store, which sets up a Virtual Reality experience for customers who want to see how their homes would look after renovating their decor and furniture. Similarly, IKEA also provides its customers with a VR application where they can place furniture from the store in different places in their homes to see whether it looks good or not."
                    img="/marketing.jpg"
                />
            </Layout>
        </div>
    )
}

export default vrInMarketing