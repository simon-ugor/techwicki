import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const vrInEducation = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Virtual Reality in Education</title>
                    <meta name="description" content="Most promising and effective education scenario is a one-on-one tutoring system. This scenario considers a one-on-one setting involving a teacher and one student. The main objective is to improve student’s learning experience." />
                </Head>
                <ArticleStructure
                    heading="VR in Education"
                    subheading="One-on-one tutoring system"
                    text="Most promising and effective education scenario is a one-on-one tutoring system. This scenario considers a one-on-one setting involving a teacher and one student. The main objective is to improve student’s learning experience. The free exploration method should be enhanced by allowing a teacher to guide the student in a shared virtual environment. The teacher should be able to help the student to navigate through the virtual world in order to find structures, as well as give explanations using annotations and also support the student if questions arise. Of course, both student and a teacher will be required to have a fully immersive VR headset and network connection in order to synchronize information."
                    subheading2="COVID-19 education possibilities"
                    text2="In the times of Coronavirus spreading across the world, most of schools and univer- sities were required to close their facilities and switch to online learning. VR tech- nologies can offer big amount of solutions and improvements for online learning. Absent face-to-face contact between teacher and students can be easily fixed with use of Virtual Reality. Problem is, in this solution, there is far more disadvantages than advantages. All the downsides make it pretty much impossible or extremely difficult and unhealthy to hold long-term virtual sessions. Online learning as we know it right now is already considered unhealthy, not even talking about having a VR headset on for many hours with consideration of all its side effects."
                    subheading3="Side effects of Virtual Reality"
                    text3="The major side effect of this technology is VR-inducted sickness which can present with dizziness, nausea, headache, eye strain, reduced limb control, deuced postural control, decreased sense of presence and the development of responses inappro- priate to the real world. People who develop seizures when watching television or playing video games, should not be exposed to VR at all."
                />
            </Layout>
        </div>
    )
}

export default vrInEducation