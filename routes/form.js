const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'form router is running',
  });
});

router.post('/', (req, res) => {
  setTimeout(() => {
    res.status(202).json({
      "code": "invalidRequest",
      "instance": "/error/uuid:fa1de25e-2509-43ae-8e57-81911e0354f8",
      "invalid-params": [
          {
              "reason": "Unauthorized email address",
              "name": "emailTo"
          }
      ],
      "detail": "Request Validation Failure",
      "type": "invalid",
      "title": "Request Validation Failure",
      "status": 400,
      "statusCode": 400
  });
  }, 500);
});

module.exports = router;
