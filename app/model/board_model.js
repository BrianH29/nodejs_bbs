const sql = require('../config/db');

const Post = function (post) {
    this.writer = post.writer;
    this.title = post.title;
    this.content = post.content; 
}

Post.write = (newPost, result) => {
    const params = [newPost.title, newPost.content, newPost.writer];

    sql.query("INSERT INTO BOARD (TITLE, CONTENT, WRITER) VALUES(?,?,?)", params, (err,res) => {
        if(err){
            console.error(err);
            result(err,null);
            return;
        }

        console.log("created post : ", {id:res.insertId, ...newPost})
        result(null, {id:res.insertId, ...newPost});
    })
};

Post.findAll = (result) => {
    sql.query("SELECT * FROM BOARD", (err, res) => {
        if(err){
            console.error(err);
            result(err, null);
            return; 
        }
        if(res.length>0){
            result(null, res);
            return;
        }

        result({kind : 'not found'}, null);
    })
}

Post.findById = (bno, result) => {
    sql.query("SELECT * FROM BOARD WHERE ID = ?", bno, (err, res) => {
        if(err) {
            console.error(err);
            result(err, null);
            return; 
        }

        if(res.length>0){
            result(null,res);
            return;
        }

        result({kind : 'not found'}, null);
    })
}

module.exports = Post; 