import { Comments } from '../models/CommentsModel.js';

export const getComents = async (req, res) => {
  try {
    const comments = await Comments.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los comentarios' });
  }
}

export const createComent = async (req, res) => {
  try {
    const { name, content } = req.body;
    await Comments.create({
      Author: name,
      Content: content
    });
res.status(200);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el comentario' });
  }
}