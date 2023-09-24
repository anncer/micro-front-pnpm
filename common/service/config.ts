let BASE_URL = ''
const TIME_OUT = 1000
if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://10.122.158.120:10088'
}

export { BASE_URL, TIME_OUT }
