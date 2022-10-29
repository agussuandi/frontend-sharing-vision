import React, { useEffect, useState } from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CCard, CCardHeader, CCardBody } from '@coreui/react'

export default function Preview()
{
    const URI_API = 'http://localhost:3333/api/posts'
    const [post, setPosts] = useState([])

    const getPost = async () => {
        const respPost = await fetch(`${URI_API}?status=publish`)
        const respJson = await respPost.json()
        const data = respJson.data.data.map(row => ({...row, row}))
        setPosts(data)
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <>
            <CCard className="mb-4">
                <CCardHeader>
                    <strong>Preview</strong>
                </CCardHeader>
                <CCardBody>
                    <CTable bordered hover>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">No</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {post.map((row, i) => (
                                <CTableRow key={i}>
                                    <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                                    <CTableDataCell>{row.title}</CTableDataCell>
                                    <CTableDataCell>{row.category}</CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </>
    )
}