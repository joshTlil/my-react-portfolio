import React from 'react';
import logo from './github.png';
export default function Home() {
    return (
        <div>
            <h1>About Me</h1>
            <p>
   I am a fullstack Web Developer, coding is my life at this. After learning how to code for the last three 
   months in the GA Tech Coding BootCamp, I like doing projects on the backend. The reason is why is because 
   there is so much more you can do in the backend, and it cool to see my work on a multi-page level after putting in all 
   those hours to get it to work. When im not coding love to play video games watch movies and hangout with friends.
            </p>
            {/* /* <img src={logo} href="https://github.com" alt="some example " /> */ }
            <li><a href='https://github.com'><img src={logo} alt="something"/></a></li>
        </div>
    );
}

