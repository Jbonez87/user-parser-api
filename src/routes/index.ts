import { Router } from 'express'
import v1 from './v1'
import v2 from './v2'

const router = Router()

router.post('/v1/parse', v1)
router.post('/v2/parse', v2)

export default router