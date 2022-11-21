import React from 'react';
import './Module.Blog.css';

const Blog = () => {
    return (
        <div className='blog-section'>
            <div className='first-ques'>
                <h1>Difference between authorization and authentication</h1>
                <table>
                    <tr>
                        <th>Authentication</th>
                        <th>Authorization</th>
                    </tr>
                    <tr>
                        <td>Authentication is a process of verification of user</td>
                        <td>Authorization is a process of giving permision of doing something to user</td>
                    </tr>
                    <tr>
                        <td>Authentication depends on users approach</td>
                        <td>User cant interfare on Authorization, it depends on system</td>
                    </tr>
                    <tr>
                        <td>Authentication can transmits info through an ID Token</td>
                        <td>Authorization can transmits info through an Access Token</td>
                    </tr>
                    <tr>
                        <td>Authentication is a primary process</td>
                        <td>Authorization starts after authentication</td>
                    </tr>
                    <tr>
                        <td>Users info are saved while authinetication processing</td>
                        <td>Saved data is used for authorization</td>
                    </tr>

                </table>
            </div>

            <div className='second-ques'>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>
                    &#8667; Firbase provides reliable & secure authentication system.
                    <br />

                    &#8667; Google analytics reports added by default and this is very helpful for business promotion & bug fixing.
                    <br />

                    &#8667; This is very fast service from any corner in the world
                    <br />

                    &#8667; It provides higher accessibility to machine learning API's
                    <br />

                    &#8667; Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
                    <br />

                </p>
            </div>

            <div className='third-ques'>
                <h1>What other services does firebase provide other than authentication?</h1>
                <p>
                    The below some other options are firebase providing.
                    <br /><br />
                    &#8667; Cloud Firestore
                    <br />
                    &#8667; Cloud Functions
                    <br />
                    &#8667; Authentication
                    <br />
                    &#8667; Hosting
                    <br />
                    &#8667; Cloud Storage
                    <br />
                    &#8667; Google Analytics
                    <br />
                    &#8667; Predictions
                    <br />
                    &#8667; Cloud Messaging
                    <br />
                    &#8667; Dynamic Links
                    <br />
                    &#8667; Remote Config
                </p>
            </div>
        </div>
    );
};

export default Blog;