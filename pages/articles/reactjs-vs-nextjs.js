import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const ReactjsVsNextjs = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>ReactJS vs NextJS</title>
                    <meta name="description" content="What is NextJS and what is the difference between ReactJS and NextJS? NextJS is a framework for ReactJS developed by Vercel and open-source community. NextJS is based on React, Webpack and Babel. It is very simple to use and offers many big advantages, where the biggest trump card might be server-side rendering." />
                </Head>
                <ArticleStructure
                    heading="ReactJS vs NextJS"
                    subheading="What is NextJS?"
                    text="What is NextJS and why is it interesting in the first place? NextJS is a framework for ReactJS developed by Vercel and open-source community. NextJS is based on React, Webpack and Babel. It is very simple to use and offers many big advantages, where the biggest trump card might be server-side rendering. In this article you will learn what NextJS is, why would you use it and what are its pros and cons compared to React."
                    img="/next.jpg"
                    subheading2="Why NextJS?"
                    text2="NextJS is a great tool, it lets you build server-side rendering and static web apps using React. It is really simple to use and has very similar syntax with ReactJS. If you are already familiar with React, it will be very easy for use to get NextJS up and running. This framework is used by many large websites, including Netflix, Docker, GitHub, Uber, Starbucks and a lot of others. It offers useful advantages to already advantageous library/framework React."
                    subheading3="NextJS advantages"
                    text3="There are many additional features you may advantage use of. Here are listed and explained the main ones. First of all, already mentioned server-side rendering. React by default uses client-side rendering, which for many is just fine, but struggles a lot when it comes to SEO – Search Engine Optimization. With client-side rendering, you redirect the request to a single HTML file and the server will deliver it without any content until you fetch all the JavaScript and let the browser compile everything before rendering the content. Simply said, the struggle is, without loading the main domain (www.example.com) you cannot get to any subdomains directly (www.example.com/blog). This may cause issues when it comes to crawling your webpage and implementing SEO. NextJS offers us server-side rendering solution for us. With literally zero additional work, NextJS is by default functioning with server-side rendering solution. This solves possible issues with web page crawling and Search Engine Optimization. Next big advantage is built in router NextJS offers us. If you are familiar with React, you know using React Router can get confusing and difficult sometimes. With NextJS and built in router solution, it is a lot simpler to use. This can save a lot of time and debugging. Also, I would like to mention how simple it is to deploy NextJS app. Even with React and GitHub Pages it wasn’t particularly difficult to deploy your app, but Next took this simplicity to the very next level. Once you are done with development, push your project to GitHub, register to vercel.com and with one click of a button your web app is up and running. Simple as that. Last but not least, matching syntax with React can be huge advantage for many developers. Sometimes it may get difficult to convert into a new framework or library, especially if you are not starting from scratch but converting already existing code. If you know how to use ReactJS, this will be a piece of cake for you. Most of the things stay exactly the same between React and Next, which make it really simple to either convert already existing project or pick up NextJS after understanding React basics."
                    subheading4="Should you use NextJS?"
                    text4="NextJS offers many advantages as an addition to ReactJS. Of course, this doesn’t mean it is always the correct solution. Every framework/library has its pros and cons and it always depends on your project which tool is the best. Make sure to always analyze your project properly and make sure which tools are best for you, but in many projects, either small or big, NextJS can be an amazing choice making your development a lot easier and result a lot better."
                />
            </Layout>
        </div>
    )
}

export default ReactjsVsNextjs