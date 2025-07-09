/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4213240211")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date2790239036",
    "max": "",
    "min": "",
    "name": "finished",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date695710405",
    "max": "",
    "min": "",
    "name": "started",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4213240211")

  // remove field
  collection.fields.removeById("date2790239036")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date695710405",
    "max": "",
    "min": "",
    "name": "date_range",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
