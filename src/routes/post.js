import { Router } from 'express'
import checkToken from '../middlewares/checkToken'
import { postModel } from '../models/Post'

const router = Router()

router.get('/getAll', checkToken, async function (req, res) {
  try {
    const posts = await postModel.find({})
    res.json(posts)
  } catch (e) {
    res.status(500).send(e.message)
  }
})

router.get('/getOne/:postID', checkToken, async function (req, res) {
  const postID = req.params.postID
  try {
    const post = await postModel.find({ _id: postID })
    res.json(post)
  } catch (e) {
    return res.status(500).send(e.message)
  }
})

router.post('/create', checkToken, async function (req, res) {
  const { title, text } = req.body
  const { token } = req
  const postObject = {
    title, text, userID: token._id
  }
  try {
    const post = await postModel.create(postObject)
    res.json(post)
  } catch (e) {
    return res.status(500).send(e.message)
  }
})

router.get('/getById/:userID', checkToken, async function (req, res) {
  const { userID } = req.params
  try {
    const post = await postModel.find({ userID })
    res.json(post)
  } catch (e) {
    return res.status(500).send(e.message)
  }
})

export default router
