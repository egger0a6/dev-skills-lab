import { DotaHero } from "../models/dota-heroes.js";

function index(req, res) {
  DotaHero.find({})
  .then((heroes) => {
    res.render("dota-heroes/index", {
      heroes: heroes,
    });
  })
  .catch((error) => {
    console.log(error);
    res.redirect("/");
  })
}

function create(req, res) {
  console.log(req.body)
  DotaHero.create(req.body)
  .then((hero) => {
    res.redirect("/dota-heroes");
  })
  .catch((error) => {
    console.log(error);
    res.redirect("/dota-heroes");
  })
}

function show(req, res) {
  DotaHero.findById(req.params.id)
  .then((hero) => {
    res.render("dota-heroes/show", {
      hero: hero,
    });
  })
  .catch((error) => {
    console.log(error);
    res.redirect("/dota-heroes")
  })
}

function newHero(req, res) {
  res.render("dota-heroes/new");
}

function deleteHero(req, res) {
  DotaHero.findByIdAndDelete(req.params.id)
  .then((hero) => {
    res.redirect("/dota-heroes");
  })
  .catch((error) => {
    console.log(error);
    res.redirect("/dota-heroes");
  })
}

function edit(req, res) {
  DotaHero.findById(req.params.id)
  .then((hero) => {
    res.render("dota-heroes/edit", {
      hero: hero,
    });
  })
  .catch((error) => {
    console.log(error);
    res.redirect("/dota-heroes");
  })
}

function update(req, res) {
  DotaHero.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((hero) => {
    res.redirect(`/dota-heroes/${hero._id}`);
  })
  .catch((error) => {
    console.log(error);
    res.redirect("/dota-heroes");
  })
}

export {
  index,
  create,
  show,
  edit,
  update,
  newHero as new,
  deleteHero as delete,
}