import {React} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";
import Courses from "./Pages/Courses";



function App() {
 
 
  return (
    <Container className="p-0 back" fluid={true}>
      <Row>
        <Col xs={2}></Col>
        <Col xs={8} className="p-0">
          <Router>
            <Header />
            <Row className="mt-4">
              <Col  lg={3} xs={12}>
                <Profile/>
              </Col>
              <Col lg={9} xs={12} style={{minHeight:'72vh'}}>
              <Route path="/" exact component={Courses}/>      
              </Col>
            </Row>
            <Row className="mt-4">
            <Footer/>
            </Row>
          </Router>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
}

export default App;
