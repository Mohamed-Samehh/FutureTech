import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PodcastPage.css';
import StarRating from './StarRating';
import LatestEpisodes from './LatestEpisodes';
import BigLogo from '../src/images/BigLogo.png';

function PodcastPage() {
    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);

    return (
        <>
            <Container className="podcast-page">
                <header className="text-center mb-5">
                    <h1 className="main-heading">Unlock the World of Artificial Intelligence through Podcasts</h1>
                    <p className="main-description">
                        Delve deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs,
                        and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a
                        gateway to knowledge and innovation.
                    </p>
                </header>

                <Row className="mb-5">
                    <Col md={6}>
                        <Card className="podcast-card">
                            <Card.Body>
                                <div className="image-container">
                                    <Card.Img variant="top" src="./images/brain image.jpg" className="podcast-img" />
                                    <i className="fa fa-play-circle play-icon"></i>
                                </div>
                                <h2 className="podcast-title">AI Revolution</h2>
                                <p className="host">Host: Dr. Sarah Mitchell</p>
                                <p className="podcast-description">
                                    Delves into the transformative impact of AI on industries, featuring expert interviews and real-world
                                    case studies. Explore the possibilities of AI in healthcare, finance, and more.
                                </p>
                                <div className="star-rating-container">
                                    <StarRating rating={rating1} onRatingChange={setRating1} />
                                </div>
                                <br />
                                <Button className="listen-btn" variant="dark">
                                    Listen to Podcast 
                                    <i className="fas fa-arrow-up-right-from-square" style={{marginLeft: 5}}></i>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="podcast-card">
                            <Card.Body>
                                <div className="image-container">
                                    <Card.Img variant="top" src="./images/robot hand image.jpg" className="podcast-img" />
                                    <i className="fa fa-play-circle play-icon"></i>
                                </div>
                                <h2 className="podcast-title">AI Conversations</h2>
                                <p className="host">Host: Mark Anderson</p>
                                <p className="podcast-description">
                                    Engage in thought-provoking conversations with leading experts. Mark discusses the future of AI, the impact
                                    on society, and how it's shaping industries worldwide.
                                </p>
                                <div className="star-rating-container">
                                    <StarRating rating={rating2} onRatingChange={setRating2} />
                                </div>
                                <br />
                                <Button className="listen-btn" variant="dark">
                                    Listen to Podcast 
                                    <i className="fas fa-arrow-up-right-from-square" style={{marginLeft: 5}}></i>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <LatestEpisodes />
            </Container>
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
        </>
    );
}

export default PodcastPage;
