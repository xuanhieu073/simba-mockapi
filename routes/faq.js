const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.json({
    message: 'faq router',
  });
});

router.get('/listing', (req, res) => {
  return res.json({
    code: 200,
    msg: 'Success!',
    data: [
      {
        question: 'Am I covered for renovations?',
        answer:
          '<p>Yes. This includes improvements or additions to your home that have been made by you or by any previous owner. Examples of these are: renovations to kitchens, work on wood or laminate flooring, fitted wardrobes, air conditioners and bathrooms, as well as double glazing. The maximum we’ll pay is the limit shown on your policy schedule.<br>\n&nbsp;</p>\n',
        topic: ['faq-hub:home-insurance/cover-and-benefits'],
        detailURL:
          '/content/public/sg/en/public/faq/singlife-sure-invest/details.html/_faq-hub_singlife-sure-invest/bonus-return-campaign-faqs?faq-id=singlife-sure-invest_faq-31',
      },
      {
        question:
          'Can I purchase contents insurance with you if I sub-let my house?',
        answer:
          '<p>Yes, but please be aware that certain risks, such as malicious or deliberate damage by tenants, are not covered under your policy.<br>\n<br>\n</p>\n',
        topic: ['faq-hub:home-insurance','cover-and-benefits'],
        detailURL:
          '/content/public/sg/en/public/faq/singlife-sure-invest/details.html/faq-hub:home-insurance/cover-and-benefits?faq-id=null',
      },
    ],
    total: 2,
    loadMore: true,
  });
});

module.exports = router;
