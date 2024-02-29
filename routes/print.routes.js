const express = require('express');
const router = express.Router();
//const { usb, getDeviceList, findByIds } = require('usb');



router.get('/', function (req, res) {

});

router.get('/connect', async function (req, res) {
    //const device = findByIds(0x0FE6, 0x811E);
    //console.log(device.open());
    res.send("Configurado Correctamente..");
});

router.get('/print', function (req, res) {

    res.send("Enviado Correctamente..");
});




module.exports = router;
