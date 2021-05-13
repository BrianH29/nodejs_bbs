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

module.exports = Post; 