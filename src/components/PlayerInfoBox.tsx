import React from 'react'
import {Heart, Capslock} from 'react-bootstrap-icons'
import './playerInfoBox.css'

const PlayerInfoBox = () => {
    return (
        <div className='playerInfoBox__container whiteBox'>
            <h5 className="playerInfoBox__h3">Player name here</h5>
            <div className='playerInfoBox__divider'></div>
            
                <div className="playerInfoBox__hp_row">
                    <Heart className="playerInfoBox__hpIcon"/>
                    <p className="playerInfoBox__hp">100</p>
                </div>
            <div className="playerInfoBox__hp_row">
                    <div className="playerInfoBox__hpIcon"><Capslock/></div>
                    <p className="playerInfoBox__hp">1337</p>
                
            </div>
            <div>
            </div>
        </div>
    )
}

export default PlayerInfoBox