from flask import Flask
from flask import request
from flask import jsonify

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Polafide Reviews Service"


@app.route("/api")
def return_reviews():
    company_request = request.args.get("company")

    if company_request is None:
        company_request = "null"

    return jsonify({"company_name": company_request.replace('"', "").replace("'", "")})



