import React, { useState, useEffect } from 'react'
import Container from '../../components/common/Container/Container'
import styles from './styles.module.scss'
import Input from '../../components/common/Input/Input'
import Button from '../../components/common/Button/Input'
import TextArea from '../../components/common/TextArea/TextArea'
import { create, createPostClear } from '../../state/post/actions'
import { connect } from 'react-redux'
import Layout from '../../components/common/Layout/Layout'
import { isRequesting } from '../../utils'

const CreatePostPage = ({ createPostStatus, create, createPostClear }) => {

  useEffect(() => {
    return createPostClear
  },[])

  const [formObj, setFormObj] = useState({})

  const handleSelectFile = (e) => {
    e.preventDefault()
    let file = e.target.files[0]

    setFormObj({ ...formObj, postImage: file })
  }

  const onChange = (key) => (e) => {
    setFormObj({ ...formObj, [key]: e.target.value })
  }

  const handleCreatePost = () => {
    const formData = new FormData;

    formData.append('postImage', formObj.postImage)
    formData.append('title', formObj.title)
    formData.append('text', formObj.text)

    create(formData)
  }

  const isButtonDisabled = isRequesting(createPostStatus) || !formObj.title || !formObj.text

  return (
    <Container maxWidth={1200}>
      <Layout>
        <div className={styles.create_post}>
          <div className={styles.create_post_container}>
            <div>
              Create post
            </div>
            <Input
              placeholder={'title'}
              value={formObj.title}
              onChange={onChange('title')}
              className={styles.input}
            />
            <TextArea
              value={formObj.text}
              onChange={onChange('text')}
              textAreaProps={{ placeholder: 'Text' }}
              placeholder={'Text'}
              className={styles.input}
            />
            <Input
              onChange={handleSelectFile}
              type={'file'}
              className={styles.input}
              accept="image/x-png,image/gif,image/jpeg"
            />
            {isRequesting(createPostStatus) ? (
              <div>Wait</div>
            ) : (
              <Button disabled={isButtonDisabled} onClick={handleCreatePost} type='button' className={styles.button}>Create
                post
              </Button>
            )}
          </div>
        </div>
      </Layout>
    </Container>
  )
}

export default connect((store) => ({
  createPostStatus: store.post.createPostStatus
}), {
  create,
  createPostClear
})(CreatePostPage)
