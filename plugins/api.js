export default function ({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const api = $axios.create()

  // Set baseURL to something different
  api.setBaseURL('https://8mrb1284ud.execute-api.us-east-1.amazonaws.com/dev')

  // Inject to context as $api
  inject('api', api)
}
