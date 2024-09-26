import React from 'react';
import anagebta5ry from '../images/anagebta5ry.png';
import Icon1 from '../images/Icon1.png';
import Icon2 from '../images/Icon2.png';
import Icon3 from '../images/Icon3.png';
import icon6 from '../images/icon6.png'; 
import container from '../images/Container.png'; 
import TopicsVarietyImage from '../images/TopicsVarietyImage.png';
import TopicsCoverage from '../images/TopicsCoverage.png';
import icon7 from '../images/icon7.png';
import icon9 from '../images/icon9.png';
import john from '../images/john.png';
import sarah from '../images/sarah.png';
import astronomer from '../images/astronomer.png';
import './style1.css'
import AlanJackson from '../images/AlanJackson.png';
import RajPatel from '../images/RajPatel.png';
import EmilyAdams from '../images/EmilyAdams.png';
import JessicaMiller from '../images/JessicaMiller.png';
import DiegoLopez from '../images/DiegoLopez.png';
import SarahThompson from '../images/SarahThompson.png';
import BigLogo from '../images/BigLogo.png';
import DynamicButtons from './DynamicButtons';

function Home() {
    return (
        <div>
            <div className="main">
                <div className="left-column ">
                    <div className="container1">
                        <p className="F1p">Your Journey to Tomorrow Begins Here</p>
                        <p className="f2p">Explore the frontiers of Artificial Intelligence</p>
                        <p className="F3p">
                            Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines
                            think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
                        </p>
                    </div>

                    <div className="cont4">
                        <div className="container3  ">
                            <p style={{ display: 'inline' }}>
                                300<span style={{ color: '#FFD119' }}>+</span>
                            </p>
                            <p className="alycontainer3">resources available</p>
                        </div>

                        <div className="container4">
                            <p style={{ display: 'inline' }}>
                                10K<span style={{ color: '#FFD119' }}>+</span>
                            </p>
                            <p className="alycontainer3">Total Downloads</p>
                        </div>

                        <div className="container5">
                            <p style={{ display: 'inline' }}>
                                10K<span style={{ color: '#FFD119' }}>+</span>
                            </p>
                            <p className="alycontainer3">resources available</p>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="container2">
                        <img className="dynamicImg" src={anagebta5ry} alt="FutureTech" />
                        <img className='photos4'  src={container} alt="Your Browser Doesn't Support This Element" />
                        <p style={{marginLeft:'50px', fontSize:'20px', color:'white', }}>Explore 1000+ resources</p>
                        <p style={{marginLeft:'50px', color:'#98989a'}}>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                        <button style={{marginLeft:'50px'}} class="read-more-button">Explore Resources ↗</button>
                    </div>
                </div>
            </div>

            <div className="section2">
                <div className="icon1">
                    <img className="imgIc1" src={Icon1} alt="Latest News Updates" />
                    <p className="s2p1">Latest News Updates</p>
                    <p className="s2p2">Stay Current</p>
                    <p className="s2p3">Over 1,000 articles published monthly</p>
                </div>
                <div className="icon2">
                    <img className="imgIc2" src={Icon2} alt="Expert Contributors" />
                    <p className="s2p1">Expert Contributors</p>
                    <p className="s2p2">Trusted Insights</p>
                    <p className="s2p3">50+ renowned AI experts on our team</p>
                </div>
                <div className="icon3">
                    <img className="imgIc3" src={Icon3} alt="Global Readership" />
                    <p className="s2p1">Global Readership</p>
                    <p className="s2p2">Worldwide Impact</p>
                    <p className="s2p3">2 million monthly readers</p>
                </div>
            </div>
            <hr />
            <div className="section3">
                <p className="s3p1">Unlock the Power of</p>
                <p className="s3p2">FutureTech Features</p>
                <button style={{alignItems:'center'}} class="read-more-button">View Blog ↗</button>
            </div>

            <div className="grid-container">
                <div className="grid-item item1">
                    <img className="imgIc3" src={Icon1} alt="Future Technology Blog" />
                    <p>Future Technology Blog</p>
                    <p>Stay informed with our blog section dedicated to future technology.</p>
                </div>
                <div className="grid-item item2">
                    <div className="box1 boxes">
                        <p>Quantity</p>
                        <p className="second">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                    </div>
                    <div className="box2 boxes">
                        <p>Variety</p>
                        <p className="second">Articles cover fields like AI, robotics, biotechnology, and more.</p>
                    </div>
                    <div className="box3 boxes">
                        <p>Frequency</p>
                        <p className="second">Fresh content added daily to keep you up to date.</p>
                    </div>
                    <div className="box4 boxes">
                        <p>Authoritative</p>
                        <p className="second">Written by our team of tech experts and industry professionals.</p>
                    </div>
                </div>
                <div className="grid-item item3">
                    <img src={Icon2} alt="Research Insights Blogs" className="imgIc3" />
                    <p>Research Insights Blogs</p>
                    <p>Dive deep into future technology concepts with our research section.</p>
                </div>
                <div className="grid-item item2">
                    <div className="box1 boxes">
                        <p>Quantity</p>
                        <p className="second">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                    </div>
                    <div className="box2 boxes">
                        <p>Variety</p>
                        <p className="second">Articles cover fields like AI, robotics, biotechnology, and more.</p>
                    </div>
                    <div className="box3 boxes">
                        <p>Frequency</p>
                        <p className="second">Fresh content added daily to keep you up to date.</p>
                    </div>
                    <div className="box4 boxes">
                        <p>Authoritative</p>
                        <p className="second">Written by our team of tech experts and industry professionals.</p>
                    </div>
                </div>
            </div>

            <div className="section3">
                <p className="s3p1">A Knowledge Treasure Trove</p>
                <p className="s3p2">Explore FutureTech's In-Depth Blog Posts</p>
                <button style={{alignItems:'center'}} class="read-more-button">View Blog ↗</button>
            </div>
            <hr />

            <div className="mon">
                <p className="mon1 mon2">All</p>
                <p className="mon1">Quantum Computing</p>
                <p className="mon1">AI Ethics</p>
                <p className="mon1">Space Exploration</p>
                <p className="mon1">Biotechnology</p>
                <p className="mon1">Renewable Energy</p>
            </div>

            <div class="people">
    <div class="xox">
        <div class="content-wrapper">
            
            <div class="left-content">
                <div class="circle photo">
                    <img src={john} alt="John Techson" />
                </div>
                <div class="text-container">
                    <p class="nAme">John Techson</p>
                    <p class="nAme2">Technology</p>
                </div>
            </div>
            
            <div class="right-content">
                <div class="textt1">
                    <p class="textt12">October 15, 2023</p>
                    <p class="textt13">The Quantum Leap in Computing</p>
                    <p class="textt14">Explore the revolution in quantum computing, its applications, and its potential impact on various industries.</p>
                </div>
                <button class="read-more-button">Read More ↗</button>
        <DynamicButtons/>
            </div>
        </div>
    </div>
    <div class="xox">
        <div class="content-wrapper">
            
            <div class="left-content">
                <div class="circle photo">
                    <img src={sarah} alt="Sarah Ethicist" />
                </div>
                <div class="text-container">
                    <p class="nAme">Sarah Ethicist</p>
                    <p class="nAme2">Technology</p>
                </div>
            </div>
            
            <div class="right-content">
                <div class="textt1">
                    <p class="textt12">November 5, 2023</p>
                    <p class="textt13">The Ethical Dilemmas of AI</p>
                    <p class="textt14">A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.</p>
                </div>
                <button class="read-more-button">Read More ↗</button>
                <DynamicButtons/>
            </div>
        </div>
    </div>
    <div class="xox">
        <div class="content-wrapper">
            
            <div class="left-content">
                <div class="circle photo">
                    <img src={astronomer} alt="Astronomer" />
                </div>
                <div class="text-container">
                    <p class="nAme">John Techson</p>
                    <p class="nAme2">Technology</p>
                </div>
            </div>
            
            <div class="right-content">
                <div class="textt1">
                    <p class="textt12">December 10, 2023</p>
                    <p class="textt13">The Mars Colonization Challenge</p>
                    <p class="textt14">Exploring the technical and logistical challenges of human colonization on Mars.</p>
                </div>
                <button class="read-more-button">Read More ↗</button>
                <DynamicButtons/>
            </div>
        </div>
    </div>
</div>

            <div className="section3">
                <p className="s3p1">Your Gateway to In-Depth Information</p>
                <p className="s3p2">Unlock Valuable Knowledge with FutureTech's Resources</p>
                <button style={{alignItems:'center'}} class="read-more-button">View Blog ↗</button>
            </div>

            <div className="grid-container">
                <div className="res">
                    <img className="imgIc3" src={icon6} alt="ebooks" />
                    <p className='res1'>Ebooks</p>
                    <p className='res2'>Download our expertly curated ebooks on various tech topics.</p>
                    <div style={{ marginBottom: '20px' }} className="down boxes">
                        <p>Download Ebooks Now</p>
                    </div>
                    <div className="box44 boxes">
                        <div className="box45 boxes">
                            <p style={{ color: '#98989A', fontSize: '14px', marginBottom: '6%' }}>Download By</p>
                            <p style={{ color: 'white', fontSize: '20px', marginTop: '0px' }}>10K + Users</p>
                        </div>
                        <div style={{ display: 'inline' }} className="boximg">
                            <img src={container} alt="Your Browser Doesn't Support This Element" />
                        </div>

                    </div>
                </div>
                <div className="grid-item item2">
                    <div className="topics-container">
                        <div className="topics-title">Variety of Topics</div>
                        <div className="topics-text">
                            <p>Topics include AI in education (25%), renewable energy (20%), healthcare,</p>
                            <p>(15%) space exploration (25%), and biotechnology (15%).</p>
                        </div>
                    </div>
                    <div className="TVI">
                        <img className='mohamedalaa' src={TopicsVarietyImage} alt="Topics Variety" />
                    </div>
                    <div className="sub-container">
                        <div className="totalEs boxes" style={{ display: 'inline-block' }}>
                            <p style={{ color: '#98989A', fontSize: '16px', paddingTop: '8px' }}>Total Ebooks</p>
                            <p style={{ fontSize: '18px' }}>Over 100 ebooks</p>
                        </div>
                        <div className="totalEb boxes">
                            <div className="downloadFormat ">
                                <div className="textContent">
                                    <p style={{ fontSize: '16', color: '#98989A', marginBottom: '0px' }}>Download Formats</p>
                                    <p style={{ fontSize: '18px' }}>PDF format for access.</p>
                                </div>
                                <button className="Button8">
                                    Preview <img src={icon9} alt="Preview Icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='average boxes'>
                        <p className='Ebooks1'>Average Author Expertise</p>
                        <p className='Ebooks2'>
                            Ebooks are authored by renowned experts with an average of 15 years of experience.
                        </p>
                    </div>
                </div>

                <div className="grid-item item3">
                    <img src={icon7} alt="Whitepapers Icon" className="imgIc3" />
                    <p className="res1">Whitepapers</p>
                    <p className="res2">
                        Dive into comprehensive reports and analyses with our collection of whitepapers.
                    </p>
                    <div className="down boxes" style={{ marginBottom: '20px' }}>
                        <p>Download Ebooks Now</p>
                    </div>
                    <div className="box44 boxes">
                        <div className="box45 boxes">
                            <p style={{ color: '#98989A', fontSize: '14px', marginBottom: '6%' }}>Download By</p>
                            <p style={{ color: 'white', fontSize: '20px', marginTop: '0px' }}>10K+ Users</p>
                        </div>
                        <div style={{ display: 'inline' }} className="boximg">
                            <img src={container} alt="Your Browser Doesn't Support This Element" />
                        </div>
                    </div>


                </div>

                <div className="grid-item item2">
                    <div className="topics-container">
                        <div className="topics-title">Topics Coverage</div>
                        <div className="topics-text">
                            <p >Whitepapers cover quantum computing (20%), AI ethics (15%), space</p>
                            <p>mining prospects (20%), AI in healthcare (15%), and renewable energy</p>
                            <p >strategies (30%).</p>
                        </div>
                    </div>
                    <div className="TVI">
                        <img className='mohamedalaa' src={TopicsCoverage} alt="Topics Variety" />
                    </div>
                    <div className="sub-container">
                        <div className="totalEs boxes" style={{ display: 'inline-block' }}>
                            <p style={{ paddingTop: '8px', fontSize: '16px', color: '#98989A' }}>Total Ebooks</p>
                            <p style={{ fontSize: '18px' }}>Over 100 ebooks</p>
                        </div>
                        <div className="totalEb boxes">
                            <div className="downloadFormat">
                                <div className="textContent">
                                    <p style={{ marginBottom: '0px', fontSize: '16', color: '#98989A' }}>Download Formats</p>
                                    <p style={{ marginTop: '' }}>PDF format for access.</p>
                                </div>
                                <button className="Button8">
                                    Preview <img src={icon9} alt="Preview Icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='average boxes'>
                        <p className='Ebooks1' style={{ fontSize: '16px', color: '#98989A' }}>Average Author Expertise</p>
                        <p className='Ebooks2' style={{ fontSize: '18px' }}>
                            Ebooks are authored by renowned experts with an average of 15 years of experience.
                        </p>
                    </div>
                </div>


            </div>

            <div className="section3">
                <p className="s3p1">Unlock the Power of</p>
                <p className="s3p2">FutureTech Features</p>
            </div>


            <div className="tpeople-container">
                <div className="people-card">
                    <div className="people-header">
                        <img src={SarahThompson} alt="Sarah Thompson" className="people-avatar" />
                        <div className="name-location">
                            <h3 className="people-name">Sarah Thompson</h3>
                            <p className="people-location">San Francisco, USA</p>
                        </div>
                    </div>
                    <div className="people-content">
                        <div className="people-stars">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p>The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.</p>
                    </div>
                </div>

                <div className="people-card">
                    <div className="people-header">
                        <img src={RajPatel} alt="Raj Patel" className="people-avatar" />
                        <div className="name-location">
                            <h3 className="people-name">Raj Patel</h3>
                            <p className="people-location">Mumbai, India</p>
                        </div>
                    </div>
                    <div className="people-content">
                        <div className="people-stars">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p>The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis.</p>
                    </div>
                </div>

                <div className="people-card">
                    <div className="people-header">
                        <img src={EmilyAdams} alt="Emily Adams" className="people-avatar" />
                        <div className="name-location">
                            <h3 className="people-name">Emily Adams</h3>
                            <p className="people-location">London, UK</p>
                        </div>
                    </div>
                    <div className="people-content">
                        <div className="people-stars">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p>The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.</p>
                    </div>
                </div>

                <div className="people-card">
                    <div className="people-header">
                        <img src={AlanJackson} alt="Alan Jackson" className="people-avatar" />
                        <div className="name-location">
                            <h3 className="people-name">Alan Jackson</h3>
                            <p className="people-location">Houston, USA</p>
                        </div>
                    </div>
                    <div className="people-content">
                        <div className="people-stars">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p>The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view.</p>
                    </div>
                </div>

                <div className="people-card">
                    <div className="people-header">
                        <img src={JessicaMiller} alt="Jessica Miller" className="people-avatar" />
                        <div className="name-location">
                            <h3 className="people-name">Jessica Miller</h3>
                            <p className="people-location">Boston, USA</p>
                        </div>
                    </div>
                    <div className="people-content">
                        <div className="people-stars">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p>The research papers on genomic breakthroughs have been a goldmine of information. They’ve shaped the direction of my research in genomics.</p>
                    </div>
                </div>

                <div className="people-card">
                    <div className="people-header">
                        <img src={DiegoLopez} alt="Diego Lopez" className="people-avatar" />
                        <div className="name-location">
                            <h3 className="people-name">Diego Lopez</h3>
                            <p className="people-location">Barcelona, Spain</p>
                        </div>
                    </div>
                    <div className="people-content">
                        <div className="people-stars">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p>The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.</p>
                    </div>
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
}

export default Home;
