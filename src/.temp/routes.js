export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\couro\\Documents\\GitHub\\eleijonmarck\\src\\pages\\Index.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\couro\\Documents\\GitHub\\eleijonmarck\\src\\pages\\404.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/:slug",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\Users\\couro\\Documents\\GitHub\\eleijonmarck\\src\\templates\\Post.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/tag/:id",
    component: () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "C:\\Users\\couro\\Documents\\GitHub\\eleijonmarck\\src\\templates\\Tag.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\couro\\Documents\\GitHub\\eleijonmarck\\src\\pages\\404.vue"),
    meta: {
      data: true
    }
  }
]

