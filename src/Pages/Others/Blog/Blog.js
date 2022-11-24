import React from 'react';
// import useTitle from '../../../hooks/useTitle';


const Blog = () => {
    // useTitle('Blog');

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">

                <div className="mt-20">
                    <h1 className="text-4xl font-bold">Frequently Asked Questios</h1>
                    {/* 1 */}
                    <div className='pt-20 text-start'>
                        <h2 className='text-xl text-blue-600 font-semibold'>Q1. What are the difference between SQL and NoSQL?</h2>
                        <p className="py-6 text-lg">
                            <span className='text-secondary font-medium'>Answer: </span>
                            <br />
                            <br />
                            Whereas <strong className='text-teal-400'>SQL</strong> is primarily used to query and operate database systems,
                            it enables you to store, handle, delete, and modify data in an organized way. As for  <strong className='text-teal-400'>NoSQL</strong>,
                            it is a non-relational database that does not use SQL. Here is a table to track the differences easily:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="table w-full text-center">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className='text-center text-lg text-secondary'>SQL</th>
                                        <th className='text-center text-lg text-secondary'>NoSQL</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>1</th>
                                        <td>Have fixed or static <br /> or predefined schema</td>
                                        <td>They have dynamic schema</td>
                                    </tr>

                                    <tr className="active">
                                        <th>2</th>
                                        <td>Best suited for complex <br />queries</td>
                                        <td>Are not so good for complex<br /> queries</td>
                                    </tr>

                                    <tr>
                                        <th>3</th>
                                        <td>Are not suited for hierarchical<br /> data storage</td>
                                        <td>Are best suited for hierarchical<br /> data storage</td>
                                    </tr>
                                    <tr className="active">
                                        <th>4</th>
                                        <td>uses RELATIONAL DATABASE</td>
                                        <td>Non-relational or <br />distributed database system</td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td>Vertically Scalable</td>
                                        <td>Horizontally scalable</td>
                                    </tr>
                                    <tr className="active">
                                        <th>6</th>
                                        <td>MySQL, PostgreSQL, Oracle,<br /> MS-SQL Server etc are<br /> examples</td>
                                        <td>MongoDB, GraphQL, HBase, Neo4j, <br />Cassandra etc are <br />examles</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* 1 */}


                    {/* 2 */}
                    <div className='pt-20 text-start'>
                        <h2 className='text-xl text-blue-600 font-semibold'>Q2. What is JWT, and how does it work?</h2>
                        <p className="py-6 text-lg">
                            <span className='text-secondary font-medium'>Answer:</span>
                            <br />
                            <br />
                            <span className='text-xl font-medium text-purple-500'> JWT stands for JSON Web Token.</span> <br />It's a tool for securely transmitting information between parties as JSON object.
                            It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider. So the integrity and authenticity of the token can be verified by other parties involved.
                            <u className='text-green-600'>The purpose of using JWT is not to hide data but to ensure the authenticity of the data.</u> JWT is signed and encoded, not encrypted.
                            JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                        </p>

                        <p className='text-lg font-medium'>JWT consists of three parts: <br />1. A header,<br />2. payload, and <br /> 3. signature.</p>

                        <p className="py-6 text-blue-600 font-semibold text-xl">How it works?</p>
                        <p className="py-6 py-6 text-lg">When a user registers to a new website, he's given a two tokens from the server side.
                            The server issues initially an <span className='text-2xl text-purple-600'> Access token</span> and a <span className='text-2xl text-purple-600'> Refresh Token</span> which are provided to the client side. Basically in the client side
                            these are saved in either the Local Storage or a bit more safer place as HTTP only cookies. When the user logs in bu using his id, the access token'
                            is checked by the server and he gets in. Moreover access tokens are temporary.
                            When it expires, the server asks for the refresh token and issue another access token.
                            This is a continious process.</p>
                        <p className="py-6 py-6 text-lg text-amber-600">But the refresh token expires a date later mostly a long duration and the user has to
                            sign in for both of these tokens. This is the simplest thought.</p>
                    </div>
                    {/* 2 */}


                    {/* 3 */}
                    <div className='pt-20 text-start'>
                        <h2 className='text-xl text-blue-600 font-semibold'>Q3. What is the difference between javascript and NodeJS?</h2>
                        <p className="py-6 text-lg">
                            <span className='text-secondary font-medium'>Answer:</span>
                            <br />
                            <br />
                            JavaScript is a simple programming language that can
                            be used with any browser that has the JavaScript Engine
                            installed. Node.js, on the other hand, is an interpreter or execution
                            environment for the JavaScript programming language.
                        </p>

                        <p className="py-6 text-xl font-semibold">Here is a table to see the comparison:</p>

                        <div className="overflow-x-auto">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className='text-center text-lg text-secondary'>JavaScript</th>
                                        <th className='text-center text-lg text-secondary'>Node.js</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>1</th>
                                        <td>Any browser with a competent <br /> browser engine will operate</td>
                                        <td>It's a JavaScript translator and<br /> environment</td>
                                    </tr>

                                    <tr className="active">
                                        <th>2</th>
                                        <td>a programming language</td>
                                        <td>A JS translator and environment<br /> that includes some valuable libs.<br /> for JS programming</td>
                                    </tr>

                                    <tr>
                                        <th>3</th>
                                        <td>The node community does<br /> not care about JavaScript</td>
                                        <td>All node projects represent<br /> the JavaScript community</td>
                                    </tr>

                                    <tr className="active">
                                        <th>4</th>
                                        <td>It's made for creating<br /> network-centric apps</td>
                                        <td>It's made for real-time <br />data-intensive apps <br />that run on multiple platforms</td>
                                    </tr>

                                    <tr>
                                        <th>5</th>
                                        <td>It's a new release of the <br />ECMA script that works on the<br /> C++-based V8 engine</td>
                                        <td>C++, C, and JavaScript are used.</td>
                                    </tr>

                                    <tr className="active">
                                        <th>6</th>
                                        <td>It's most commonly used on<br /> client-side servers</td>
                                        <td>It's mainly popular on the<br /> server-side</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* 3 */}


                    {/* 4 */}
                    <div className='pt-20 text-start mb-20'>
                        <h2 className='text-xl text-blue-600 font-semibold'>Q4. How does NodeJS handle multiple requests at the same time?</h2>
                        <p className="py-6 text-lg">
                            <span className='text-secondary font-medium'>Answer:</span>
                            <br />
                            <br />
                            <span className='text-purple-500 text-xl font-medium'> NodeJS</span> is an <span className='text-purple-500 text-xl font-medium'>asynchronous event-driven JavaScript runtime  environment </span>  designed
                            to build scalable network applications.
                            it's powerfull tool in case of handling requests.
                            Node is multithreaded. The main event loop is <span className='text-blue-500 text-xl font-medium'>single-threaded</span>  by nature. But the I/O is run on separate threads/processes,
                            because the I/O APIs in Node. js is asynchronous/non-blocking by design,
                            in order to accommodate the singlethreaded event loop.
                            It can process upwards of 1000
                            requests per second and speed limited only to the speed of
                            ones network card. A matter of fact that it's 1000 requests per second is not
                            clients connected simultaneously. It can handle the 10000 simultaneous clients without issue.
                        </p>

                        <p className="py-6 text-lg">NodeJS receives multiple client requests and
                            places them into <span className='text-green-500 text-xl font-medium'>EventQueue</span>. It's built with the concept
                            of event-driven architecture and has its own EventLoop which is an
                            infinite loop that receives requests and processes them.</p>

                        <p className='py-6 text-lg'>At a high level, Node. js falls into the category of
                            concurrent computation. <u>This is a direct result of the single-threaded event
                                loop being the backbone of a Node.js application.</u></p>
                    </div>
                    {/* 4 */}
                </div>

            </div>

        </div>
    );
};

export default Blog;