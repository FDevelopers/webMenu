const express = require('express');
const router = express.Router();
const wifi = require('node-wifi');

wifi.init({
    iface: null // network interface, choose a random wifi interface if set to null
});


router.get('/', function (req, res) {
    wifi.scan((error, networks) => {
        if (error) {
            console.log(error);
        } else {
            console.log(networks);
        }
    });
    res.send('Birds home page');
});

router.get('/scan', function (req, res) {
    wifi.scan((error, networks) => {
        if (error) {
            res.send(error);
        } else {
            res.send(networks);
        }
    });
});

router.post('/connect', function (req, res) {
    wifi.connect({ ssid: 'Trunmore', password: 'clavesecreta' }, () => {
        console.log('Connected');
    });
    res.send('Wifi home page');
});

module.exports = router;
