import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <div>
        <div className='sidebar'>
            <ul>
                <li><Link to="/"></Link>Home</li>
                <li><Link to="/About"></Link>About</li>
                <li><Link to="/Portfolio"></Link>Portfolio</li>
                <li><Link to="/HTMLCSS"></Link>HTML/CSS</li>
                <li><Link to="/Javascript"></Link>JavaScript</li>
                <li><Link to="/Resume"></Link>Resume</li>
                <li><Link to="/Contact"></Link>Contact</li>
                <p className="copyright">Copyright &#169; 2020</p>
            </ul>
        </div>
        <div>
        <section>
            <div className="name">
            <header className="title">Bryan Ballare</header>
            <p className="subtitle">Designer | Developer</p>
            </div>
        </section>
        </div>
        </div>
    )
}

export default Home;