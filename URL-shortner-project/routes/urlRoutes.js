const express = require('express');
const router = express.Router(); // Ensure Capital 'R'
const urlController = require('../controller/urlController');

router.post('/shortner', urlController.createLinkPostUrl);

// Redirectional Route - redirect on original file using created api ,http Request - Get For Redirect
router.get('/:shortId', urlController.redirectLinkGetUrl);

// Analytics Route How many time user visited and which time open ,http Request - Get For Analytics
router.get('/analytics/:shortId', urlController.analyticsGetUrl);

// For get Homepage Route Using ejs File
router.get('/', urlController.getHomePage)

module.exports = router;