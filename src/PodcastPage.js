import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PodcastPage.css';
import StarRating from './StarRating';
import LatestEpisodes from './LatestEpisodes';
import Nav from './Nav';

function PodcastPage() {
    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);

    return (
        <>
            <Nav />
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
        </>
    );
}

export default PodcastPage;
