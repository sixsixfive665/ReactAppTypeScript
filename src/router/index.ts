import Login from 'views/Login/Login'
import Index from 'views/Index/Index'
import About from 'views/About/About'
import Other from 'views/Other/Other'
import OtherChild from 'views/OtherChild/OtherChild'
import Exception404 from 'views/Exception/Exception404'

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/login",
    component: Login
  },
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
      },
      {
        path: "*",
        redirect: "/exception404"
      }
    ]
  },
  {
    path: "/exception404",
    component: Exception404
  },
  {
    path: "*",
    redirect: "/exception404"
  }
]

export default routes;