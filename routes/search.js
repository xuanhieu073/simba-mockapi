const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const currentLoadMore = +req.query.loadmore;
  const loadMore = currentLoadMore >= 4 ? false : true;
  const data = {
    "total": 836,
    "currentLoadMore": currentLoadMore+1,
    "limit": 20,
    "maxNumberLoadMore": 42,
    "loadMore": loadMore,
    "results": [
      {
        "date": "21-Apr-2023",
        "path": "/content/public/sg/en/public/test-center.html",
        "size": "",
        "title": "Test center",
        "contentType": "page",
        "desc": "<p class='search-result-item__description CoveoExcerpt'>Protect you and your family against the unexpected with our range of plans to suit your needs. Test Test Test Test Test Test Test Test 1 Test Test Test Test Test Test Test Test 2 Test Test Test Test T...</p>",
        "dataType": "all"
      },
    ]
  }
  res.json(data);
})

module.exports = router;