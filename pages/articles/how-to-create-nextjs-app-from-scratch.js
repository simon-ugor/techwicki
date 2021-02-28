import Head from "next/head"
import Footer from "../../components/Footer"
import Layout from "../../components/Layout"
import Image from "next/image"

const NextjsFromScratch = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>How to create NextJS app from scratch</title>
                    <meta name="description" content="How to create new NextJS project? There are multiple ways to go about creating a NextJS project. Easiest way to get started is by typing npx create-next-app in your terminal. Created template by using NodeJS npx create-next-app might be confusing for beginners. So how do you create NextJS app from scratch?" />
                </Head>
                <div className="article-structure-div">
                    <div className="article-desktop">
                        <h2 className="article-structure-heading">How to create NextJS app from scratch</h2>
                        <h3 className="article-structure-subheading">What is NextJS?</h3>
                        <p className="article-structure-paragraph">NextJS is a framework for ReactJS developed by <a target="_blank" className="article-a" href="https://vercel.com/">Vercel</a> and open-source community. NextJS is based on React, Webpack and Babel. It is very simple to use and offers many big advantages, where the biggest trump card might be server-side rendering. If you are looking for more detailed NextJS overview, what are the advantages and when should you use NextJS, feel free to read our article <a target="_blank" className="article-a" href="https://techwicki.com/articles/reactjs-vs-nextjs">here</a>. In this article you will learn how to create NextJS app from scratch.</p>
                        <h3 className="article-structure-subheading">create-next-app</h3>
                        <p className="article-structure-paragraph">There are multiple ways to go about creating a NextJS project. Easiest way to get started is by typing npx create-next-app in your terminal. Of course, this won’t work straight away. First, you will need to install npm (node package manager) which you can download from <a target="_blank" className="article-a" href="https://nodejs.org/en/">NodeJS</a> webpage - npm already includes npx so you should be good to go there. In the next step, as already mentioned, you will need to use your terminal. Open your terminal and use the following command:</p>
                        <p style={{color: "#1a4d9a"}} className="article-structure-paragraph">npx create-next-app nameofapp</p>
                        <p className="article-structure-paragraph">Or possibly if you are using <a target="_blank" className="article-a" href="https://yarnpkg.com/">yarn package manager</a>:</p>
                        <p style={{color: "#1a4d9a"}} className="article-structure-paragraph">yarn create-next-app nameofapp</p>
                        <p className="article-structure-paragraph">This command will create new NextJS project in your directory. Please note “nameofapp” is just an example. This is name of your project and it can be whatever you want it to be. There are probably some limitations to names, but if you stick to basic letters, you shouldn’t run into any problems. After create-next-app is done, simply open this directory in your favorite code editor and you are good to go. I will be using <a target="_blank" className="article-a" href="https://code.visualstudio.com/">VS Code</a> for this example.</p>
                        <div style={{marginTop: "2vh"}} className="article-image-div">
                            <Image
                                src="/vscodeindex.png"
                                alt="VS Code"
                                width={1200}
                                height={768}
                            />
                        </div>
                        <p className="article-structure-paragraph">While this is the simplest way to create NextJS project, it may get confusing right afterwards. Created template with create-react-app includes much more than what will you need if you are a beginner. Of course, if you are experienced NextJS user, this is probably the method you want to use, but if you are a beginner you might stick to following solution.</p>
                        <h3 className="article-structure-subheading">NextJS app from scratch</h3>
                        <p className="article-structure-paragraph">This method helped myself when I was getting used to ReactJS and NextJS. It is not as efficient as using create-next-app, but it is much more understandable and straight forward. By using this method, you will have only files that you need in your NextJS project, not any template that might be confusing. So how to do this? First, you will need to create a directory, you can use your terminal or simply create a folder anywhere you want. Next, we will need to use our terminal. Open your terminal and cd into your new created directory – you can to this by typing cd and path to your file. For Mac users, type in cd and simply drag and drop the folder you just created into the terminal window. Here is an example:</p>
                        <p style={{color: "#1a4d9a"}} className="article-structure-paragraph">cd mydirectory</p>
                        <p className="article-structure-paragraph">So, you successfully changed directory into your new directory. If you are not sure, you can double check by typing ls (mac) or dir (windows) into your terminal. This should list everything in your directory – in our case, this list should be empty. Now we will need to initialize npm (node package manager). This will create required package.json file for us. Simply use the following command:</p>
                        <p style={{color: "#1a4d9a"}} className="article-structure-paragraph">npm init -y</p>
                        <p className="article-structure-paragraph">First part of the command “npm init” initializes npm, second part “-y” is there to enable default setting. If you want to personalize your settings, simply use the command without “-y” and you will be asked to set up everything manually. Continuing our terminal work, we will need to install required packages for NextJS to run. For this we can use this command:</p>
                        <p style={{color: "#1a4d9a"}} className="article-structure-paragraph">npm install react react-dom next</p>
                        <p className="article-structure-paragraph">This might take a while so be patient. After the installation is done, packages will be written into our already created package.json file. So, are we good to go? Well, not yet, just a couple more steps and we are ready. We have installed everything we needed, now we just need to go through few settings and we will be all set up. Next step, open your created directory in your favorite code editor, I will be using <a target="_blank" className="article-a" href="https://code.visualstudio.com/">Virtual Studio Code</a>. Once you have the directory opened, open your package.json file and locate this line under "scripts":</p>
                        <div style={{marginTop: "2vh"}} className="article-image-div">
                            <Image
                                src="/vscodescripts.png"
                                alt="VS Code"
                                width={1199}
                                height={768}
                            />
                        </div>
                        <p className="article-structure-paragraph">We will need to replace this line with this piece of code:</p>
                        <p style={{color: "#1a4d9a"}} className="article-structure-paragraph">"dev": "next dev",<br/>"build": "next build",<br/>"start": "next start"</p>
                        <p className="article-structure-paragraph">In the end, your package.json file should look like this:</p>
                        <div style={{marginTop: "2vh"}} className="article-image-div">
                            <Image
                                src="/vscodepackage.png"
                                alt="VS Code"
                                width={1199}
                                height={768}
                            />
                        </div>
                        <p className="article-structure-paragraph">Here we go, final step. Inside your directory, create new folder called pages. Inside pages folder we will need to create our index.js (index.tsx if you are using TypeScript). Now we can finally start coding our app. To get you started we will use JavaScript function. This function returns JSX – simply said, it returns what will be rendered. Here is how it should look like:</p>
                        <div style={{marginTop: "2vh"}} className="article-image-div">
                            <Image
                                src="/vscodecustom.png"
                                alt="VS Code"
                                width={1199}
                                height={768}
                            />
                        </div>
                        <p className="article-structure-paragraph">And we are good to go. Open terminal in VS Code, type in</p>
                        <p style={{color: "#1a4d9a"}} className="article-structure-paragraph">npm run dev</p>
                        <p style={{marginBottom: "2vh"}} className="article-structure-paragraph">and your app will be running on http://localhost:3000/. You can view your app simply by opening the browser and into the URL typing http://localhost:3000/. Good job! You have just created your NextJS project! Now it's your time to shine and make from it whatever you want. Happy coding!</p>
                    </div>
                    <Footer />
                </div>
            </Layout>
        </div>
    )
}

export default NextjsFromScratch