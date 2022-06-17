import { Router } from 'express'
import * as dotaHeroesCtrl from "../controllers/dota-heroes.js";

const router = Router()

router.get("/", dotaHeroesCtrl.index);
router.get("/new", dotaHeroesCtrl.new);
router.get("/:id", dotaHeroesCtrl.show);
router.get("/:id/edit", dotaHeroesCtrl.edit);
router.post("/", dotaHeroesCtrl.create);
router.delete("/:id", dotaHeroesCtrl.delete);
router.put("/:id", dotaHeroesCtrl.update);

export {
  router
}
