from flask import *
from flask_cors import *

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "<p>Hello World</p>"

if __name__ == "__main__":
    app.run(debug=True, port=5000)