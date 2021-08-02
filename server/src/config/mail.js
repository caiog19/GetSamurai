require("../../../../getsamurais/server/src/config/dotenv")();
const nodemailer = require('nodemailer');
const fs = require("fs");
const mailer = nodemailer.createTransport({
		service: process.env.MAIL_HOST,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASSWORD
		},
        tls: {
            rejectUnauthorized: false
        }
});

const readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};

module.exports = {
	mailer,
	readHTMLFile
};