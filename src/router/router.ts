import Index from 'views/Index/Index'
import About from 'views/About/About'
import Other from 'views/Other/Other'
import OtherChild from 'views/OtherChild/OtherChild'
import Exception404 from 'views/Exception/Exception404'

const routes = [
  {
    path: "/index",
    component: Index
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/other",
    component: Other,
    routes: [
      {
        path: "/other/otherChild",
        component: OtherChild
      }
    ]
  },
  {
    path: "/exception404",
    component: Exception404
  },
  {
    path: "*",
    component: Exception404
  }
]

export default routes;