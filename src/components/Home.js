import { Link } from 'react-router-dom';
import '../css/Home.css';

let questions = [
    {
        question: "To what extent should Twitter moderate content that is posted to the platform?",
        organizer: "Twitter Inc.",
        id: 1
    },
    {
        question: "Let's discuss Universal Basic Income",
        organizer: "🤑western🤑ivey🤑stonks🤑club🤑",
        id: 2
    },
    {
        question: "Which MP should we kick out of parliament?",
        organizer: "Government of Canada",
        id: 3
    }
];

function QuestionCard(props) {
  return (
    <Link to={`/vote/${props.id}`}>
        <div className="card">
            <h1>{props.question}</h1>
            <div className="meta-data">
                <p className="organized-by">ORGANIZED BY</p>
                <p>{props.organizer}</p>
            </div>
        </div>
    </Link>
  );
}

function Home() {
  return (
    <div id="home">
        <div className="site-description">
            <img src="https://images.unsplash.com/photo-1485282451181-373ce0a1f879?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80" alt="cover"/>
            <p>Political polarization is a massive issue. Here is a site where we identify our ideological differences and see where and how we can reach consensus.</p>
            <p>Contribute to any of the topics below to help find solutions for important issues in society.</p>
        </div>

        <div className="topics">
            <div className="header">
                <h2>Topics</h2>
                <div className="divider"></div>
            </div>

            {questions.map(q =>
                <QuestionCard id={q.id} question={q.question} organizer={q.organizer}/>
            )}
        </div>

    </div>
  );
}

export default Home;
