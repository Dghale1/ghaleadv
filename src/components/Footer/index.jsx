import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FooterStyled } from "./style";

export default function Footer() {
  return (
    <FooterStyled>
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <Row>
                <h3>Contact Us</h3>
              </Row>
              <Row>
                <h6>GhaleAdvT</h6>
              </Row>
              <Row>
                <h6>Thamel,Kathmandun,Nepal</h6>
              </Row>
              <Row>
                <h6>
                  <h6>+9779860168038</h6>
                </h6>
              </Row>
              <Row>
                <h6>
                  <h6>
                    <a href={`mailto:GhaleAdvT@gmail.com`}>
                      GhaleAdvT@gmail.com
                    </a>
                  </h6>
                </h6>
              </Row>
            </Col>
            <Col>
              <Row className="text-left">
                <h3>Destination</h3>
              </Row>
              <Row>
                <a class="" role="button" aria-disabled="true">
                  <h6>Langtang</h6>
                </a>
              </Row>
              <Row>
                <a class="" role="button" aria-disabled="true">
                  <h6>Evrest Base Camp</h6>
                </a>
              </Row>
              <Row>
                <a class="" role="button" aria-disabled="true">
                  <h6>Annupurna Base Camp</h6>
                </a>
              </Row>
            </Col>
          </Row>
          <hr />
          <h6 className="text-center">&copy;GhaleAdvT. All Right Reserved.</h6>
        </Container>
      </footer>
    </FooterStyled>
  );
}
