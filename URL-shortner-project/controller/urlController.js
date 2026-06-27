const shortid = require('shortid')
const URL = require('../models/urlModel')

exports.getHomePage = async (req, res) => {
    try {
        const url = await URL.find();
        res.render('index', { url })
    } catch (err) {
        res.status(500).json({ error: 'Failed to show Page', err })
    }
}

exports.createLinkPostUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        const shortnerCode = shortid.generate();

        await URL.create({
            shortCode: shortnerCode,
            originalUrl,
            visitedHistory: [],
        });

        res.redirect('/api')
        // return res.json({ shortnerCode })
    } catch (err) {
        console.log(`Failed to short URL ${err}`);
    }
}

exports.redirectLinkGetUrl = async (req, res) => {
    try {
        const { shortId } = req.params;

        const url = await URL.findOne({ shortCode: shortId })
        if (!url) {
            return res.status(404).json({ error: "URL not found" })
        }

        const visitedEntry = {
            visitTime: new Date(),
            visitCount: (url.visitedHistory.length + 1) // count badhane ke liye
        };

        url.visitedHistory.push(visitedEntry)
        await url.save();

        return res.redirect(url.originalUrl)
    } catch (err) {
        return res.status(500).json({ msg: "Server error", err })
    }
}

exports.analyticsGetUrl = async (req, res) => {
    const { shortId } = req.params;

    const url = await URL.findOne({ shortCode: shortId })
    if (url) {
        res.render('urlDetails', { url });
    } else {
        res.status(404).render({ error: "Url Not Found" })
    }

    // if (!url) {
    //     return res.status(404).json({ error: "URL not found" })
    // }

    // return res.status(200).json({
    //     totalClicks: url.visitedHistory.length,
    //     analytics: url.visitedHistory
    // })
}