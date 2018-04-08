import json
import pymongo
from bson import json_util
from bson.json_util import dumps, loads
from pymongo import MongoClient


mongo_db = {
    "client": MongoClient(),
    "database": MongoClient().polafide,
    "places_collection": MongoClient().polafide.places
}


def reviews_already_stored(place_id):
    print(mongo_db["database"]["places_collection"].find(parameter).count() > 1)
    return mongo_db["database"]["places_collection"].find(parameter).count() > 1


def get_reviews_from_db(place_id):
    parameter = {"place_id": place_id}
    return mongo_db["database"]["places_collection"].find_one(parameter)


def save_reviews(place_reviews):
    data = loads(json.dumps(place_reviews))
    mongo_db["places_collection"].insert_one(data)
