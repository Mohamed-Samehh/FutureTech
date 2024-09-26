import React from 'react';
import BigLogo from './images/BigLogo.png'; // Adjust the path if needed
import { ReactComponent as TwitterIcon } from './images/twitter-icon.svg'; // Import your icons or adjust paths
import { ReactComponent as MediumIcon } from './images/medium-icon.svg';
import { ReactComponent as LinkedInIcon } from './images/linkedin-icon.svg';
import './MainComponent.css'; // Import your CSS file

const MainComponent = () => {
    return (
        <div>
            <div className="divkber">
                <div>
                    <img className="lolo" src={BigLogo} alt="Big Logo" />
                    <div className="constt" style={{ display: 'inline-block' }}>
                        <p className="conts8nn">Learn, Connect, and Innovate</p>
                        <p className="dibo">Be Part of the Future Tech Revolution</p>
                        <p className="la22">
                            Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the
                            <pre> industry. Join a dynamic community of forward-thinkers.</pre>
                        </p>
                    </div>
                </div>
                <div className="divfy3">
                    <div className="drt">
                        <p className="rr">Resource Access</p>
                        <p className="tt">Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                    </div>
                    <div className="drt">
                        <p className="rr">Community Forum</p>
                        <p className="tt">Join our active community forum to discuss industry trends and collaborate with peers.</p>
                    </div>
                    <div className="drt">
                        <p className="rr">Tech Events</p>
                        <p className="tt">Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.</p>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>Home</h3>
                        <ul>
                            <li>Features</li>
                            <li>Blogs</li>
                            <li>Resources <span className="new-label">New</span></li>
                            <li>Testimonials</li>
                            <li>Contact Us</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>News</h3>
                        <ul>
                            <li>Trending Stories</li>
                            <li>Featured Videos</li>
                            <li>Technology</li>
                            <li>Health</li>
                            <li>Politics</li>
                            <li>Environment</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Blogs</h3>
                        <ul>
                            <li>Quantum Computing</li>
                            <li>AI Ethics</li>
                            <li>Space Exploration</li>
                            <li>Biotechnology <span className="new-label">New</span></li>
                            <li>Renewable Energy</li>
                            <li>Biohacking</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Podcasts</h3>
                        <ul>
                            <li>AI Revolution <span className="new-label">New</span></li>
                            <li>TechTalk AI</li>
                            <li>AI Conversations</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Resources</h3>
                        <div className="resource-links">
                            <div className="resource-item">
                                <span>Whitepapers</span>
                                <span className="arrow">↗</span>
                            </div>
                            <div className="resource-item">
                                <span>Ebooks</span>
                                <span className="arrow">↗</span>
                            </div>
                            <div className="resource-item">
                                <span>Reports</span>
                                <span className="arrow">↗</span>
                            </div>
                            <div className="resource-item">
                                <span>Research Papers</span>
                                <span className="arrow">↗</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="social-icons">
                        <TwitterIcon className="icon-twitter" />
                        <MediumIcon className="icon-medium" />
                        <LinkedInIcon className="icon-linkedin" />
                    </div>
                    <div className="footer-terms">
                        <a href="#terms">Terms & Conditions</a> | <a href="#privacy">Privacy Policy</a>
                    </div>
                    <div className="footer-copyright">
                        © 2024 FutureTech. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainComponent;
