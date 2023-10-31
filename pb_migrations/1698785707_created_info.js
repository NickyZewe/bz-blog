migrate((db) => {
  const collection = new Collection({
    "id": "uk6q4rev7ntqy89",
    "created": "2023-10-31 20:55:07.147Z",
    "updated": "2023-10-31 20:55:07.147Z",
    "name": "info",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9sfcblhm",
        "name": "bio",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zio4rfex",
        "name": "logo",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("uk6q4rev7ntqy89");

  return dao.deleteCollection(collection);
})
