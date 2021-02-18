import ArticleStructure from "../../components/ArticleStructure"
import Layout from "../../components/Layout"
import Head from "next/head"

const useStateAndUseEffect = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>UseState and UseEffect in React</title>
                    <meta name="description" content="What are use-cases of Virtual Reality? VR gaming and VR aimed towards educational, research or service-providing purposes. Continue reading to find out more." />
                </Head>
                <ArticleStructure
                    heading="UseState and UseEffect in React"
                    subheading="What are React Hooks"
                    text="React UseState and UseEffect are both React Hooks. So, what are these Hooks once again? Hooks were added to React in version 16.8 and they let us use specific React features without writing a class. A Hook is a special function that lets you “hook into” React features. Most common Hooks being used are UseState and UseEffect but React also offers a method to build your own Hooks. There is lots of advantages to use React Hooks instead of classes."
                    img="/hooks.png"
                    subheading2="Class and functional components in React"
                    text2="React Hooks let us use React features without writing a class component. We can simply use functional component with Hooks. But what are these components and what is the difference? Components let us split UI into reusable pieces and think about each piece in isolation. The simplest way to define a component is to write a JavaScript function – functional component. We can also use a class component – ES6 class. These two components are pretty much equivalent. Function and class components both have some additional features but generally function components are easier to write. That’s why we use React Hooks, so we can write function component instead of ES6 classes – class components."
                    subheading3="UseState()"
                    text3="React UseState is a React Hook that allow us to use state without writing a class component. What is state? Just like it sounds, state is an object where we store property values that belongs to the component. When the state object changes, the component re-renders (updates). Calling UseState declares a state variable where we can preserve some values."
                    subheading4="UseEffect()"
                    text4="React UseEffect is a React Hook as well. Simply said, this hook allows us to implement “lifecycle” methods without using a class component. What are lifecycle methods? Some of their names are pretty self-explanatory so here are few examples – componentDidMount, componentDidUpdate, componentWillUnmount etc. Just like it sounds, for example code inside of componentDidMount method will run exactly once, when given component mounts. UseEffect Hook basically offers the same thing, but it is easier to use. By calling UseEffect you tell React that given component needs to do something after render – effect. Calling this Hook inside of a component allows us to access state or any given props. By default, UseEffect runs after every render. Some effects might also require a cleanup so they return a function."
                    subheading5="Should you learn React Hooks?"
                    text5="React Hooks are a big part of React development and offer significant amount of advantages. They are definitely required in modern React development. I would highly recommend to spend some time to get familiar with Hooks, they can save a ton of time and code! If you decided to learn Hooks, React, provided us with a quality documentation. Link to this documentation will be included at the end of this article. Of course, not everyone is a big documentation reading fan. Don’t worry, for people who enjoy watching videos more there is enough video tutorials for you to become a Hooks master!"
                />
            </Layout>
        </div>
    )
}

export default useStateAndUseEffect