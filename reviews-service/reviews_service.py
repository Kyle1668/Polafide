import os
import json
import requests
from flask import jsonify


def make_request_url(place_id):
    request_url = "https://maps.googleapis.com/maps/api/place/details/json?"
    id_parameter = "placeid=" + place_id
    key_parameter = "&key=" + json.load(open("keys.json"))["places"]
    return request_url + id_parameter + key_parameter


def get_reviews(place_id):
    url = make_request_url(place_id)
    request = requests.get(url).json()
    return jsonify(request["result"]["reviews"])