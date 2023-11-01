migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nxdyygkfkn4pi39")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "itiybr51",
    "name": "category",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uc0wpj2e",
    "name": "categories",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "r51twtlarzkvt6f",
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
  collection.schema.removeField("itiybr51")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uc0wpj2e",
    "name": "category",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "r51twtlarzkvt6f",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
