import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1d58e6c6 = () => interopDefault(import('..\\pages\\AllUsers.vue' /* webpackChunkName: "pages/AllUsers" */))
const _29d9b090 = () => interopDefault(import('..\\pages\\CreateTag.vue' /* webpackChunkName: "pages/CreateTag" */))
const _d0d201c6 = () => interopDefault(import('..\\pages\\CreateUser.vue' /* webpackChunkName: "pages/CreateUser" */))
const _56fef704 = () => interopDefault(import('..\\pages\\Log.vue' /* webpackChunkName: "pages/Log" */))
const _8526015c = () => interopDefault(import('..\\pages\\LoginPage.vue' /* webpackChunkName: "pages/LoginPage" */))
const _4902e783 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _20a36303 = () => interopDefault(import('..\\pages\\tagpage.vue' /* webpackChunkName: "pages/tagpage" */))
const _15d371af = () => interopDefault(import('..\\pages\\tags.vue' /* webpackChunkName: "pages/tags" */))
const _d7110c2c = () => interopDefault(import('..\\pages\\UpdateUser.vue' /* webpackChunkName: "pages/UpdateUser" */))
const _4d165aa8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AllUsers",
    component: _1d58e6c6,
    name: "AllUsers"
  }, {
    path: "/CreateTag",
    component: _29d9b090,
    name: "CreateTag"
  }, {
    path: "/CreateUser",
    component: _d0d201c6,
    name: "CreateUser"
  }, {
    path: "/Log",
    component: _56fef704,
    name: "Log"
  }, {
    path: "/LoginPage",
    component: _8526015c,
    name: "LoginPage"
  }, {
    path: "/profile",
    component: _4902e783,
    name: "profile"
  }, {
    path: "/tagpage",
    component: _20a36303,
    name: "tagpage"
  }, {
    path: "/tags",
    component: _15d371af,
    name: "tags"
  }, {
    path: "/UpdateUser",
    component: _d7110c2c,
    name: "UpdateUser"
  }, {
    path: "/",
    component: _4d165aa8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
