import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CIcon from '@coreui/icons-react'
import { cilPen } from '@coreui/icons'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CTooltip } from '@coreui/react'

export default function Trashed()
{
    const dispatch = useDispatch()
    const [post, setPosts] = useState([])
    const URI_API = 'http://localhost:3333/api/posts'

    const getPost = async () => {
        const respPost = await fetch(`${URI_API}?status=trashed`)
        const respJson = await respPost.json()
        const data = respJson.data.data.map(row => ({...row, row}))
        dispatch({ type: 'set', trashedCount: data.length })
        setPosts(data)
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
                            <CTableDataCell>{row.content}</CTableDataCell>
                            <CTableDataCell>
                                <CTooltip content="Edit">
                                    <NavLink
                                        to={`/posts/${row.id}/edit`}
                                    >
                                        <CIcon icon={cilPen} size="lg"/>
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