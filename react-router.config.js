/** @type {import('@react-router/dev/config').Config} */
export default {
  // Set to `true` for dynamic SSR or `false` for static export
  ssr: false,
  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
  },
};