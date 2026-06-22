const express = require('express')
const playerController = require('../controller/playerController')
const router = express.Router();

router.get('/players', playerController.getAllPlayers);
router.get('/players/:playerLevel', playerController.getPlayerByLevel);
router.post('/players', playerController.createNewPlayer);
router.put('/players/:playerLevel', playerController.updatePlayer);
router.delete('/players/:playerName', playerController.deletePlayerByName);

module.exports = router;