const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const currentLoadMore = +req.query.loadmore;
  const loadMore = currentLoadMore >= 2 ? false : true;
  const data = {
    total: 836,
    currentLoadMore: currentLoadMore + 1,
    limit: 20,
    maxNumberLoadMore: 42,
    loadMore: loadMore,
    results: [
      {
        date: '21-Apr-2023',
        path: '/content/public/sg/en/public/test-center.html',
        size: '',
        title: 'Test center',
        contentType: 'page',
        desc: "<p class='search-result-item__description CoveoExcerpt'>Protect you and your family against the unexpected with our range of plans to suit your needs. Test Test Test Test Test Test Test Test 1 Test Test Test Test Test Test Test Test 2 Test Test Test Test T...</p>",
        dataType: 'all',
      },
    ],
  };
  setTimeout(() => {
    res.json(data);
  }, 1000);
});

router.get('/suggestions', (req, res) => {
  return res.json({ code: 200, msg: '', results: ['insurance', 'b'] });
});

router.get('/faq', (req, res) => {
  const currentLoadMore = +req.query.offset;
  const loadMore = currentLoadMore >= 2 ? false : true;
  const data = {
    code: 200,
    msg: 'Success!',
    data: [
      {
        question: 'Can I pay by monthly instalments?',
        answer:
          `<div x-data="{ open: false }">
              <button @click="open = !open">Expand</button>
          
              <span x-show="open">
                  Content...
              </span>
          </div>`,
      },
      {
        question: 'Can I pay by monthly instalments?',
        answer:
          '<p>Yes. If your premium is at least S$300, you may pay by monthly instalments under the Instalment Payment Plan (IPP). This can be done with your UOB Visa / Mastercard credit card for any new business or renewal applications. Note that debit cards are not accepted.</p>\n',
      },
      {
        question: 'Can I pay by monthly installments?',
        answer:
          '<p>Yes, you may pay through the Instalment Payment Plan (IPP) with your UOB Visa / Mastercard credit card (debit cards not accepted).</p>\n<div class="sl-card-media-carousel-container " x-data="{ swiper: null }" x-init="swiper = new Swiper($refs.containerCardMedia, { loop: false, speed: 800, slidesPerView: \'auto\', centeredSlides: true, slideToClickedSlide: true, navigation: { nextEl: &quot;.swiper-button-next&quot;, prevEl: &quot;.swiper-button-prev&quot;, }, pagination: { el: \'.swiper-pagination\', clickable: true, }, }) "> <div class="swiper" x-ref="containerCardMedia"> <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="sl-card-media-carousel-item"> <div class="sl-card-media-carousel-item_youtube"> <iframe src="https://www.youtube.com/embed/9Zdtk-KRuV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"> </iframe> </div> </div> </div> </div> </div> </div>',
      },
      {
        question: 'Can I pay by monthly instalments?',
        answer:
          '<p>No, we currently do not offer a monthly payment arrangement.</p>\n',
      },
      {
        question:
          'How can I pay the premiums for Singlife ElderShield Standard?',
        answer:
          '<p>You can use your CPF Medisave to pay for the premiums of Singlife ElderShield Standard, with a yearly (calendar year) limit of $600 per insured person.</p>\n<p>You can also use a CPF Medisave account belonging to your spouse, parents, children, or grandchildren to pay for the premiums of Singlife ElderShield Standard.</p>\n<p>Alternatively, you can make the premium payments for Singlife ElderShield Standard via GIRO or Credit Card. Please note that any premiums in excess of $600 yearly limit for Medisave must be paid by GIRO or Credit Card.<br>\n&nbsp;</p>\n',
      },
      {
        question:
          'I’m currently paying the policy premiums for Singlife CareShield Standard /Plus or Singlife ElderShield Standard / Plus in full using MediSave. Do I need to pay cash after the GST Hike? Can I have the full premium deducted through MediSave?',
        answer:
          '<p>There is no change to the maximum MediSave withdrawal limit per life assured and it remains as SGD600. If the policy premium exceeds SGD600, the premium on top of the withdrawal limit is payable by Interbank GIRO / Cash.&nbsp;</p>\n',
        configPage:
          '/content/public/sg/en/public/faq/gst-hike-for-life-and-health-products/faq-config',
      },
      {
        question:
          'I have received a lapse/termination letter, which stated that there were insufficient funds in my bank account last month. Can you advise me how I can reinstate my lapsed policy?',
        answer:
          "<p>To reinstate the lapsed policy, you will need to complete and sign on a Reinstatement Form. Together with the Form, you will need to pay for the premiums in arrears plus an advance of 3 months' premium (by Cheque payment). Please submit a completed GIRO form, so that we can assist you to activate a new GIRO account for the purpose of monthly premium. However, if you have not changed or terminated your bank GIRO account, we can continue to deduct the premiums from your current GIRO account. However, reinstatement of your lapsed policy is subject to your current medical condition(s) which must be acceptable to our underwriters and you will be informed officially in writing.</p>\n<p>Alternatively, you can visit Singlife Ltd 4 Shenton Way #01-01 SGX Centre 2 Singapore 068807 and our staff will be able to assist you. Our opening hours are: Mondays to Fridays from 8.45am - 5.30pm. We are closed on Saturdays, Sundays and Public Holidays.</p>\n",
      },
      {
        question:
          'How can I make a claim on my personal motor insurance policy if Singlife who is a PPF Scheme member fails?',
        answer:
          '<p>You can continue to file your claim with your general insurer, who will process your claim accordingly. Once the terms of payment under the claim are finalized, SDIC will pay the finalized claim amount by cheque. If your insurer is going to be wound up. The PPF Scheme will also provide coverage for your policy for a period of 30 days after the winding up order is made against the failed insurer. You should then seek alternative coverage from another insurer within these 30 days.</p>\n',
      },
      {
        question:
          'Can I make nomination of beneficiaries for MINDEF & MHA Group Insurance Voluntary Scheme?',
        answer:
          '<p>The Nomination of Beneficiaries framework is not applicable for group insurance scheme. The main policyholder, that is, MINDEF and MHA, had directed Singlife to pay according to the prevailing laws of Singapore. That is to say, in the event of a Death Claim, the law provides for Singlife to pay to the immediate next-of-kin (NOK) or proper claimant up to S$150,000. The payout of the balance of the insurance compensation has to be decided by a Court.</p>\n<p>If the deceased had written a Will before his/her death, the family has to engage a lawyer to apply to the Court for a Probate, which may take up to 6 months.</p>\n<p>If the deceased did not have a Will before his/her death, he/she would be considered to have died intestate. In such an event the family also has to engage a lawyer to apply to the Court for a Letter of Administration, which may take up to 3 years to resolve.</p>\n',
      },
      {
        question:
          'What do I do if I want to cancel my travel insurance policy after I have made payment?',
        answer:
          '<p>A single-trip policy can only be cancelled in advance of its start date. You’ll be entitled to a full refund of the premium paid as long as you haven’t travelled, as well as if there hasn’t been a claim or an incident likely to give rise to a claim. If you don’t cancel your policy, it’ll continue in force.&nbsp;</p>\n<p>For annual multi-trip policies, if we’re issuing a policy to you for the first time, you have the right to cancel your policy without penalty, within 14 calendar days from the day of purchase of the policy. We call this period the free look period.</p>\n<p>If, within this free look period, you inform us in writing that you wish to cancel the policy, we’ll cancel it from its start date and refund you the premium paid in full. This will be processed as long as there are no claims admitted under the policy.</p>\n<p>If, after the free look period or after your policy is renewed, you inform us in writing that you wish to cancel the policy, we’ll refund you 80% of the premium paid, less a pro-rated amount for the period for which you’ve been covered.</p>\n<p>You won’t be entitled to a refund if you’ve made a claim or if there has been an incident likely to give rise to a claim during the current period of insurance.</p>\n<p>If you don’t exercise your right to cancel your policy, it’ll continue in force and you’ll be required to pay the premium.</p>\n<p>We may cancel this policy by sending seven days’ written notice to your last known address. You’ll be entitled to a refund of the premium paid, subject to a deduction for the time for which you’ve been covered.</p>\n<p>Refunds will be credited through the original payment mode, wherever possible, within 14 working days.<br>\n</p>\n',
      },
    ],
    total: 0,
    loadMore: loadMore,
    suggestedWords: [],
  };
  res.json(data);
});

module.exports = router;
