const Post = require('../model/board_model');

exports.write = async (req,res,next) => {
    try{
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
    
            res.redirect('/'); 
        })
    }catch(err){
        console.error(err);
        next(err); 
    }
    //send this to model 
}

exports.findAll = async (req, res, next) => {
    try{
         await Post.findAll((err, result) => {
            if(err){
                res.status(500).send("can not find")
            }
            
            const posts = result; 
            console.log(posts); 
            if(result.length > 0){
                res.render('boardList', {
                    title: 'List',
                    posts: posts,
                })
            }
        });

    }catch(err){
        console.error(err);
        next(err); 
    }
}