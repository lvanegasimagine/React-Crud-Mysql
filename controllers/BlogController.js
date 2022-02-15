import BlogModel from "../models/BlogModel.js";

// Metodos para el crud

// Mostrar todos los registros

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.status(200).json(blogs)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// Mostrar un registro
export const getBlog = async (req,res) =>{
    try {
        const blog = await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
// Crear un Registro
export const createBlog = async (req, res) =>{
    try {
        const createBlog = await BlogModel.create(req.body);
        res.status(200).json({
            message: "Registro Creado Exitosamente",
            data: createBlog
        })
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
// Actualizar un Registro

export const updateBlog = async (req, res) =>{
    try {
        const updateBlog = await BlogModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.status(200).json({
            message: "Registro Actualizado Exitosamente",
            data: updateBlog
        })
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
// Eliminar un Registro

export const deleteBlog = async (req,res) =>{
    try {
        await BlogModel.destroy({
            where: {id: req.params.id}
        });
        res.status(200).json({message: "Blog Eliminado"})
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}








