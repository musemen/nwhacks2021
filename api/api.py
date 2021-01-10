from flask import Flask, render_template, request, redirect, \
url_for, flash, make_response, session
import json
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)
app.config['SECRET_KEY'] = 'super secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
CORS(app)

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Question = db.Column(db.String(40), nullable=False)
    Background = db.Column(db.String(200), nullable=False)
    Resources = db.Column(db.String(60), nullable=False)
    prompts = db.Column(db.String(60), nullable=False)
    # Import prompts from the function below...

    def __repr__(self):
        return f"Question('{self.Question}','{self.Background}')"

class Prompts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    prompts = db.Column(db.String(60), nullable=False)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/visits-counter/')
def visits():
    if 'visits' in session:
        # Reading and updating session data
        session['visits'] = session.get('visits') + 1
    else:
        # Setting session data
        session['visits'] = 1
    return {'Visits': session.get('visits')}

@app.route('/button-data/', methods=["POST"])
def parse_data():
    request_data = json.loads(request.data)
    print(request_data["content"])

@app.route('/add-Question/', methods=["POST"])
def parse_question():
    request_data = json.loads(request.data)
    print(request_data["content"])
    #make new question obkect and comit to db

# @app.route('/get-prompt/', methods=["GET"])
# def parse_data():
#     request_data = json.loads(request.data)
#     print(request_data["content"])

if __name__ == '__main__':
    app.run()
