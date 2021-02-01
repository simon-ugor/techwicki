import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const isInstagramBiased = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Is IG Algorithm biased?</title>
                    <meta name="description" content="Is Instagram Algorithm biased? In the latest studies, Instagram’s internal analysis found that their algorithm makes Black users 50% more likely to have their accounts disabled." />
                </Head>
                <ArticleStructure
                    heading="Is IG Algorithm biased?"
                    text="We already defined how Instagram works and how Instagram Algorithm works, the only thing we need to define now to be hopefully able to answer our question is, what biased actually means. Term bias can be widely used, so from which point of view are we looking at this issue?"
                    img="/instagram4.jpg"
                    subheading2="What does it mean to be biased?"
                    text2="“Unreasonably hostile feelings or opinions about a social group”, “inclination or prejudice for or against one person or group, especially in a way considered to be unfair” and many other definitions to define this term. While these definitions are all correct, we need to be more specific about what kind of bias are we looking for. There is really insufficient amount of material to use in case of Instagram Algorithm bias so I will put together my experiences and knowledge with articles I was able to found (mentioned in list of references) to form a clear idea if IG Algorithm should be considered biased or not. This part will be split into two main categories, Bias considering famous people and Ethnic bias."
                    subheading3="Bias considering famous people"
                    text3="It is pretty easy to notice celebrities getting millions of likes and comments on the platform while many people trying to grow their personal accounts from scratch (from the beginning, without using anything that already exists) ending up unsuccessful. This might be obvious because of the fan base these celebrities are bringing into the platform already with them, it is not the only reason. Instagram Algorithm judges posts based on engagement (mostly in the first hour after posting), meaning the more likes, comments, shares and saves a post gets in the first hour, the more people will it be shown to. This means IG Algorithm really plays in favor of people already being famous causing, they are only becoming more famous while playing against non-famous people trying to form their audience or fan base. If you look at it from this point of view you might simply said Instagram Algorithm is biased against people trying to grow their accounts from the scratch. But let me correct the overall question we are asking here. Better question here would be if this should even be considered as a bias and not if IG Algorithm is biased. This may depend from everyone’s personal opinion, for me this should not be considered as a form of bias."
                    subheading4="Ethnic bias"
                    text4="In the latest studies, Instagram’s internal analysis found that their algorithm makes Black users 50% more likely to have their accounts disabled. So, if you are looking for the simplest possible answer to our question if IG Algorithm is ethnically biased, it would be yes, Instagram algorithm is ethnically biased. But it doesn’t end there. Instagram has formed a new “equity and inclusion” team to study how Black, Hispanic and other minority users in the U.S. are affected by its algorithm. Its parent company, Facebook, is creating a similar team to look at its platform. Instagram officials tweaked the parameters to reduce the possible effects of Black, Hispanic or other minority users’ accounts getting blocked or banned. Following the #BlackLivesMatter protests, Instagram have pledged to do better to promote diversity on their platform. Again, people diversify their opinions, one group gladly accepting the changes, other groups only talking about PR during the critical #BlackLivesMatter protests playing in Instagram’s favor. With the lack of clarity and knowledge about how exactly Instagram Algorithm works, because Instagram, of course, cannot reveal too much, we can only guess and form our opinions if this is a step into the right direction or only propagation. As far as Instagram refusing the fact that their algorithm might be biased in the past, changing into Instagram quietly admitting algorithm bias sounds like a good beginning to me. Of course, this bias is not voluntary but it has been felt by a variety of communities, so answer to our question is now pretty obvious."
                />
            </Layout>
        </div>
    )
}

export default isInstagramBiased