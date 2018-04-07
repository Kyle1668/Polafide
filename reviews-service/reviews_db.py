import pymongo
from pymongo import MongoClient


mongo_db = {
    "client": MongoClient(),
    "database": MongoClient().polafide,
    "places_collection": MongoClient().polafide.places
}


def reviews_already_stored(place_id):
    return get_reviews_from_db(place_id).count() > 0


def get_reviews_from_db(place_id):
    parameter = {"place_id": place_id}
    return mongo_db["database"]["places_collection"].find_one(parameter)


def save_reviews(place_reviews):
    mongo_db["database"].insert_one(place_reviews)
