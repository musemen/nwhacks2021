from flask import Flask, render_template, request, redirect, \
url_for, flash, make_response, session

app = Flask(__name__)
app.config['SECRET_KEY'] = 'super secret'
<<<<<<< Updated upstream
=======
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
CORS(app)

class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Question = db.Column(db.String(40), nullable=False)
    Background = db.Column(db.String(200), nullable=False)
    Resources = db.Column(db.String(60), nullable=False)
    prompts = db.Column(db.String(60), nullable=False)
    # Import from other prompts table
    

    def __repr__(self):
        return f"Question('{self.Question}','{self.Background}')"

class Prompts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    prompt = db.Column(db.String(60), nullable=False)

>>>>>>> Stashed changes

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

