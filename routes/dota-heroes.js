import { Router } from 'express'
import * as dotaHeroesCtrl from "../controllers/dota-heroes.js";

const router = Router()

router.get("/", dotaHeroesCtrl.index);
router.get("/new", dotaHeroesCtrl.new);
router.get("/:id", dotaHeroesCtrl.show);
router.post("/", dotaHeroesCtrl.create);
router.delete("/:id", dotaHeroesCtrl.delete);

export {
  router
}
