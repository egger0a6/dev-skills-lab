import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dotaHeroSchema = new Schema({
  name: String,
  release: Date,
  version: String,
});

const DotaHero = mongoose.model("DotaHero", dotaHeroSchema);

export {
  DotaHero
}