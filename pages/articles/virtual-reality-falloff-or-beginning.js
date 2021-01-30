import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const vrFalloff = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Virtual Reality - falloff or beginning?</title>
                    <meta name="description" content="After discussing some of the most common use-cases of VR, the question arises, is this only the beginning and should companies do more research and development to make VR even better or should it be replaced with new and better technology instead? What are advantages and disadvantages of VR?" />
                </Head>
                <ArticleStructure
                    heading="VR - falloff or only the beginning?"
                    text="After discussing some of the most common use-cases of VR, the question arises, is this only the beginning and should companies do more research and development to make VR even better or should it be replaced with new and better technology instead? That depends on many factors and from point of view as well."
                    subheading2="Advantages"
                    text2="Doesn’t matter if we are talking about VR as an entertaining device, or device for education or medical use, VR is a big technological step forward. Simply because it is not perfect doesn’t mean it is not useful. Really wide use - from daily entertainment source to curing people from mental disorders and raising future doctors - can only show us how useful VR technologies can be and that there is no reason to not use these advantages. Of course, it doesn’t mean companies shouldn’t focus on devel- oping new and better technologies but also doesn’t mean they should stop investing into Virtual Reality research."
                    subheading3="Disadvantages"
                    text3="In previous topic, I have mentioned all the side effects that are connected with VR usage. We can easily compare these side effects to devices we use on a daily basis, for example smartphones, tablets or laptops may cause same side effects as VR does."
                    subheading4="Misuse of VR"
                    text4="To continue the comparison with devices we use every day, same as every men- tioned device, VR can also be misused. Every use-case and advantage can be turned into unethical and harmful misuse. Using VR to treat patients from phobias can probably be switched around and used to cause phobias instead or using virtual rooms for education can be switched around and used to spread fake news or any misleading information. I haven’t found (luckily) any experiments with Virtual Reality to cause people any phobias or PTSD, but if VR is held in wrong hands, it probably can be done. To keep it short and simple, it doesn’t make much sense to dig deeper into this because every other technology can be misused if held in the wrong hands. Also, this should not be considered as a disadvantage of VR."
                />
            </Layout>
        </div>
    )
}

export default vrFalloff