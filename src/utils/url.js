let baseurl = ''
if (process.env.NODE_ENV === 'development') {
  baseurl = 'http://121.4.20.49:8100/api'
} else {
  baseurl = 'http://121.4.20.50:8100'
}

export const url = baseurl
