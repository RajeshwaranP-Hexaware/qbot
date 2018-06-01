'use strict';

const request = require('request');

module.exports.callApi = (url, method, body, accessToken) => {

    let options = {
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        json: true
    };
    if (accessToken) {
        options.headers.Authorization = "Bearer " + accessToken;
    }
    if (method == "POST" && body) {
        options.body = body;
    }
    console.log('POLPOL', options);
    return new Promise((resolve, reject) => {
        request(options, function (err, response, body) {
            console.log('RESPONSE', err, body);
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });
};