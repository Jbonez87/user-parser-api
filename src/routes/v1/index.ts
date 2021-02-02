import { RequestHandler } from '../../interfaces'
import userParser from '../../utils'

const v1: RequestHandler = (req, res, next) => {
  const { data = '' } = req.body
  const responseData = userParser(data, true)
  res.json({...responseData})
}

export default v1