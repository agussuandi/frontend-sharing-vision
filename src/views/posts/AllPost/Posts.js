import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { CCard, CCardBody, CCardHeader, CNav, CNavItem, CNavLink, CTabContent, CTabPane, CBadge } from '@coreui/react'

import Draft from '../_tabs/draft/Draft'
import Publish from '../_tabs/publish/Publish'
import Trashed from '../_tabs/Trashed'

export default function Posts()
{
    const [activeKey, setActiveKey] = useState(1)

    const draftCount   = useSelector((state) => state.draftCount)
    const publishCount = useSelector((state) => state.publishCount)
    const trashedCount = useSelector((state) => state.trashedCount)

    return (
        <CCard className="mb-4">
            <CCardHeader>
                <strong>Posts</strong>
            </CCardHeader>
            <CCardBody>
                <CNav variant="tabs" role="tablist">
                    <CNavItem>
                        <CNavLink
                            style={{cursor: 'pointer'}}
                            href={void(0)}
                            active={activeKey === 1}
                            onClick={() => setActiveKey(1)}
                        >
                            Drafts <CBadge color="info">{draftCount}</CBadge>
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink
                            href={void(0)}
                            style={{cursor: 'pointer'}}
                            active={activeKey === 2}
                            onClick={() => setActiveKey(2)}
                        >
                            Published <CBadge color="info">{publishCount}</CBadge>
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink
                            href={void(0)}
                            style={{cursor: 'pointer'}}
                            active={activeKey === 3}
                            onClick={() => setActiveKey(3)}
                        >
                            Trashed <CBadge color="info">{trashedCount}</CBadge>
                        </CNavLink>
                    </CNavItem>
                </CNav>
                <CTabContent className="p-3">
                    <CTabPane role="tabpanel" visible={activeKey === 1}>
                        <Draft />
                    </CTabPane>
                    <CTabPane role="tabpanel" visible={activeKey === 2}>
                        <Publish />
                    </CTabPane>
                    <CTabPane role="tabpanel" visible={activeKey === 3}>
                        <Trashed />
                    </CTabPane>
                </CTabContent>
            </CCardBody>
        </CCard>
    )
}
