var express = require('express');
var router = express.Router();
const door = require('./../model/detec')

// mostra o histórico do estado da porta
// router.get('/', async (req, res) => {
//     try {
//         const history = await door.find()
//         res.json(history)
//     } catch(err) {
//         throw err
//     }
// })

// salva novas entradas, block e allow:
router.post('/block', async (req, res) => {
    const post = new door({
        open: req.body.open
    })
    post.open = false
    try {
        const detection = await post.save()
        console.log('Entrada bloqueada!', detection)
        console.log('próximo')
    } catch(err) {
        throw err
    }
})

router.post('/pass', async (req, res) => {
    const post = new door({
        open: req.body.open
    })
    post.open = true
    try {
        const detection = await post.save()
        console.log('Entrada permitida!', detection)
        console.log('próximo')
    } catch(err) {
        throw err
    }
})

// post específico
// router.get('/:id', async (req, res) => {
//     try {
//         const post = await door.findById(req.params.id)
//         res.json(post)
//     } catch(err) {
//         throw err
//     }
// })

module.exports = router