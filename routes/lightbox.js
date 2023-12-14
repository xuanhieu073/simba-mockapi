const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    "heading": "Singlife with Aviva Strengthens Investment Office",
    "image": "../../assets/images/newsroom-article-image.png",
    "imageMobile": "../../assets/images/newsroom-article-image-small.png",
    "alt": "Image of Singlife with aviva strengthens investment office",
    "description": "<p>In building a sustainable business through responsible investments, Singlife has co-seeded several sustainable funds since the start of 2022, committing US$50 million (approximately S$68.4 million) to the Altrium Sustainability Fund I, managed by</p>",
    "footText": "<p>footext</p>",
    "date": "18 Nov 2022",
    "enableLightBox": true
  });
});

module.exports = router;