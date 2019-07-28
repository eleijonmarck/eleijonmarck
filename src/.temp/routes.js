export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/pages/Index.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  },
  {
    name: "tag",
    path: "/tag/:id",
    component: () => import(/* webpackChunkName: "component--tag" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/templates/Tag.vue")
  },
  {
    name: "post",
    path: "/:slug",
    component: () => import(/* webpackChunkName: "component--post" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/templates/Post.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "component--404" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/pages/404.vue"),
    meta: { isStatic: true, isIndex: false }
  }
]

