import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const whatIsVR = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>What is Virtual Reality</title>
                    <meta name="description" content="Definition of Virtual Reality. What is VR and what is the difference between Virtual Reality and Augmented Reality?" />
                </Head>
                <ArticleStructure
                    heading="What is Virtual Reality?"
                    text="Simply said, VR is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surround-ings. This environment is usually perceived through a device known as a Virtual Reality headset or helmet."
                    subheading2="Virtual Reality vs Augmented Reality"
                    text2="Despite the term Virtual Reality originated decades ago, it is still quite common a lot of people mix concept of VR with AR (Augmented Reality). So, what is the dif-ference? The biggest distinction between these two is, that VR builds the world in which we immerse ourselves through specific headset. It is fully immersive and everything we see is part of an environment artificially constructed through imag-es, sounds, etc. On the other hand, in AR, our own world becomes the place in which object or images are places. It may not be necessary to wear a headset or helmet and everything we see is in a real environment. Most mainstream exam-ple of AR is Pokémon Go. It is a game where imaginary creatures called Poké-mon are placed into the real-world environment with use of your phone’s camera. No headset or helmet is required for this. However, there is also a combination of both realities called mixed reality. This hybrid technology makes it possible to see virtual objects in the real world and build an experience in which the physical and the digital are practically indistinguishable."
                />
            </Layout>
        </div>
    )
}

export default whatIsVR