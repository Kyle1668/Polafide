from flask import Flask
from flask import request
from flask import jsonify
from reviews_service import get_reviews


app = Flask(__name__)


@app.route("/")
def hello_world():
    return "Polafide Reviews Service"



@app.route("/api", methods = ["GET"])
def return_reviews():
    if request.method == "GET":
        company_id = request.args.get("placeid")

        if company_id is None:
            return jsonify({"error": "Empty argument"})

        return get_reviews(company_id)
    else:
        return "No Get"


if __name__ == "__main__":
    app.run(debug=True, port=5000)



