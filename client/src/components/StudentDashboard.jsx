/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form, Modal, Container, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt, FaUser, FaStar } from 'react-icons/fa';
import './StudentDashboard.css'; 

function StudentDashboard() {
  const [selectedArea, setSelectedArea] = useState('');
  const [duration, setDuration] = useState(30);
  const [amount, setAmount] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleBooking = () => {
    const amount = duration === 30 ? 2000 : duration === 45 ? 3000 : 4000;
    setAmount(amount);
    setShowConfirmation(true);
  };

  const confirmBooking = () => {
    navigate('/payment', { state: { sessionId: '1', amount } });
  };

  return (
    <Container className="student-dashboard-container mt-5">
      <h2 className="dashboard-title mb-4">Book a 1x1 Session</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title className="card-title"><FaUser className="icon" /> Choose Your Area of Interest</Card.Title>
              <Form.Select 
                value={selectedArea} 
                onChange={(e) => setSelectedArea(e.target.value)} 
                className="form-select"
              >
                <option value="Career Guidance">Career Guidance</option>
                <option value="Interview Preparation">Interview Preparation</option>
                <option value="Resume Review">Resume Review</option>
              </Form.Select>
            </Card.Body>
          </Card>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title className="card-title"><FaCalendarAlt className="icon" /> Select Duration</Card.Title>
              <Form.Select 
                value={duration} 
                onChange={(e) => setDuration(e.target.value)} 
                className="form-select"
              >
                <option value={30}>30 mins - $2000</option>
                <option value={45}>45 mins - $3000</option>
                <option value={60}>60 mins - $4000</option>
              </Form.Select>
            </Card.Body>
          </Card>
          <Button variant="primary" className="book-button" onClick={handleBooking}>
            Book Session
          </Button>
        </Col>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title className="card-title"><FaStar className="icon" /> Session History</Card.Title>
              <ul className="session-history">
                <li>Career Guidance - 45 mins - Completed</li>
                <li>Interview Preparation - 30 mins - Completed</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Area:</strong> {selectedArea}</p>
          <p><strong>Duration:</strong> {duration} mins</p>
          <p><strong>Total Amount:</strong> ${amount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmBooking}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default StudentDashboard;*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Form, Modal, Container, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt, FaUser, FaStar } from 'react-icons/fa';
import './StudentDashboard.css';

function StudentDashboard() {
  const [selectedArea, setSelectedArea] = useState('');
  const [duration, setDuration] = useState(30);
  const [amount, setAmount] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleBooking = () => {
    const amount = duration === 30 ? 2000 : duration === 45 ? 3000 : 4000;
    setAmount(amount);
    setShowConfirmation(true);
  };

  const confirmBooking = () => {
    navigate('/confirmation', { state: { sessionId: '1', amount } });
  };

  return (
    <Container className="student-dashboard-container mt-5">
      <h2 className="dashboard-title mb-4">Book a 1x1 Session</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title className="card-title"><FaUser className="icon" /> Choose Your Area of Interest</Card.Title>
              <Form.Select 
                value={selectedArea} 
                onChange={(e) => setSelectedArea(e.target.value)} 
                className="form-select"
              >
                <option value="Career Guidance">Career Guidance</option>
                <option value="Interview Preparation">Interview Preparation</option>
                <option value="Resume Review">Resume Review</option>
              </Form.Select>
            </Card.Body>
          </Card>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title className="card-title"><FaCalendarAlt className="icon" /> Select Duration</Card.Title>
              <Form.Select 
                value={duration} 
                onChange={(e) => setDuration(e.target.value)} 
                className="form-select"
              >
                <option value={30}>30 mins - $2000</option>
                <option value={45}>45 mins - $3000</option>
                <option value={60}>60 mins - $4000</option>
              </Form.Select>
            </Card.Body>
          </Card>
          <Button variant="primary" className="book-button" onClick={handleBooking}>
            Book Session
          </Button>
        </Col>
        <Col md={6}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title className="card-title"><FaStar className="icon" /> Session History</Card.Title>
              <ul className="session-history">
                <li>Career Guidance - 45 mins - Completed</li>
                <li>Interview Preparation - 30 mins - Completed</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Area:</strong> {selectedArea}</p>
          <p><strong>Duration:</strong> {duration} mins</p>
          <p><strong>Total Amount:</strong> ${amount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmBooking}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default StudentDashboard;
