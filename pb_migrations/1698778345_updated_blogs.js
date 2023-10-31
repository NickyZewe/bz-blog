migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nxdyygkfkn4pi39")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oswhwngp",
    "name": "author",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nxdyygkfkn4pi39")

  // remove
  collection.schema.removeField("oswhwngp")

  return dao.saveCollection(collection)
})
