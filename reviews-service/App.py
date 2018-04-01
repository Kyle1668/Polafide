from flask import Flask
from flask import request
from flask import jsonify
from reviews_service import get_reviews


app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Polafide Reviews Service"


@app.route("/api")
def return_reviews():
    company_name = request.args.get("company")

    if company_name is None:
        return jsonify({"error": "Empty argument"})

    return get_reviews(company_name)



