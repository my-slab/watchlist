import axios from 'axios'
import camelcaseKeys from 'camelcase-keys-deep'
import qs from 'qs'
import snakecaseKeys from 'snakecase-keys'

const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = process.env.API_KEY

const instance = axios.create({
  baseUrl,
  paramsSerializer: params => {
    const baseParams = {
      apiKey
    }

    return qs.stringify(snakecaseKeys({ ...baseParams, ...params }), {
      arrayFormat: 'brackets'
    })
  },
  timeout: 2000,
  transformResponse: data => camelcaseKeys(JSON.parse(data))
})

export default instance
