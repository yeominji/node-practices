const mysql = require('mysql');
const util = require('util');

const dbconn = require('./dbconn');

module.exports = {
    findAll: async function() {
        const conn = dbconn();
        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, data, (error, results, field) => error ? reject(error):resolve(rows))); 
        const query = util.promisify(conn.query).bind(conn);
        try {
            return await query(
                " select no, name, (date_format(reg_date, '%Y/%m/%d %H:%i:%s') as reg_date) as regDate , message from guestbook  order by  no desc ",
                []
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: async function(guestbook) {
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        try {
            return await query(
                "insert into guestbook value (null,?,?, ?, ?)",
                Object.values(guestbook)
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    }
}