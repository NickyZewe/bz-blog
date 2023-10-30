migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nxdyygkfkn4pi39")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pl09euui",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nxdyygkfkn4pi39")

  // remove
  collection.schema.removeField("pl09euui")

  return dao.saveCollection(collection)
})
