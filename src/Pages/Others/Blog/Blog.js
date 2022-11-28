import React from 'react';
// import useTitle from '../../../hooks/useTitle';


const Blog = () => {
    // useTitle('Blog');


    /*     13.1 What are the different ways to manage a state in a React application?
    
    13.2 How does prototypical inheritance work?
    
    13.3 What is a unit test? Why should we write unit tests?
    
    13.4 React vs. Angular vs. Vue? */

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">

                <div className="mt-20">
                    <h1 className="text-4xl font-bold">Frequently Asked Questios</h1>
                    {/* 1 */}
                    <div className='pt-20 text-start'>
                        <h2 className='text-xl text-primary font-semibold'>Q1. What are the different ways to manage a state in a React application?</h2>
                        <p className="py-6 text-lg">
                            <span className='text-secondary font-medium'>Answer: </span>
                            <br />
                            <br />
                            React state management is <span className=' font-medium'>a process for managing the data that
                                React components need in order to render themselves. </span>
                            This data is typically stored in the component's state object. When the state object changes, the component will re-render itself.
                            React state management is basically half of a React app.
                        </p>

                        <p className="py-6 text-lg text-purple-500 font-semibold">
                            The Four Kinds of React State to Manage as followings:
                            <br />
                            <ul className=' font-semibold'>
                                <li>1. Local state</li>
                                <li>2. Global state</li>
                                <li>3. Server state, and</li>
                                <li>4. URL state</li>
                            </ul>
                        </p>
                        <p className="py-4 text-lg">

                            <span className='font-bold text-cyan-600'>Local (UI) state :</span> Local state is data we manage in one or another component.

                            Local state is most often managed in React using the useState hook.
                        </p>
                        <p className="py-4 text-lg">

                            <span className='font-bold text-cyan-600'>Global (UI) state :</span> Global state is data we manage across multiple components.

                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        </p>

                        <p className="py-4 text-lg">

                            <span className='font-bold text-cyan-600'>Server state :</span> Data that comes from an external server that must be integrated with our UI state.

                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        </p>

                        <p className="py-4 text-lg">

                            <span className='font-bold text-cyan-600'>URL state :</span> Data that exists on our URLs, including the pathname and query parameters.

                            URL state is often missing as a category of state, but it is an important one.
                        </p>

                    </div>
                    {/* 1 */}


                    {/* 2 */}
                    <div className='pt-20 text-start'>
                        <h2 className='text-xl text-primary font-semibold'>Q2. How does prototypical inheritance work?</h2>
                        <p className="py-6 text-lg">
                            <span className='text-secondary font-medium'>Answer:</span>
                            <br />
                            <br />
                            <span className='text-xl font-medium text-purple-500'> Prototypical Inheritance</span> <br />
                            <strong>prototypical inheritance refers to the ability to access object properties from another object.</strong> We use a JavaScript prototype to add
                            new properties and methods to an existing object constructor.
                            When it comes to inheritance, JavaScript only has one construct: objects. The most important difference between class- and prototype-based inheritance is that a class defines a type which can be instantiated at runtime, whereas a prototype is itself an object instance.
                        </p>


                        <p className="pt-6 pb-2 text-blue-600 font-semibold text-xl">How it works?</p>
                        <p>Each object has a private property which holds
                            a link to another object called its prototype. That prototype object has a prototype of its own,
                            and so on until an object is reached with null as its prototype.</p>
                        <p className='text-lg font-medium text-amber-600 pt-5'>So in conclusion JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.</p>

                    </div>
                    {/* 2 */}


                    {/* 3 */}
                    <div className='pt-20 text-start mb-20'>
                        <h2 className='text-xl text-blue-600 font-semibold'>Q3. What is a unit test?  Why should we write unit tests?</h2>
                        <p className="py-6 text-lg">
                            <span className='text-secondary font-medium'>Answer:</span>
                            <br />
                            <br />
                            <span className='text-purple-500 text-xl font-medium'> Unit testing</span> is a <span className='text-purple-500 text-xl font-medium'> software development process </span>
                            in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is
                            done during the development process by the software developers and sometimes QA staff.  <span className='text-secondary font-medium'>The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                                Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</span>

                        </p>

                        <p className='pt-6 text-xl font-semibold'>How unit tests work?</p>

                        <p className="py-4 text-lg text-cyan-600 font-medium">A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
                        </p>

                        <p className='py-4 text-lg'>

                            Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.</p>
                    </div>
                    {/* 3 */}


                    {/* 4 */}

                    <div className='pt-20 text-start'>
                        <h2 className='text-xl text-blue-600 font-semibold'>Q4. React vs. Angular vs. Vue?</h2>
                        <p className="py-6 text-lg">
                            <span className='text-secondary font-medium'>Answer:</span>
                            <br />
                            <br />
                            It's easier to learn Vue than angular and it reasonably
                            takes the same amount of time and effort as learning react.
                            Although some people argue that it's even easier to learn
                            than react but that's of
                            course subjective and varies from person to person.
                        </p>

                        <p className="py-6 text-xl font-semibold">Here is a table to see the comparison:</p>

                        <div className="overflow-x-auto">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Diff Keys</th>
                                        <th className=' text-lg font-lighter text-secondary'>Angular JS</th>
                                        <th className=' text-lg font-lighter text-secondary'>React JS</th>
                                        <th className=' text-lg font-lighter text-secondary'>Vue JS</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>1</th>
                                        <td>Launch Year</td>
                                        <td>2010</td>
                                        <td>2013</td>
                                        <td>2014</td>
                                    </tr>

                                    <tr className="active">
                                        <th>2</th>
                                        <td>Developed By</td>
                                        <td>Google</td>
                                        <td>Facebook</td>
                                        <td>Even You <br /> (ex-Google)</td>
                                    </tr>

                                    <tr>
                                        <th>3</th>
                                        <td>Community</td>
                                        <td>Large community as
                                            <br />it's the oldest.
                                        </td>
                                        <td>vast community.</td>
                                        <td>Growing Community</td>
                                    </tr>

                                    <tr className="active">
                                        <th>4</th>
                                        <td>Job Market</td>
                                        <td>5000-8000 Angular developers <br /> jobs on linkdin</td>
                                        <td>Around 8000 for REACT JS</td>
                                        <td>Less than 3K</td>
                                    </tr>

                                    <tr>
                                        <th>5</th>
                                        <td>Cons</td>
                                        <td>Difficult in building <br /> cross-platform apps.
                                            <br /> Also Not good for SEO.
                                        </td>
                                        <td>Strong JSX knowledge <br /> required.
                                            Frequent updates <br /> of docs.</td>
                                        <td>Lack of community. <br />
                                            lack of large scale <br /> projects platform.
                                        </td>
                                    </tr>

                                    <tr className="active">
                                        <th>6</th>
                                        <td>Use Cases</td>
                                        <td>
                                            Large scale apps. <br />
                                            Real-Time apps
                                        </td>
                                        <td>
                                            cross-platform apps. <br />
                                            Exciting functionalities with features.
                                        </td>
                                        <td>
                                            Lightweight apps. <br />
                                            Intultive apps.
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* 4 */}
                </div>

            </div>

        </div>
    );
};

export default Blog;