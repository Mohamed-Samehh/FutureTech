import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './style.css'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function setFavicon(url) {
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
}

document.title = "FutureTech";
setFavicon('icon.png');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>Home</h3>
                        <ul>
                            <li><button className='footerlinks'>Features</button></li>
                            <li><button className='footerlinks'>Blogs</button></li>
                            <li><button className='footerlinks'>Resources</button> <span className="new-label">New</span></li>
                            <li><button className='footerlinks'>Testimonials</button></li>
                            <li><button className='footerlinks'>Contact Us</button></li>
                            <li><button className='footerlinks'>Newsletter</button></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>News</h3>
                        <ul>
                            <li><button className='footerlinks'>Trending Stories</button></li>
                            <li><button className='footerlinks'>Featured Videos</button></li>
                            <li><button className='footerlinks'>Technology</button></li>
                            <li><button className='footerlinks'>Health</button></li>
                            <li><button className='footerlinks'>Politics</button></li>
                            <li><button className='footerlinks'>Environment</button></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Blogs</h3>
                        <ul>
                            <li><button className='footerlinks'>Quantum Computing</button></li>
                            <li><button className='footerlinks'>AI Ethics</button></li>
                            <li><button className='footerlinks'>Space Exploration</button></li>
                            <li><button className='footerlinks'>Biotechnology</button> <span className="new-label">New</span></li>
                            <li><button className='footerlinks'>Renewable Energy</button></li>
                            <li><button className='footerlinks'>Biohacking</button></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Podcasts</h3>
                        <ul>
                            <li><button className='footerlinks'>AI Revolution</button> <span className="new-label">New</span></li>
                            <li><button className='footerlinks'>TechTalk AI</button></li>
                            <li><button className='footerlinks'>AI Conversations</button></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Resources</h3>
                        <div className="resource-links">
                            <button className='footerlinks'>
                            <div className="resource-item">
                                <span>Whitepapers</span>
                                <span className="arrow">↗</span>
                            </div>
                                </button>
                                
                                <button className='footerlinks'>
                            <div className="resource-item">
                                <span>Ebooks</span>
                                <span className="arrow">↗</span>
                            </div>
                            </button>
                            <button className='footerlinks'>
                            <div className="resource-item">
                                <span>Reports</span>
                                <span className="arrow">↗</span>
                            </div>
                            </button>
                            <button className='footerlinks'>
                            <div className="resource-item">
                                <span>Research Papers</span>
                                <span className="arrow">↗</span>
                            </div>
                            </button>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="social-icons">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-medium"></i>
                    <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="footer-terms">
                        <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
                    </div>
                    <div className="footer-copyright">
                        © 2024 FutureTech. All rights reserved.
                    </div>
                </div>
            </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
