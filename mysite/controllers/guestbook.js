const model = require('../models/guestbook');

module.exports = {
    index: async function(req, res) {
        const results = await model.findAll();
        res.render('index', {
            list: results || []
        });
    },
    form: function(req, res) {
        res.render('delete');
    },
    add: async function(req, res) {
        const results = await model.insert(req.body);
        res.redirect("/");
    }
}