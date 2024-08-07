import { Router } from 'express'
import { login } from '../ctr/admin.ctr.js'

let router = Router()

router.post('/admin/login', login )


export default router  