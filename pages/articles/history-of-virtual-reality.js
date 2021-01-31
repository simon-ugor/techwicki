import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const historyOfVR = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>History of Virtual Reality</title>
                    <meta name="description" content="We first have to define what Virtual Reality is, how Virtual Reality works and what is the history of Virtual Reality." />
                </Head>
                <ArticleStructure
                    heading="History of Virtual Reality"
                    subheading="Introduction"
                    text="If we want to talk about Virtual Reality, we first have to define what VR actually is. Where does it came from and how does it work? I would like to start from the very beginning and slowly move on to present time defining the use-cases of VR and if the technology is even worth of investing more research into it."
                    subheading2="History of VR"
                    text2="In 1950s Morton Heilig wrote of an “Experience Theatre” that could use all the senses in an effective manner, thus drawing the viewer into the onscreen activity. That is most probably the first mention of idea connected with our term Virtual Reality. He also built a prototype of his vision in 1962 together with five short films to be displayed in it while engaging multiple senses. Senses he was aiming to engage were sight, sound, smell and touch. Without power of digital compu-ting, his device called Sensorama was a fully mechanical device. Later in 1968, Ivan Sutherland and his student Bob Sproull created what was widely considered to be the first head-mounted display system for use in simulation applications. It was really simple in terms of user interface (UI) and visual realism. The big prob-lem with the device was, that it was so heavy it had to be suspended from the ceiling. By the 1980s the term virtual reality was popularized by Jaron Lanier who founded the company VPL Research and developed several VR devices. In 1990s there was the first widespread commercial releases of consumer head-sets. A large amount of well-known companies began to spend more time in VR research and release they first devices. "
                    subheading3="21st century"
                    text3="In 21st century VR continued to develop into a stage we know it today. 2007, Google introduced Street View, a service that shows panoramic views of an in-creasing number of worldwide positions such as roads, indoor buildings and ru-ral areas. It also features stereoscopic 3D mode, introduced in 2010. Year 2010 also brought the first prototype of popular Oculus Rift which was later in 2014 purchased by Facebook. In the same year, 2014, Sony announced Project Mor-pheus, code name for the PlayStation VR. This is a VR headset for the PlayStation 4 video game console which from my point of view is the most widely used headset used for entertainment purposes. By 2016, there were at least 230 companies developing VR-related products. Big companies like Amazon, Apple, Facebook, Google, Microsoft, Sony and Samsung had all focused on VR devel-opment and continued moving forward until present days."
                />
            </Layout>
        </div>
    )
}

export default historyOfVR