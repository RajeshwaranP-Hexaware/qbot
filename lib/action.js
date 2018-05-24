'use strict';

let action = {};

action['discount.discount-custom'] = (req, res) => {

    let resMsg = {
        speech: "Cool. You're all set!  We offer you a maximum of <b>10% discount</b> for the 2 coverage sections that you have selected.",
        fulfillmentText: "Cool. You're all set!  We offer you a maximum of <b>10% discount</b> for the 2 coverage sections that you have selected.",
        messages: [
            {
                "type": 0,
                "platform": "facebook",
                "speech": "Cool. You're all set!  We offer you a maximum of <b>10% discount</b> for the <b>2  coverage</b> sections that you have selected."
            },
            {
                "type": 0,
                "platform": "facebook",
                "speech": "We also offer an exciting <b>20% discount</b> for a minimum of <b>4 coverage</b> sections."
            },
            {
                "type": 0,
                "platform": "facebook",
                "speech": "<a>Click here</a> to refer the discount chart for more details"
            }
        ],
        fulfillmentMessages: [
            {
                "text": {
                    "text": [
                        "Ya Cool. You're all set!  We offer you a maximum of <b>10% discount</b> for the <b>2  coverage</b> sections that you have selected.",
                        "We also offer an exciting <b>20% discount</b> for a minimum of <b>4 coverage</b> sections.",
                        "<a>Click here</a> to refer the discount chart for more details"
                    ]
                }
            }
        ]
    };
    return res.json(resMsg);
};

module.exports = action;