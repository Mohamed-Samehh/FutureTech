import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './LatestEpisodes.css';

const episodes = [
    {
        title: "AI in Healthcare",
        description: "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
        duration: "2.30 min",
        img: "./images/vr image.jpeg",
    },
    {
        title: "AI Ethics",
        description: "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
        duration: "2.30 min",
        img: "./images/ai handshake image.webp",
    },
    {
        title: "Machine Learning Explained",
        description: "Dive into the intricacies of machine learning with AI expert Sarah Davis.",
        duration: "2.30 min",
        img: "./images/machine image.jpg",
    },
    {
        title: "AI and the Future of Work",
        description: "Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
        duration: "2.30 min",
        img: "./images/vr job.webp",
    },
    {
        title: "AI in Education",
        description: "Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience.",
        duration: "2.30 min",
        img: "./images/vr library.webp",
    },
    {
        title: "AI in Entertainment",
        description: "David Smith explores the influence of AI in the entertainment industry.",
        duration: "2.30 min",
        img: "./images/vr home.png",
    },
];

function LatestEpisodes() {
    return (
        <Container className="latest-episodes-section">
            <header className="text-center mb-5">
                <h2 className="latest-episodes-heading">Latest Podcast Episodes</h2>
                <p className="latest-episodes-description">Stay Informed with Fresh Content</p>
            </header>
            <Row>
                {episodes.map((episode, index) => (
                    <Col key={index} sm={6} md={6} lg={4} className="mb-4 d-flex align-items-stretch">
                        <Card className="latest-episode-card">
                            <div className="image-container">
                                <Card.Img variant="top" src={episode.img} className="latest-episode-img" />
                                <i className="fa fa-play-circle play-icon"></i>
                            </div>
                            <Card.Body>
                                <h3 className="latest-episode-title">{episode.title}</h3>
                                <p className="latest-episode-description">{episode.description}</p>
                                <div className="episode-duration">
                                    <span>{episode.duration}</span>
                                </div>
                                <Button className="listen-btn" variant="dark">
                                    Listen to Podcast <i className="fas fa-arrow-up-right-from-square" style={{ marginLeft: 5 }}></i>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default LatestEpisodes;
