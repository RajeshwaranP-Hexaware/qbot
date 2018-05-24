'use strict';

let action = {};

action['discount.discount-custom'] = (req, res) => {

    let resMsg = {
        speech: '',
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
        ]
    };
    return res.json(resMsg);
};

module.exports = action;