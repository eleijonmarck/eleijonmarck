export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/pages/Index.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/pages/404.vue")
  },
  {
    path: "/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/templates/Post.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/tag/:id",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/templates/Tag.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/pages/404.vue")
  }
]

