from flask import Flask
from flask import request
from flask import jsonify

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Polafide Reviews Service"


@app.route("/api")
def return_reviews():
    results = {
        "company_name": request.args.get("company").replace('"', "").replace("'", "")
    }
    return jsonify(results)

