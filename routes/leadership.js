const express = require('express');
const router = express.Router();
const path = require('path');

const getLeaderImagePath = (host, leaderName) => {
  return `http://${host}/imgs/${leaderName}.png`;
}

router.get('/', (req, res) => {
  return res.json({
    "code": 200,
    "msg": "Success!",
    "data": [
      {
        category: "bod",
        label: "Board of Directors",
        team: [
          {
            "image": getLeaderImagePath(req.get('host'),'raymond-ferguson'),
            "alt": "Alt",
            "title": "Raymond Ferguson",
            "subtitle": "Independent Non-Executive Director and Chairman",
            "description": `Pearlyn is an Executive Director and Group Chief Executive Officer of Singlife with Aviva.
            <br/><br/>
            Prior to her current appointment, she was the Group Head of Consumer Products, Marketing and Ecosystem Partnerships at DBS group with an exceptional track record of executing key strategies and business transformation initiatives across regional retail and wealth franchises. These include being a key driver of emerging digital banking strategies and DBS’ principal bancassurance partnerships.
            <br/><br/>
            Pearlyn sits on the advisory board of the Singapore Management University Lee Kong Chian School of Business. She holds a BA in Economics and Statistics from the National University of Singapore.`,
          },
          {
            "image": getLeaderImagePath(req.get('host'),'walter-de-oude'),
            "alt": "Alt",
            "title": "Walter de Oude",
            "subtitle": "Founder Director Non-Independent and Non-Executive",
            "description": `Pearlyn is an Executive Director and Group Chief Executive Officer of Singlife with Aviva.
            <br/><br/>
            Prior to her current appointment, she was the Group Head of Consumer Products, Marketing and Ecosystem Partnerships at DBS group with an exceptional track record of executing key strategies and business transformation initiatives across regional retail and wealth franchises. These include being a key driver of emerging digital banking strategies and DBS’ principal bancassurance partnerships.
            <br/><br/>
            Pearlyn sits on the advisory board of the Singapore Management University Lee Kong Chian School of Business. She holds a BA in Economics and Statistics from the National University of Singapore.`,
          },
          {
            "image": getLeaderImagePath(req.get('host'),'raymond-ferguson'),
            "alt": "Alt",
            "title": "Raymond Ferguson",
            "subtitle": "Independent Non-Executive Director and Chairman",
            "description": `Pearlyn is an Executive Director and Group Chief Executive Officer of Singlife with Aviva.
            <br/><br/>
            Prior to her current appointment, she was the Group Head of Consumer Products, Marketing and Ecosystem Partnerships at DBS group with an exceptional track record of executing key strategies and business transformation initiatives across regional retail and wealth franchises. These include being a key driver of emerging digital banking strategies and DBS’ principal bancassurance partnerships.
            <br/><br/>
            Pearlyn sits on the advisory board of the Singapore Management University Lee Kong Chian School of Business. She holds a BA in Economics and Statistics from the National University of Singapore.`,
          },
          {
            "image": getLeaderImagePath(req.get('host'),'walter-de-oude'),
            "alt": "Alt",
            "title": "Walter de Oude",
            "subtitle": "Founder Director Non-Independent and Non-Executive",
            "description": `Pearlyn is an Executive Director and Group Chief Executive Officer of Singlife with Aviva.
            <br/><br/>
            Prior to her current appointment, she was the Group Head of Consumer Products, Marketing and Ecosystem Partnerships at DBS group with an exceptional track record of executing key strategies and business transformation initiatives across regional retail and wealth franchises. These include being a key driver of emerging digital banking strategies and DBS’ principal bancassurance partnerships.
            <br/><br/>
            Pearlyn sits on the advisory board of the Singapore Management University Lee Kong Chian School of Business. She holds a BA in Economics and Statistics from the National University of Singapore.`,
          },
          {
            "image": getLeaderImagePath(req.get('host'),'raymond-ferguson'),
            "alt": "Alt",
            "title": "Raymond Ferguson",
            "subtitle": "Independent Non-Executive Director and Chairman",
            "description": `Pearlyn is an Executive Director and Group Chief Executive Officer of Singlife with Aviva.
            <br/><br/>
            Prior to her current appointment, she was the Group Head of Consumer Products, Marketing and Ecosystem Partnerships at DBS group with an exceptional track record of executing key strategies and business transformation initiatives across regional retail and wealth franchises. These include being a key driver of emerging digital banking strategies and DBS’ principal bancassurance partnerships.
            <br/><br/>
            Pearlyn sits on the advisory board of the Singapore Management University Lee Kong Chian School of Business. She holds a BA in Economics and Statistics from the National University of Singapore.`,
          },
          {
            "image": getLeaderImagePath(req.get('host'),'walter-de-oude'),
            "alt": "Alt",
            "title": "Walter de Oude",
            "subtitle": "Founder Director Non-Independent and Non-Executive",
            "description": `Pearlyn is an Executive Director and Group Chief Executive Officer of Singlife with Aviva.
            <br/><br/>
            Prior to her current appointment, she was the Group Head of Consumer Products, Marketing and Ecosystem Partnerships at DBS group with an exceptional track record of executing key strategies and business transformation initiatives across regional retail and wealth franchises. These include being a key driver of emerging digital banking strategies and DBS’ principal bancassurance partnerships.
            <br/><br/>
            Pearlyn sits on the advisory board of the Singapore Management University Lee Kong Chian School of Business. She holds a BA in Economics and Statistics from the National University of Singapore.`,
          },
          {
            "image": getLeaderImagePath(req.get('host'),'raymond-ferguson'),
            "alt": "Alt",
            "title": "Raymond Ferguson",
            "subtitle": "Independent Non-Executive Director and Chairman",
            "description": `Pearlyn is an Executive Director and Group Chief Executive Officer of Singlife with Aviva.
            <br/><br/>
            Prior to her current appointment, she was the Group Head of Consumer Products, Marketing and Ecosystem Partnerships at DBS group with an exceptional track record of executing key strategies and business transformation initiatives across regional retail and wealth franchises. These include being a key driver of emerging digital banking strategies and DBS’ principal bancassurance partnerships.
            <br/><br/>
            Pearlyn sits on the advisory board of the Singapore Management University Lee Kong Chian School of Business. She holds a BA in Economics and Statistics from the National University of Singapore.`,
          },
          {
            "image": getLeaderImagePath(req.get('host'),'walter-de-oude'),
            "alt": "Alt",
            "title": "Walter de Oude",
            "subtitle": "Founder Director Non-Independent and Non-Executive",
            "description": `Pearlyn is an Executive Director and Group Chief Executive Officer of Singlife with Aviva.
            <br/><br/>
            Prior to her current appointment, she was the Group Head of Consumer Products, Marketing and Ecosystem Partnerships at DBS group with an exceptional track record of executing key strategies and business transformation initiatives across regional retail and wealth franchises. These include being a key driver of emerging digital banking strategies and DBS’ principal bancassurance partnerships.
            <br/><br/>
            Pearlyn sits on the advisory board of the Singapore Management University Lee Kong Chian School of Business. She holds a BA in Economics and Statistics from the National University of Singapore.`,
          },
        ]
      },
      {
        category: "executive",
        label: "Executive Team",
        team: [
          {
            "image": getLeaderImagePath(req.get('host'),'pearlyn-phau'),
            "alt": "Alt",
            "title": "Pearlyn Phau",
            "subtitle": "Executive Director and Group CEO",
            "description": `Pearlyn is an Executive Director and Group Chief Executive Officer of Singlife with Aviva.
            <br/><br/>
            Prior to her current appointment, she was the Group Head of Consumer Products, Marketing and Ecosystem Partnerships at DBS group with an exceptional track record of executing key strategies and business transformation initiatives across regional retail and wealth franchises. These include being a key driver of emerging digital banking strategies and DBS’ principal bancassurance partnerships.
            <br/><br/>
            Pearlyn sits on the advisory board of the Singapore Management University Lee Kong Chian School of Business. She holds a BA in Economics and Statistics from the National University of Singapore.`,
          },
          {
            "image": getLeaderImagePath(req.get('host'),'raymond-ferguson'),
            "alt": "Alt",
            "title": "Raymond Ferguson",
            "subtitle": "Independent Non-Executive Director and Chairman",
            "description": `Pearlyn is an Executive Director and Group Chief Executive Officer of Singlife with Aviva.
            <br/><br/>
            Prior to her current appointment, she was the Group Head of Consumer Products, Marketing and Ecosystem Partnerships at DBS group with an exceptional track record of executing key strategies and business transformation initiatives across regional retail and wealth franchises. These include being a key driver of emerging digital banking strategies and DBS’ principal bancassurance partnerships.
            <br/><br/>
            Pearlyn sits on the advisory board of the Singapore Management University Lee Kong Chian School of Business. She holds a BA in Economics and Statistics from the National University of Singapore.`,
          },
        ]
      }
    ],
    "total": 5
  })
})

module.exports = router;