import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Background() {
    const bgImgSrc = "https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg";
    const overlayColor = 'rgba(85, 107, 47, 0.6)';

    const columnStyle = {
        backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(${bgImgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
                    <Col style={columnStyle}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
