from flask import Flask, jsonify, request

from reviews_api import get_reviews_from_api
from reviews_db import (get_reviews_from_db,
                        reviews_already_stored, save_reviews)

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Polafide Reviews Service"


@app.route("/api", methods=["GET", "POST"])
def return_reviews():
    """[Return the reviews for a specific place]

    Returns:
        [flask.Response] -- [A flask responce object in JSON format]
    """

    place_id = request.args.get("placeid")

    if place_id is None:
        return jsonify({"error": "Empty argument"})
    else:
        if request.method == "GET":
            return get_reviews(place_id)
        else:
            return jsonify({"error": "Unsupported HTTP Method"})


def get_reviews(place_id):
    """[Get the reviews for a specific place]

    Arguments:
        place_id {[str]} -- [A string representing a unique ID of a place]

    Returns:
        [flask.Response] -- [A flask responce object in JSON format]
    """

    if reviews_already_stored(place_id):
        print("getting from DB")
        return get_reviews_from_db(place_id)
    else:
        print("getting from API")
        reviews = get_reviews_from_api(place_id)
        save_reviews(reviews)
        return jsonify(reviews)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
