from flask import Flask, render_template, request, redirect, \
url_for, flash, make_response, session

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
    return "Total visits: {}".format(session.get('visits'))


if __name__ == '__main__':
    app.run()
