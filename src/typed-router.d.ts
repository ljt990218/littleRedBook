/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    'main': RouteRecordInfo<'main', '/', Record<never, never>, Record<never, never>>,
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    'about': RouteRecordInfo<'about', '/about', Record<never, never>, Record<never, never>>,
    'charts': RouteRecordInfo<'charts', '/charts', Record<never, never>, Record<never, never>>,
    'counter': RouteRecordInfo<'counter', '/counter', Record<never, never>, Record<never, never>>,
    'KeepAlive': RouteRecordInfo<'KeepAlive', '/keepalive', Record<never, never>, Record<never, never>>,
    'mock': RouteRecordInfo<'mock', '/mock', Record<never, never>, Record<never, never>>,
    'unocss': RouteRecordInfo<'unocss', '/unocss', Record<never, never>, Record<never, never>>,
  }
}
