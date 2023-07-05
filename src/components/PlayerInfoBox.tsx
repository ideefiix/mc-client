import React from 'react'
import {Heart, Capslock} from 'react-bootstrap-icons'
import './playerInfoBox.css'

const PlayerInfoBox = ({player}) => {
    return (
        <div className='playerInfoBox__container whiteBox'>
            <h5 className="playerInfoBox__h3">{player.playerName}</h5>
            <div className='playerInfoBox__divider'></div>
            
                <div className="playerInfoBox__hp_row">
                    <Heart className="playerInfoBox__hpIcon"/>
                    <p className="playerInfoBox__hp">{player.hp}</p>
                </div>
            <div className="playerInfoBox__hp_row">
                    <div className="playerInfoBox__hpIcon"><Capslock/></div>
                    <p className="playerInfoBox__hp">LVL</p>
                
            </div>
            <div>
            </div>
        </div>
    )
}

export default PlayerInfoBox