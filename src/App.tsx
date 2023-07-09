import React, {useEffect, useRef, useState} from 'react'
import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from './pages/loginPage/LoginPage';
import ActionPage from './pages/actionPage/ActionPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import PlayerInfoBox from "./components/PlayerInfoBox.tsx";
import NavigationBar from "./components/NavigationBar.tsx";
import RegisterPage from "./pages/registerPage/RegisterPage.tsx";
import {useAuth} from "./common/AuthProvider.jsx";
import RequireAuth from "./common/RequireAuth.tsx";
import InventoryPage from "./pages/InventoryPage/InventoryPage.tsx";
import jwtDecode from "jwt-decode";
import {fetchPlayerFromAPI} from "./pages/loginPage/api-login.ts";

function App() {
    const [player, setPlayer] = useState<Player>(null)
    const mounted = useRef<boolean>(false)
    const timerLogoutId = useRef<number>(null)
    const [loading, setLoading] = useState(true)
    let auth = useAuth()

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true
            readToken()
                .then(() => setLoading(false))
        }
    }, [])

    async function readToken() {
        const token = localStorage.getItem('AUTH_TOKEN')
        if (!token) return;

        const {exp, id, playerName} = jwtDecode(token)

        const expirationTime = (exp * 1000) - 60000 // Throw token a minute early to avoid latency issues
        if (Date.now() >= expirationTime) {
            localStorage.removeItem('AUTH_TOKEN')
        } else {
            startLogOutTimer(expirationTime - Date.now())
            await loadPlayer(id)
        }

    }

    function startLogOutTimer(milliseconds: number) {
      timerLogoutId.current = setTimeout(() => {
          timerLogoutId.current = null
            logout()
        }, milliseconds)
    }

    function logout() {
        localStorage.removeItem("AUTH_TOKEN");
        if(timerLogoutId.current){ // Logout was made by user -> LogOut timer must be cleansed
        clearTimeout(timerLogoutId.current)
        timerLogoutId.current = null;
        }
        auth.setIdHandler(null)
    }

    async function loadPlayer(playerId){
      return fetchPlayerFromAPI(playerId)
            .then(res => {
                const p: Player = res.data
                setPlayer(p)
                auth.setIdHandler(p.playerId)
            })
    }

    return (
        <Container className="app__container">
            {!loading ?
                <>
                    {auth.userId &&
                        <Row>
                            <Col xs="auto">
                                <PlayerInfoBox player={player}/>
                            </Col>
                            <Col xs="auto" className="app__navbar_col">
                                <NavigationBar logout={logout} />
                            </Col>
                        </Row>
                    }

                    <Routes>
                        <Route path="/" element={<Navigate to="/login"/>}/>
                        <Route path="/login" element={<LoginPage loadPlayer={loadPlayer}/>}/>
                        <Route path="/action" element={
                            <RequireAuth>
                                <ActionPage/>
                            </RequireAuth>
                        }/>
                        <Route path="/inventory" element={
                            <RequireAuth>
                                <InventoryPage/>
                            </RequireAuth>
                        }/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </>
                :
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </Container>
    )
}

export default App
