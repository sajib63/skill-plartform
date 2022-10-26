import React from 'react';


const Blog = () => {
    return (
        <div>
            <div className='bg-white shadow-2xl mb-8 m-5'>
                <p><span>Question</span>  what is cors?</p>
                <p><span>ANS</span> Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.</p>
            </div>
            <div className='bg-white shadow-2xl mb-8'>
                <p><span>Question</span> Why are you using firebase?</p>
                <p><span>ANS</span> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>


                <p><span>Question</span>  What other options do you have to implement authentication?</p>


                <p><span>ANS</span> the other options to implement authentication is Flutter</p>

            </div>


            <div>
                <p><span>Question</span> How does the private route work?</p>
                <p><span>ANS</span> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>

            <div>
            <p><span>Question</span> What is Node? How does Node work?</p>
                <p><span>ANS</span> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>


        </div>



    );
};

export default Blog;