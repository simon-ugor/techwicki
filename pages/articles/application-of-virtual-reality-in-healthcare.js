import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const vrInHealthcare = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Virtual Reality in Healthcare</title>
                    <meta name="description" content="Application of Virtual Reality in Healthcare as a simulation tool and as an interaction tool. How is VR used to help people?" />
                </Head>
                <ArticleStructure
                    heading="VR in Healthcare"
                    text="There are two different focuses of VR in healthcare – VR as a simulation tool and VR as an interaction tool. Physicians and surgeons mainly use VR as a simulation tool, while in behavioral medicine the interaction focus predominates. In the field of healthcare, VR techniques has wide applications ranging from diagnosis, treatment, counseling and rehabilitation to designing hospitals. VR can be also used for education and instruction in medical, dental, nursing and paramedical schools where students can acquire knowledge of human body in a virtual environment but I would like to leave this for a different topic in this writing."
                    img="/healthcare.jpg"
                    subheading2="VR for physicians and surgeons"
                    text2="In this field VR is mostly being used as an educational tool. Students can interact with and examine a virtual patient and learn skills which they can apply in the real world. Students can perform procedures and even surgery on a virtual patient in a safe and controlled environment. Because this all can be considered as an education we will now move one and learn more about this topic in future articles."
                    subheading3="Uses of Virtual Reality in psychiatry"
                    text3="VR is being used in conjunction with counseling and cognitive behavior therapy for the treatment of addictions. The scenario where addiction behavior is very likely to occur is replicated using VR, so that the counselor can observe their behavior and reaction to it. This information is used to plan appropriate therapy. The effectiveness of VR has been also verified in the treatment of acrophobia (phobia of heights), spider phobia, panic disorder and agoraphobia (anxiety disorder characterized by symptoms of anxiety when the person perceives their environment to be unsafe), body image disturbances, eating disorders and fear of flying. These methods have been also tested and found useful in treatment of social phobia, claustrophobia (fear of confined spaces), trypanophobia (fear of medical procedures), tonitrophobia (fear of storms and/or thunderstorms), and fear of driving. The other uses of VR are applications in the treatment of posttraumatic stress disorder (PTSD). With use of Virtual Reality technology, the patient is exposed to the source of their disorder, for example, a battlefield. Exposing the patient to the source of their condition combined with relaxation training will enable them to adapt to the stress."
                />
            </Layout>
        </div>
    )
}

export default vrInHealthcare