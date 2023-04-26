from flask import *
from flask_cors import *
from flask_restful import *
from database import *
import atexit
import json

app = Flask(__name__)
CORS(app)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {"hello": "world"}, 200

api.add_resource(HelloWorld, "/helloworld")

class SignIn(Resource):
    def post(self):
        db = Database()
        data = json.loads(request.data)
        first_name = data["firstName"]
        last_name = data["lastName"]
        timestamp = int(data["timestamp"])
        additional_notes = data["additionalNotes"]
        db.add(first_name, last_name, timestamp, additional_notes)
        db.close()
        return 200

api.add_resource(SignIn, "/signin")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@atexit.register
def cleanup():
    # Put cleanup code here
    pass

def main():
    app.run(debug=True, port=5000)

if __name__ == "__main__":
    main()