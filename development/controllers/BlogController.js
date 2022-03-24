import blog from '../models/blog';

const BlogController = {}

blogController.post = (req, res) => {
    const { title, body, author } = req.body
    const newblog = new blog.Blog({
        title,
        body,
        author
    });
    newblog.save().then((newblog) => {
        return res.status(200).json({
            message: "Blog added successfully",
            success: true,
            data: newblog,
        });
    }).catch((err) => {
        return res.status(500).json({
            message: "Error occured",
            success: false,
            data: err
        });
    });
}



blogController.getAll = (req, res) => {
    const { title, body, author } = req.body
    const newblog = new blog.Blog({
        title,
        body,
        author
    });
    newblog.save().then((newblog) => {
        return res.status(200).json({
            message: "Blog added successfully",
            success: true,
            data: newblog,
        });
    }).catch((err) => {
        return res.status(500).json({
            message: "Error occured",
            success: false,
            data: err
        });
    });
}