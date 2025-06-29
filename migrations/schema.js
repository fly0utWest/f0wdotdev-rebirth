/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select3095901163",
    "maxSelect": 1,
    "name": "purpose",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "select",
    "values": [
      "personal",
      "commercial"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select3095901163",
    "maxSelect": 1,
    "name": "purpose",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "personal",
      "commercial"
    ]
  }))

  return app.save(collection)
})
