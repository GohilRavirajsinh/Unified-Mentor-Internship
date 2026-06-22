const playerModelVar = require('../model/playerModel');

// Get All Players
exports.getAllPlayers = async (req, res) => {
    try {
        const getPlayers = await playerModelVar.find();
        return res.status(200).json(getPlayers)
    } catch (err) {
        return res.status(500).json({ err: 'Failed to Fetch Players' })
    }
}

// Get Players By Level
exports.getPlayerByLevel = async (req, res) => {
    try {
        const playerLevel = Number(req.params.playerLevel);
        const getByLevel = await playerModelVar.findOne({ playerLevel });
        if (!getByLevel) {
            return res.status(404).json({ err: 'Player Not Found' })
        }
        return res.status(200).json(getByLevel);
    } catch (err) {
        return res.status(500).json({ err: "Failed to fetch Player" })
    }
};

// POST Create Player
exports.createNewPlayer = async (req, res) => {
    try {
        // const { playerLevel, playerName, playerRank } = req.body;
        // const newPlayer = new playerModelVar({ playerLevel, playerName, playerRank })
        const newPlayer = new playerModelVar({
            playerLevel: req.body.playerLevel,
            playerName: req.body.playerName,
            playerRank: req.body.playerRank,
        });
        await newPlayer.save();
        return res.status(201).json(newPlayer);
    } catch (err) {
        return res.status(500).json({ err: 'Failed to create player' });
    }
}

// PUT Update Player Detail using Level
exports.updatePlayer = async (req, res) => {
    try {
        // const playerLevel = Number(req.params.playerLevel) 
        const updatePlayer = await playerModelVar.findOneAndUpdate(
            { playerLevel: Number(req.params.playerLevel) },
            {
                playerName: req.body.playerName,
                playerRank: req.body.playerRank,
            }
        )
        if (!updatePlayer) {
            return res.status(404).json({ err: 'Player Not Found' })
        }
        res.status(201).json(updatePlayer)
    } catch (err) {
        return res.status(500).json({ err: 'Failed to Update Player Details' })
    }
}

// DELETE Player using Name
exports.deletePlayerByName = async (req, res) => {
    try {
        const playerName = req.params.playerName
        const deletePlayer = await playerModelVar.findOneAndDelete({playerName})
        if (!deletePlayer) {
            return res.status(404).json({err: 'Player not Found'})
        }
        res.status(201).json(deletePlayer)
    } catch (err) {
        return res.status(500).json({err: 'Failed to Delete Player'})
    }
}