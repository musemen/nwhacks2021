from flask import Flask, render_template, request, redirect, \
url_for, flash, make_response, session
import json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'super secret'

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

if __name__ == '__main__':
    app.run()
