const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  return res.json({
    message: 'welcome to blog api',
  })
})

router.post('/sign-up', (req, res) => {
  console.log("🚀 ~ file: blog.js ~ line 12 ~ router.post ~ req.body", req.body)
  setTimeout(() => {
    return res.json({
      message:'success',
    })
  }, 500);
})

router.post('/quiz', (req, res) => {
  console.log("🚀 ~ file: blog.js:20 ~ router.post ~ req.body", req.body)
  return res.status(203).json(
    {
      "code": 203,
      "msg": "Success!",
      "data": {
        "score": "4/4",
        "scoreText": "Nice work - perfect score!"
      },
      "total": 0
    }
  )
})

module.exports = router;