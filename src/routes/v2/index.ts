import { RequestHandler } from '../../interfaces'
import userParser from '../../utils'

const v2: RequestHandler = (req, res, next) => {
  const { data = '' } = req.body
  const responseData = userParser(data)
  res.json({ ...responseData })
}

export default v2
