import React from 'react'

const Posts = React.lazy(() => import('./views/posts/AllPost/Posts'))
const PostsCreate = React.lazy(() => import('./views/posts/AddNew/AddNew'))
const PostsDraftEdit = React.lazy(() => import('./views/posts/_tabs/Edit'))
const PostsPreview = React.lazy(() => import('./views/posts/Preview/Preview'))

const routes = [
  { path: '/posts', exact: true, name: 'Posts', element: Posts },
  { path: '/posts/index', exact: true, name: 'Posts', element: Posts },
  { path: '/posts/create', exact: true, name: 'Posts', element: PostsCreate },
  { path: '/posts/:id/edit', exact: true, name: 'Posts', element: PostsDraftEdit },
  { path: '/posts/preview', exact: true, name: 'Posts', element: PostsPreview },
]

export default routes
