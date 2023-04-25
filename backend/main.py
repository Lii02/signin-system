from flask import *
from flask_cors import *
from flask_restful import *
from database import *

app = Flask(__name__)
api = Api(app)
CORS(app)

class HelloWorld(Resource):
    def get(self):
        return {"hello": "world"}

api.add_resource(HelloWorld, "/helloworld")

class SignIn(Resource):
    def put(self):
        pass

api.add_resource(SignIn, "/signin")

if __name__ == "__main__":
    app.run(debug=True, port=5000)