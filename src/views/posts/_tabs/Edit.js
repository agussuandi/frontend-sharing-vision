import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { CForm, CFormInput, CFormTextarea, CCard, CCardBody, CCardFooter, CButton, CCardHeader, CFormSelect } from '@coreui/react'

import { sendRequest } from 'src/utils/request'

const Edit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const URI_API = 'http://localhost:3333/api/posts'
    const [post, setPost] = useState({})
    const [validated, setValidated] = useState(false)
    
    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        setValidated(true)

        const formData = new FormData(form)
        const postPayload = {
            title: formData.get('title'),
            content: formData.get('content'),
            category: formData.get('category'),
            status: formData.get('status')
        }

        sendRequest('PUT', `${URI_API}/${id}`, postPayload)
        .then(res => {
            if (res.response === 200) navigate('/posts/index')
            else alert(res.message)
        })
        .catch(err => {
            console.log(err)
        })

        event.preventDefault()
    }

    const handleShowPost = id => {
        sendRequest('GET', `${URI_API}/${id}`, {})
        .then(res => {
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        handleShowPost(id)
    }, [id])

    return (
        <>
            <CCard>
                <CForm
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <CCardHeader>
                        <strong>Edit Post</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CFormInput
                            type="text"
                            feedbackInvalid="Please enter a title"
                            id="title"
                            name="title"
                            label="Title"
                            required
                            minLength={20}
                            maxLength={200}
                            defaultValue={post.title}
                        />
                        <CFormTextarea
                            feedbackInvalid="Please enter a content."
                            id="content"
                            name="content"
                            label="Content"
                            required
                            cols={10}
                            rows={4}
                            defaultValue={post.content}
                        ></CFormTextarea>
                        <CFormInput
                            type="text"
                            feedbackInvalid="Please enter a category"
                            id="category"
                            name="category"
                            label="Category"
                            required
                            minLength={3}
                            maxLength={100}
                            defaultValue={post.category}
                        />
                        <CFormSelect
                            id="status"
                            name="status"
                            label="Status"
                            feedbackInvalid="Please enter a status"
                        >
                            <option value="">-- Choose Status --</option>
                            <option value="Draft">Draft</option>
                            <option value="Publish">Publish</option>
                        </CFormSelect>
                    </CCardBody>
                    <CCardFooter>
                        <CButton type="button" color="light" className="float-start mb-2" onClick={() => navigate(-1)}>Back</CButton>
                        <CButton type="submit" className="float-end mb-2">Edit</CButton>
                    </CCardFooter>
                </CForm>
            </CCard>
        </>
    )
}

export default Edit