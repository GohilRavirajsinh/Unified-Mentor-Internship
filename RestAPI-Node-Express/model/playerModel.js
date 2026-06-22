const mongoose = require('mongoose');

// Create Players Schema
const playerSchema = new mongoose.Schema({
    playerLevel: {type: Number, required: true},
    playerName: {type: String, required: true, unique: true},
    playerRank: {type: String, required: true},
},
    { timestamps: true },           // jo first hoga vohi run hoga in this case
    { collection: 'bgmiPlayers' },  // jo first hoga vohi run hoga in this case
);

// Define Players Schema
const playerModelVar = mongoose.model('bgmi', playerSchema);

module.exports = playerModelVar;