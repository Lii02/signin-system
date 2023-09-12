from flask import *
from flask_cors import *
from flask_restful import *
from database import *
import atexit
import json

app = Flask(__name__)
CORS(app)
api = Api(app)

class Ping(Resource):
	def get(self):
		return "Server found", 200

api.add_resource(Ping, "/ping")

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
	db = Database()
	data = db.get_signins()
	return render_template("dashboard.html", signins=data)

@atexit.register
def cleanup():
	pass

def main():
	app.run(debug=True, port=5000)

if __name__ == "__main__":
	main()