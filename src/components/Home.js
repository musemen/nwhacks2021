import { Link } from 'react-router-dom';
import '../css/Home.css';

let questions = [
    {
        question: "What do you want to do tomorrow?",
        id: 1
    },
    {
        question: "New project name?",
        id: 2
    },
    {
        question: "New project name?",
        id: 3
    }
];

function QuestionCard(props) {
  return (
    <Link to={`/vote/${props.id}`}>
        <div className="card">
            <h1>{props.question}</h1>
        </div>
    </Link>
  );
}

function Home() {
  return (
    <div id="home">
        <h1>Answer questions</h1>

        {questions.map(q =>
            <QuestionCard id={q.id} question={q.question}/>
        )}

    </div>
  );
}

export default Home;
