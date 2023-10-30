migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r51twtlarzkvt6f")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uziub9lx",
    "name": "blogs",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "nxdyygkfkn4pi39",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r51twtlarzkvt6f")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uziub9lx",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "nxdyygkfkn4pi39",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
