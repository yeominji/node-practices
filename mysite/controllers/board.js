const models = require('../models');
const moment = require('moment');

module.exports = {
    index: async function(req, res, next) {
        try { 
            const results = await models.Board.findAll({
                attributes: ['no', 'title', 'contents', 'regDate','hit','groupNo','orderNo','depth'],
                order: [
                    ['no', 'DESC']
                ]
            });
            res.render('board/index', {
                board: results,
                moment: moment
            });
        } catch(e) {
            next(e);
        }         
    },
    modify: function(req, res) {
        res.render('board/modify');
    },
    _modify: async function(req, res, next) {
        try { 
            await models.board.destroy({
                where: req.body
            });
            res.redirect('/board');
        } catch(e) {
            next(e);
        }   
    },
    view: function(req, res) {
        res.render('board/view');
    },
    _view: async function(req, res, next) {
        try { 
            await models.board.destroy({
                where: req.body
            });
            res.redirect('/board');
        } catch(e) {
            next(e);
        }   
    },
    write: function(req, res) {
        res.render('board/write');
    },
    _write: async function(req, res, next) {
        try { 
            await models.board.destroy({
                where: req.body
            });
            res.redirect('/board');
        } catch(e) {
            next(e);
        }   
    },
    add: async function(req, res, next) {
        try {        
            await models.board.create(req.body);
            res.redirect('/board');
        } catch(e) {
            next(e);
        }        
    }
}
