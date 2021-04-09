from flask import Flask, render_template
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/index2")
def index2():
    return render_template("index2.html")

@app.route("/calendar")
def calendar():
    return render_template("calendar.html")

@app.route("/todolist")
def todolist():
    return render_template("todolist.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/registration")
def registration():
    return render_template("registration.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

if __name__ == "__main__":
    app.run(debug=True)
