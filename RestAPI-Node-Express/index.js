const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/playerRoutes')

const app = express();
app.use(express.urlencoded());

// Player Routes
app.use(playerRoutes)  // using as a middleware

// MongoDB Connection
const Connection = mongoose.connect('mongodb://localhost:27017/UnifiedMentor')
Connection.then(() => {
    console.log('Connection Succesfully!');
}).catch((err) => {
    console.log(`Connection Failed For ${err} This Reason`);
})

// Create Players Schema
// const playerSchema = new mongoose.Schema({
//     playerLevel: Number,
//     playerName: String,
//     playerRank: String,
// },
//     { timestamps: true },           // jo first hoga vohi run hoga in this case
//     { collection: 'bgmiPlayers' },  // jo first hoga vohi run hoga in this case
// );

// Define Players Schema
// const playerModel = new mongoose.model('bgmi', playerSchema);


// POST create new Player
// app.post('/players', async (req, res) => {
//     try {
//         const newPlayer = new playerModel({
//             playerLevel: req.body.playerLevel,
//             playerName: req.body.playerName,
//             playerRank: req.body.playerRank,
//         });
//         await newPlayer.save();
//         return res.status(201).json(newPlayer);
//     } catch (err) {
//         return res.status(500).json({ err: 'Failed to create player' });
//     }
// })

// Get All Players
// app.get("/players", async (req, res) => {
//     try {
//         const getPlayers = await playerModel.find();
//         return res.status(200).json(getPlayers)
//     } catch (err) {
//         return res.status(500).json({ err: 'Failed to Fetch Players' })
//     }
// })

// Get a specific Player by Level
// app.get("/players/:playerLevel", async (req, res) => {
//     try {
//         const playerLevel = Number(req.params.playerLevel);
//         const getByLevel = await playerModel.findOne({ playerLevel });
//         if (!getByLevel) {
//             return res.status(404).json({ err: 'Player Not Found' })
//         }
//         return res.status(200).json(getByLevel);
//     } catch (err) {
//         return res.status(500).json({ err: "Failed to fetch Player" })
//     }
// })

// Put request for edit the existing Player by their Level
// app.put('/players/:playerLevel', async (req, res) => {
//     try {
//         // const playerLevel = Number(req.params.playerLevel) 
//         const updatePlayer = await playerModel.findOneAndUpdate(
//             { playerLevel: Number(req.params.playerLevel) },
//             {
//                 playerName: req.body.playerName,
//                 playerRank: req.body.playerRank,
//             }
//         )
//         if (!updatePlayer) {
//             return res.status(404).json({ err: 'Player Not Found' })
//         }
//         res.status(201).json(updatePlayer)
//     } catch (err) {
//         return res.status(500).json({ err: 'Failed to Update Player Details' })
//     }
// })

// Delete Player by their name API
// app.delete('/players/:playerName', async (req, res) => {
//     try {
//         const playerName = req.params.playerName
//         const deletePlayer = await playerModel.findOneAndDelete(playerName)
//         if (!deletePlayer) {
//             return res.status(404).json({err: 'Player not Found'})
//         }
//         res.status(201).json(deletePlayer)
//     } catch (err) {
//         return res.status(500).json({err: 'Failed to Delete Player'})
//     }
// })

const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})