const API_URL = 'http://127.0.0.1:3000/info/?'
const API_Game = 'game=csgo&'
const API_IP = 'ip=65.0.148.89&'
const API_Port = 'port=27015'
reset()
fecthData()
async function fecthData() {
    await fetch(API_URL+API_Game+API_IP+API_Port).
    then(res => {
        res.json().then(data => {
            document.getElementById("name").innerText = data.info.name
            document.getElementById("map").innerText = data.info.map
            document.getElementById("status").innerHTML = 'Online'
            document.getElementById("players").innerHTML = data.info.raw.numplayers + '/' + data.info.maxplayers
        })
        })
    .then(data => {
        console.log(data)
    }
    ).catch(err => console.log(err))
}

function reset() {
    document.getElementById("name").innerText = "-"
    document.getElementById("status").innerText = "-"
    document.getElementById("map").innerText = "-"
    document.getElementById("players").innerText = "-"
}