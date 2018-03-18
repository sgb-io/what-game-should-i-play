const fs = require('fs')
const GAME_DIR = `D:\\SteamLibrary\\steamapps\\common`

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

if (process.platform === 'win32') {
    let vidya
    try {
        vidya = fs.readdirSync(GAME_DIR)
    } catch (error) {
        document.body.innerHTML = `
            <h3>Yeah... you probably don't have your games installed the same place as Sam.</h3>
            <p>Go update <code>GAME_DIR</code> in <code>renderer.js</code>.</p>
        `
        return
    }
    const randomIndex = Math.floor(Math.random() * vidya.length)
    const game = vidya[randomIndex]
    document.body.innerHTML = `
        <h3>The game you want to play is...</h3>
        <h1>${game}</h1>
        <br/>
        <img src="http://emojis.slackmojis.com/emojis/images/1495751136/2331/fidget_spinner.gif"/>
        <br/>
        <br/>
        <br/>
        <a href="javascript:window.location.reload()">RE-ROLL?</a>
        <p>DISCLAIMER: Entirely inaccurate as directories do not equal installed games.</p>
    `
} else {
    alert(`You're not on windows, scrub.`)
}