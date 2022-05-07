var socket = io();
let string = 'Mkt';
let Data = [];

socket.on("Mensurer", data => {

    page(data.value);
})

function page(data) {
    let url = window.location.href
    console.log(window.location.href)
    if (data.match('MKT')) {
        if (url === "http://localhost:3001/mkt") {

        } else {
            window.location.href = "http://localhost:3001/mkt";
        }

    }
    else {
        if (url === "http://localhost:3001/") {

        } else {
            window.location.href = "http://localhost:3001/";
        }

    }


}