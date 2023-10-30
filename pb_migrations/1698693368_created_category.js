migrate((db) => {
  const collection = new Collection({
    "id": "r51twtlarzkvt6f",
    "created": "2023-10-30 19:16:08.304Z",
    "updated": "2023-10-30 19:16:08.304Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fg7dzlat",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r51twtlarzkvt6f");

  return dao.deleteCollection(collection);
})
