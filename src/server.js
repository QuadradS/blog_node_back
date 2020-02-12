import mongoose from 'mongoose'
import config from './config'
import postRouter from './routes/post'
import userRouter from './routes/user'
import authRouter from './routes/auth'
import commentRouter from './routes/comment'
import * as express from 'express'

const startServer = async (app) => {
  await mongoose.connect(config.dbURL, function (err) {
    if (err) {
      return console.log('DB ERROR: ', err)
    } else {
      console.log('DB CONNECTED')
    }

    app.listen(config.port, () => console.log(`Server started on post ${config.port}`))

    app.use('/api', authRouter)
    app.use('/api/user', userRouter)
    app.use('/api/post', postRouter)
    app.use('/api/comment', commentRouter)
    app.use('/', express.static(`${__dirname}/static`))
  })
}


export default startServer




