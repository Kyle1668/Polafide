import requests
from flask import jsonify

def get_reviews(company_name):
    r = requests.get('https://api.github.com/events').json()
    return jsonify(r)
