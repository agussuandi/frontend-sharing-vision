import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import CIcon from '@coreui/icons-react'
import { sendRequest } from 'src/utils/request'
import { cilPen, cilTrash } from '@coreui/icons'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CTooltip } from '@coreui/react'

export default function Publish()
{
    const URI_API = 'http://localhost:3333/api/posts'
    const [post, setPosts] = useState([])

    const getPost = async () => {
        const respPost = await fetch(`${URI_API}?status=publish`)
        const respJson = await respPost.json()
        const data = respJson.data.data.map(row => ({...row, row}))
        setPosts(data)
    }

    const handleTrashed = id => {
        sendRequest('PUT', `${URI_API}/trashed/${id}`, {})
        .then(res => {
            if (res.response === 200) {
                alert(`Success Trashed Post`)
                getPost()
            }
            else {
                alert(`Failed Trashed Post`)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <>
            <CTable bordered hover>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">No</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {post.map((row, i) => (
                        <CTableRow key={i}>
                            <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                            <CTableDataCell>{row.title}</CTableDataCell>
                            <CTableDataCell>{row.category}</CTableDataCell>
                            <CTableDataCell>
                                <CTooltip content="Edit">
                                    <NavLink
                                        to={`/posts/${row.id}/edit`}
                                    >
                                        <CIcon icon={cilPen} size="lg"/>
                                    </NavLink>
                                </CTooltip>
                                &nbsp;
                                <CTooltip content="Trashed">
                                    <NavLink
                                        onClick={() => handleTrashed(row.id)}
                                    >
                                        <CIcon icon={cilTrash} size="lg"/>
                                    </NavLink>
                                </CTooltip>
                            </CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        </>
    )
}