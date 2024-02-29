const express = require('express');
const router = express.Router();
const escpos = require('escpos');
escpos.USB = require('escpos-usb');

//const usbDevice = new escpos.USB(0x0FE6, 0x811E);
const device  = new escpos.USB();



router.get('/', function (req, res) {

});

router.get('/connect', async function (req, res) {

    res.send("Configurado Correctamente..");
});

router.get('/print', function (req, res) {

    res.send("Enviado Correctamente..");
});




module.exports = router;
