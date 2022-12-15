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

module.exports = router;