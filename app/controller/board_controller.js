const Post = require('../model/board_model');

exports.write = async (req,res) => {
    //send this to model 
    const post = new Post({
        writer : req.body.writer,
        title : req.body.title,
        content : req.body.content,
    });

    //gets back the result from the model 
    await Post.write(post, (err, result) => {
        if(err){
            res.status(500).send("failed to post"); 
        }

        res.render('boardList')
    })
}
