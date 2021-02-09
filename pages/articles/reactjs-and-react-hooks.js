import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const reactAndReactHooks = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>ReactJS and React Hooks</title>
                    <meta name="description" content="What is ReactJS and what are React Hooks? ReactJS (also called React or React.js) is an open-source, front-end JavaScript library. Most common React Hooks being used are UseState and UseEffect but React also offers a method to build your own Hooks." />
                </Head>
                <ArticleStructure
                    heading="ReactJS and React Hooks"
                    subheading="What is ReactJS?"
                    text="ReactJS (also called React or React.js) is an open-source, front end JavaScript library. React is used for developing user interfaces (UI) components. It was created by Facebook who also is responsible for maintaining React. Despite the fact we defined React as a JavaScript (JS) library, there is still ongoing argument about this, as lots of sources identify it as a framework. Whatever you would like to call it, React is considered as one of the best JS frameworks alongside other frameworks like Angular and Vue.js. Framework or library, why is it so popular and what are the advantages of React?"
                    img="/js1.jpg"
                    subheading2="Advantages of ReactJS"
                    text2="Big advantage of React is its component-based structure. In React, everything is a component of the web page divided into small components to create a view (UI – User Interface). React uses JSX, which is a markup syntax that closely resembles HTML. Simply said, it is in some way a combination of HTML and JavaScript. Syntax is almost identical to HTML and it makes writing components much easier. Performance of React together with event handling are also big advantages of ReactJS."
                    subheading3="How does react work?"
                    text3="React works in declarative code, meaning each line of code declares what each element of the app is. As already mentioned, React is component-based. Declarative code is used to create these components, which are the way how to display information. Components are reusable UIs which allow us to split the app into separate smaller blocks that act independently of each other. Components can accept and input called a prop and they return a React element to specify what should appear on the screen. There are 2 main types of components: Functional components and Class components. As an update providing React Hooks came, it pretty much eliminated usage of class components. But what are these React Hooks and why are they so useful?"
                    subheading4="React Hooks"
                    text4="Hooks were added to React in version 16.8 and they let us use state and other React features without writing a class. What is a state? Just like it sounds, state is an object where we store property values that belongs to the component. When the state object changes, the component re-renders (updates). Back to Hooks now. Most common Hooks being used are UseState and UseEffect but React also offers a method to build your own Hooks. There is lots of advantages to use React Hooks instead of classes. If you are interested in reading more about Hooks, check out our next article about React Hooks, UseState and UseEffect."
                />
            </Layout>
        </div>
    )
}

export default reactAndReactHooks