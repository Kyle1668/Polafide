import os
import json
import requests
from flask import jsonify


def make_request_url(place_id):
    """[summary]

    Arguments:
        place_id {[type]} -- [description]

    Returns:
        [type] -- [description]
    """

    request_url = "https://maps.googleapis.com/maps/api/place/details/json?"
    id_parameter = "placeid=" + place_id
    key_parameter = "&key=" + os.environ.get("PLACES_API_KEY")
    return request_url + id_parameter + key_parameter


def get_reviews_from_api(place_id):
    """[summary]

    Arguments:
        place_id {[type]} -- [description]

    Returns:
        [type] -- [description]
    """

    url = make_request_url(place_id)
    print(url)
    request = requests.get(url).json()

    reviews = {
        "id": request["result"]["place_id"],
        "reviews": request["result"]["reviews"]
    }

    return reviews
