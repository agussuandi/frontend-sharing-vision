import React, { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol, CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'

import Draft from './_tabs/Draft'
import Publish from './_tabs/Publish'
import Trashed from './_tabs/Trashed'

export default function Posts()
{
    const [activeKey, setActiveKey] = useState(1)

    return (
        <CRow>
            <CCol xs={12}>
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
                                    Published
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href={void(0)}
                                    style={{cursor: 'pointer'}}
                                    active={activeKey === 2}
                                    onClick={() => setActiveKey(2)}
                                >
                                    Drafts
                                </CNavLink>
                            </CNavItem>
                            <CNavItem>
                                <CNavLink
                                    href={void(0)}
                                    style={{cursor: 'pointer'}}
                                    active={activeKey === 3}
                                    onClick={() => setActiveKey(3)}
                                >
                                    Trashed
                                </CNavLink>
                            </CNavItem>
                        </CNav>
                        <CTabContent className="p-3">
                            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                                <Draft />
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                                <Publish />
                            </CTabPane>
                            <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                                <Trashed />
                            </CTabPane>
                        </CTabContent>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
