import express from 'express'
import Usuário from '../models/usuario'

const usuarioRouter = express.Router()

// Publicar
usuarioRouter.post('/usuario', (req, res) => {
    const usuario: Usuário = req.body
    //TODO: Criar e salvar um novo usuário
    const id = 123
    res.status(201).location(`/usuario/${id}`).send()
})

// Pegar
usuarioRouter.get('/usuario', (req, res) => {
    const usuarios: Usuário[] = [
        {
            id: 1,
            nome: 'John',
            email: 'john@john.com'
        },
        {
            id: 2,
            nome: 'Walker',
            email: 'walker@walker.com'
        }
    ]
    res.json(usuarios)
})

// Pegar
usuarioRouter.get('/usuario/:id', (req, res) => {
    const id: number = +req.params.id
    const usuarios: Usuário = {
        id: id,
        nome: `Usuário ${id}`,
        email: `Email do Usuário ${id}`
    }
    res.json(usuarios)
//    res.status(404).send()
})

// Colocar
usuarioRouter.put('/usuario/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
})

// Apagar
usuarioRouter.delete('/usuario/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
})
export default usuarioRouter