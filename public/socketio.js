var socket = io();
let string = 'Mkt';
let Data = [];
let DataCam1 = [];
let DataCam2 = [];
let DataCam3 = [];
let DataCam4 = [];

let DataCam5 = [];
let DataCam6 = [];
let DataCam7 = [];
let DataCam8 = [];


let CameraAtiva1=0;
let CameraAtiva2=0;
let CameraAtiva3=0;
let CameraAtiva4=0;
let CameraAtiva5=0;
let CameraAtiva6=0;
let CameraAtiva7=0;
let CameraAtiva8=0;





socket.on("Mensurer", data => {
    Data = data.value.split('/');
    DataCam1 = Data[1].split('-');
    DataCam2 = Data[2].split('-');
    DataCam3 = Data[3].split('-');
    DataCam4 = Data[4].split('-');

    DataCam5 = Data[5].split('-');
    DataCam6 = Data[6].split('-');
    DataCam7 = Data[7].split('-');
    DataCam8 = Data[8].split('-');

    page(data.value);

    console.log(data.value)

    let voltageCam1 = document.getElementById("v1");
    let amperCam1 = document.getElementById("a1");

    let voltageCam2 = document.getElementById("v2");
    let amperCam2 = document.getElementById("a2");

    let voltageCam3 = document.getElementById("v3");
    let amperCam3 = document.getElementById("a3");


    let voltageCam4 = document.getElementById("v4");
    let amperCam4 = document.getElementById("a4");


    let voltageCam5 = document.getElementById("v5");
    let amperCam5 = document.getElementById("a5");

    let voltageCam6 = document.getElementById("v6");
    let amperCam6 = document.getElementById("a6");

    let voltageCam7 = document.getElementById("v7");
    let amperCam7 = document.getElementById("a7");


    let voltageCam8 = document.getElementById("v8");
    let amperCam8 = document.getElementById("a8");


    voltageCam1.innerHTML = DataCam1[0] + " Volts";
    amperCam1.innerHTML = DataCam1[1] + " mA";

    voltageCam2.innerHTML = DataCam2[0] + " Volts";
    amperCam2.innerHTML = DataCam2[1] + " mA";

    voltageCam3.innerHTML = DataCam3[0] + " Volts";
    amperCam3.innerHTML = DataCam3[1] + " mA";

    voltageCam4.innerHTML = DataCam4[0] + " Volts";
    amperCam4.innerHTML = DataCam4[1] + " mA";


    voltageCam5.innerHTML = DataCam5[0] + " Volts";
    amperCam5.innerHTML = DataCam5[1] + " mA";

    voltageCam6.innerHTML = DataCam6[0] + " Volts";
    amperCam6.innerHTML = DataCam6[1] + " mA";

    voltageCam7.innerHTML = DataCam7[0] + " Volts";
    amperCam7.innerHTML = DataCam7[1] + " mA";

    voltageCam8.innerHTML = DataCam8[0] + " Volts";
    amperCam8.innerHTML = DataCam8[1] + " mA";

    let amperTotal = parseFloat( DataCam1[1]) +  parseFloat( DataCam2[1]) +
    parseFloat( DataCam3[1])+parseFloat( DataCam4[1])+parseFloat( DataCam5[1])+
    parseFloat( DataCam6[1]+parseFloat( DataCam7[1])+parseFloat( DataCam8[1]));

    console.log(amperTotal)

    testValue();



});

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

function desativarBox(id) {

    id.style.backgroundColor = 'gray';
    id.style.color = 'darkgray'
}

function ativarBox(id){

    id.style.backgroundColor = '#326fa8';
    id.style.color = 'white'
}

function testValue() {



    if (DataCam1[0] <= 5) {

        let id = document.getElementById("cam1");
        CameraAtiva1=0;
        desativarBox(id);

    }
    else{
        let id = document.getElementById("cam1");
        CameraAtiva1=1;
        ativarBox(id);
    }

    if (DataCam2[0] <= 5) {

        let id = document.getElementById("cam2");
        CameraAtiva2=0;
        desativarBox(id);
    }
    else{
        let id = document.getElementById("cam2");
        CameraAtiva2=1;
        ativarBox(id);
    }

    if (DataCam3[0] <= 5) {

        let id = document.getElementById("cam3");
        CameraAtiva3=0;
        desativarBox(id);
    }
    else{
        let id = document.getElementById("cam3");
        CameraAtiva3=1;
        ativarBox(id);
    }

    if (DataCam4[0] <= 5) {

        let id = document.getElementById("cam4");
        CameraAtiva4=0;
        desativarBox(id);
    }
    else{
        let id = document.getElementById("cam4");
        CameraAtiva4=1;
        ativarBox(id);
    }

    if (DataCam5[0] <= 5) {

        let id = document.getElementById("cam5");
        CameraAtiva5=0;
        desativarBox(id);
    }
    else{
        let id = document.getElementById("cam5");
        CameraAtiva5=4;
        ativarBox(id);
    }

    if (DataCam6[0] <= 5) {

        let id = document.getElementById("cam6");
        CameraAtiva6=0;
        desativarBox(id);
    }
    else{
        let id = document.getElementById("cam6");
        CameraAtiva6=4;
        ativarBox(id);
    }
    if (DataCam7[0] <= 5) {

        let id = document.getElementById("cam7");
        CameraAtiva7=0;
        desativarBox(id);
    }
    else{
        let id = document.getElementById("cam7");
        CameraAtiva7=4;
        ativarBox(id);
    }

    if (DataCam8[0] <= 5) {

        let id = document.getElementById("cam8");
        CameraAtiva8=0;
        desativarBox(id);
    }
    else{
        let id = document.getElementById("cam8");
        CameraAtiva8=4;
        ativarBox(id);
    }
    
    let CameraTotal = (CameraAtiva1+CameraAtiva2+CameraAtiva3+CameraAtiva4+
        CameraAtiva5+CameraAtiva6+CameraAtiva7+CameraAtiva8);

        document.getElementById("T1").innerHTML=CameraTotal;

    console.log("CameraTotal= " + CameraTotal)
}