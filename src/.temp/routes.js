export default [
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/pages/Index.vue"),
    meta: {
      data: [1,"0b276637"]
    }
  },
  {
    path: "/:slug",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/templates/Post.vue"),
    meta: {
      data: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/.cache/data/route-meta/0.json")
    }
  },
  {
    path: "/tag/:id",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/templates/Tag.vue"),
    meta: {
      data: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/.cache/data/route-meta/1.json")
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/ericleijonmarck/dev/eleijonmarck/src/pages/404.vue")
  }
]

