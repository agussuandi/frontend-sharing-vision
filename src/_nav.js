import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNewspaper
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Posts',
    to: '/posts',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Posts',
        to: '/posts/index'
      },
      {
        component: CNavItem,
        name: 'Add New',
        to: '/posts/create'
      },
      {
        component: CNavItem,
        name: 'Preview',
        to: '/posts/preview'
      }
    ]
  }
]

export default _nav
