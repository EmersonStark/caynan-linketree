import React from 'react';

import telegram from '../..//assets/telegram.svg'
import github from '../..//assets/github.svg'
import spotify from '../..//assets/spotify.svg'

function SocialMedia() {
    return (
     <div className="social-media">
        <a href="https://t.me/caynan"><img src={telegram} alt="Telegram" /></a>
        <a href="https://open.spotify.com/playlist/7x2zhLah6H5acgFeuHY2oo?si=6-4nvPuURcK2WUyExfLrSg"> <img src={spotify} alt="Spotify" /></a>
        <a href="https://github.com/caynanr"> <img src={github} alt="Github" /></a>
      </div>
    )
}

export default SocialMedia