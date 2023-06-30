import React, { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes} from "react-router-dom";
import LoginPage from './pages/loginPage/LoginPage';
import ActionPage from './pages/actionPage/ActionPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import {Col, Container, Row} from "react-bootstrap";
import PlayerInfoBox from "./components/PlayerInfoBox.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import RegisterPage from "./pages/registerPage/RegisterPage.tsx";
import {useAuth} from "./common/AuthProvider.jsx";

function App() {
    let auth = useAuth()
  return (
      <Container className="app__container">
          {auth.userId &&
              <Row>
                  <Col xs="auto">
                      <PlayerInfoBox />
                  </Col>
                  <Col xs="auto" className="app__navbar_col" >
                      <NavigationBar />
                  </Col>
              </Row>
          }
          
          <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/action" element={<ActionPage />}  />
              <Route path="/register" element={<RegisterPage />}  />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </Container>
          
  )
}

export default App