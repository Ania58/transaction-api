import { Router } from "express";

import { transactions } from "../controllers/index.js";

const router = Router();

router.get('/', transactions.index)
router.get('/:id', transactions.fetchById)
router.post('/', transactions.create)
router.put('/:id', transactions.update)
router.delete('/:id', transactions.remove)

export default router;