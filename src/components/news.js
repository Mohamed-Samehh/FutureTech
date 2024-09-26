import React from 'react';
// import GroupImage from '../images1/Group.png';
import Image1 from '../images1/Image.png';
import Image2 from '../images1/Image (1).png';
import Image3 from '../images1/Image (2).png';
import Image4 from '../images1/Image (3).png';
import JohnImage from '../images1/john.png';
import SarahImage from '../images1/sarah.png';
import AstronomerImage from '../images1/astronomer.png';
import SubContainer1 from '../images1/Sub Containerc1 (10).png';
import SubContainer2 from '../images1/Sub Containerc2 (10).png';
import SubContainer3 from '../images1/Sub Containerc3 (10).png';
import SubContainer4 from '../images1/Sub Containerc4 (10).png';
import './news.css';
import DynamicButtons from './DynamicButtons';
import BigLogo from '../images/BigLogo.png';


const NewsPage = () => {
    return (
        <div>
            <div className="containerr">
                <p className="headline">Today's Headlines: Stay</p>
                <p className="informed">Informed</p>
                <div className="info">
                    <div className="details">
                        <p style={{ marginBottom: '5px' }}>
                            Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories.
                        </p>
                        <p style={{ marginTop: '0px', paddingTop: '0px' }}>
                            Discover the world through our news coverage.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container22">
                <div style={{ display: 'inline', }}>
                    <img src={Image1} alt="Global Climate Summit" className="imgg" />
                    <p className="p1">Global Climate Summit Addresses Urgent Climate Action</p>
                    <p className="p2">
                        World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.
                    </p>
                    
                    <div className="butonss">
                        <div style={{ width: 'fit-content', paddingRight: '90px', display: 'inline-flex' }}>
                            
                        <DynamicButtons/>
                        <button style={{marginLeft:'390px'}} class="read-more-button">Read More ↗</button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="container33">
                <div className='Decise'>
                    <img className="imgg5" src={Image2} alt="Decisive Victory for Progressive Policies" />
                    <p>A Decisive Victory for Progressive Policies</p>
                    <p>Politics</p>
                    <div className="butonss">
                        <div style={{ width: 'fit-content', paddingRight: '90px', display: 'inline-flex' }}>
                            <div className="like-button">
                                <span id="like-icon" className="heart" onClick={() => toggleLike()}>&#9825;</span>
                                <span id="like-count">10k</span>
                            </div>
                            <div className="send-button">
                                <i className="fas fa-paper-plane"></i>
                                <span id="send-count">124</span>
                            </div>
                        </div>
                        <div className="read-more-button3">
                            <span>Read More</span>
                            <span className="arrow">&#8599;</span>
                        </div>
                    </div>
                </div>
                <div className='Decise'>
                    <img className="imgg6" src={Image3} alt="Tech Giants Unveil Cutting-Edge AI Innovations" />
                    <p>Tech Giants Unveil Cutting-Edge AI Innovations</p>
                    <p>Politics</p>
                    <div className="butonss">
                        <div style={{ width: 'fit-content', paddingRight: '90px', display: 'inline-flex' }}>
                            <div className="like-button">
                                <span id="like-icon" className="heart" onClick={() => toggleLike()}>&#9825;</span>
                                <span id="like-count">10k</span>
                            </div>
                            <div className="send-button">
                                <i className="fas fa-paper-plane"></i>
                                <span id="send-count">124</span>
                            </div>
                        </div>
                        <div className="read-more-button3">
                            <span>Read More</span>
                            <span className="arrow">&#8599;</span>
                        </div>
                    </div>
                </div>
                <div className='Decise'>
                    <img className="imgg7" src={Image4} alt="COVID-19 Variants" />
                    <p>COVID-19 Variants</p>
                    <p>Politics</p>
                    <div className="butonss">
                        <div style={{ width: 'fit-content', paddingRight: '90px', display: 'inline-flex' }}>
                            <div className="like-button">
                                <span id="like-icon" className="heart" onClick={() => toggleLike()}>&#9825;</span>
                                <span id="like-count">10k</span>
                            </div>
                            <div className="send-button">
                                <i className="fas fa-paper-plane"></i>
                                <span id="send-count">124</span>
                            </div>
                        </div>
                        <div className="read-more-button3">
                            <span>Read More</span>
                            <span className="arrow">&#8599;</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container44">
                <p className="conp1">Welcome to Our News Hub</p>
                <p className="conp2">Discover the World of Headlines</p>
                <div className="read-more-button4">
                    <span>View All News</span>
                    <span className="arrow">&#8599;</span>
                </div>
            </div>

            <div className="kon">
                <p className="kon1 kon2">All</p>
                <p className="kon1">Technology</p>
                <p className="kon1">Politics</p>
                <p className="kon1">Health</p>
                <p className="kon1">Environment</p>
                <p className="kon1">Sports</p>
            </div>

            <div class="people">
    <div class="xox">
        <div class="content-wrapper">
            
            <div class="left-content">
                <div class="circle photo">
                    <img src={JohnImage} alt="John Techson" />
                </div>
                <div class="text-container">
                    <p class="nAme">John Techson</p>
                    <p class="nAme2">Technology</p>
                </div>
            </div>
            
            <div class="right-content">
                <div class="textt1">
                    <p class="textt12">October 15, 2023</p>
                    <p class="textt13">Tech Giants Announce New Product Line</p>
                    <p class="textt14">Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape.</p>
                    {/* <div class="icons">
                        <span class="likes"><i class="fas fa-heart"></i> 24.5k</span>
                        <span class="comments"><i class="fas fa-comment"></i> 50</span>
                        <span class="shares"><i class="fas fa-share"></i> 20</span>
                    </div> */}
                </div>
                <button class="read-more-button">Read More ↗</button>
            </div>
        </div>
    </div>
    <div class="xox">
        <div class="content-wrapper">
            
            <div class="left-content">
                <div class="circle photo">
                    <img src={SarahImage} alt="Sarah Ethicist" />
                </div>
                <div class="text-container">
                    <p class="nAme">Sarah Ethicist</p>
                    <p class="nAme2">Technology</p>
                </div>
            </div>
            
            <div class="right-content">
                <div class="textt1">
                    <p class="textt12">October 11, 2023</p>
                    <p class="textt13">The Future of Autonomous Vehicles</p>
                    <p class="textt14">An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation.</p>
                    {/* <div class="icons">
                        <span class="likes"><i class="fas fa-heart"></i> 24.5k</span>
                        <span class="comments"><i class="fas fa-comment"></i> 50</span>
                        <span class="shares"><i class="fas fa-share"></i> 20</span>
                    </div> */}
                </div>
                <button class="read-more-button">Read More ↗</button>
            </div>
        </div>
    </div>
    <div class="xox">
        <div class="content-wrapper">
            
            <div class="left-content">
                <div class="circle photo">
                    <img src={AstronomerImage} alt="Astronomer" />
                </div>
                <div class="text-container">
                    <p class="nAme">John Techson</p>
                    <p class="nAme2">Technology</p>
                </div>
            </div>
            
            <div class="right-content">
                <div class="textt1">
                    <p class="textt12">December 10, 2023</p>
                    <p class="textt13">Tech Startups Secure Record Funding</p>
                    <p class="textt14">An overview of the recent surge in funding for tech startups, shaping the entrepreneurial landscape.</p>
                    {/* <div class="icons">
                        <span class="likes"><i class="fas fa-heart"></i> 24.5k</span>
                        <span class="comments"><i class="fas fa-comment"></i> 50</span>
                        <span class="shares"><i class="fas fa-share"></i> 20</span>
                    </div> */}
                </div>
                <button class="read-more-button">Read More ↗</button>
            </div>
        </div>
    </div>
</div>



            <div className="grid-layout-container44">
                <div className="grid-layout-box44">
                    <img src={SubContainer1} alt="Mars Exploration" />
                    <p className='gridp1'>Mars Exploration: A New Era in Space</p>
                    <p className='gridp2'>Discover the latest missions and findings from Mars exploration. Learn about the potential for human colonization and the search for extraterrestrial life.</p>
                </div>
                <div className="grid-layout-box44">
                    <img src={SubContainer2} alt="Blockchain Explained" />
                    <p className='gridp1'>Blockchain Explained: Understanding the Basics</p>
                    <p className='gridp2'>Get to know blockchain technology, its applications, and how it is transforming industries from finance to supply chain management.</p>
                </div>
                <div className="grid-layout-box44">
                    <img src={SubContainer3} alt="Mental Health Awareness" />
                    <p className='gridp1'>Mental Health Awareness: Breaking the Stigma</p>
                    <p className='gridp2'>Explore the importance of mental health awareness and the initiatives aimed at providing support and breaking down stigma.</p>
                </div>
                <div className="grid-layout-box44">
                    <img src={SubContainer4} alt="Investment Strategies" />
                    <p className='gridp1'>Investment Strategies: Navigating the Financial Markets</p>
                    <p className='gridp2'>Learn about the latest investment strategies, market trends, and tips for maximizing returns in a volatile financial environment.</p>

                </div>
            </div>

            <div className="divkber">
            <div className='FootLogo'>
                <img className="lolo" src={BigLogo} alt="Big Logo" />
                <div className="constt" style={{ display: 'inline-block' }}>
                    <p className="conts8nn">Learn, Connect, and Innovate</p>
                    <p className="dibo">Be Part of the Future Tech Revolution</p>
                    <p className="la22">
                        Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the
                        industry. Join a dynamic community of forward-thinkers.
                    </p>
                </div>
            </div>



        </div>
        <div className='Sec2Foot' style={{width:'100%', backgroundColor:'#1a1a1a'}}>
            <div className="div2foot">
                <div className="div2-1foot">
                    <p className="div2-2foot">Resource Access</p>
                    <p className="div2-3foot">Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                </div>
                <div className="div2-1foot">
                    <p className="div2-2foot">Community Forum</p>
                    <p className="div2-3foot">Join our active community forum to discuss industry trends and collaborate with peers.</p>
                </div>
                <div className="div2-1foot">
                    <p className="div2-2foot">Tech Events</p>
                    <p className="div2-3foot">Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.</p>
                </div>
            </div>
        </div>

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
                    <a href="ظ">Terms & Conditions</a> | <a href="ظ">Privacy Policy</a>
                </div>
                <div className="footer-copyright">
                    © 2024 FutureTech. All rights reserved.
                </div>
            </div>
        </footer>

        </div>
    );
};

const toggleLike = () => {
    // Toggle like functionality here
};

export default NewsPage;
