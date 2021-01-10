import React, { useState } from 'react';
import '../css/Vote.css';

function Card(props) {
    const [vote, setVote] = useState("");
    return (
        <div className="card">
            <div className="content">
                {props.content}
            </div>
            <div className="voting-btns">
                <div className={`btn agree ${vote == "agree" ? "active" : ""}`} onClick={() => setVote("agree")}>
                    AGREE
                </div>
                <div className={`btn disagree ${vote == "disagree" ? "active" : ""}`} onClick={() => setVote("disagree")}>
                    DISAGREE
                </div>
                <div className={`btn pass ${vote == "pass" ? "active" : ""}`} onClick={() => setVote("pass")}>
                    PASS
                </div>
            </div>
        </div>
    );
}

let cards = [
    "I like titles that start with A E I O or U and sometimes M. I think that if it was a palindrome, that would also be pretty cool.",
    "I like titles that start with A E I O or U and sometimes M. I think that if it was a palindrome, that would also be pretty cool.",
    "I like titles that start with A E I O or U and sometimes M. I think that if it was a palindrome, that would also be pretty cool.",
    "I like titles that start with A E I O or U and sometimes M. I think that if it was a palindrome, that would also be pretty cool."
]

let links = [
    {
        name: "Blah Blah",
        url: "https://github.com/musemen/nwhacks2021"
    },
    {
        name: "CNN 13 Asian names to title your project",
        url: "https://github.com/musemen/nwhacks2021"
    },
    {
        name: "Global News 500,290 Mongolian and Jamacain names to title your project",
        url: "https://github.com/musemen/nwhacks2021"
    }
]

function Vote() {
  return (
    <div id="vote">
        <div id="info-block">
            <h1 className="question">
                What should our title be changed to?
            </h1>
            <div className="background">
                <h3>Background</h3>
                <p>Choosing the perfect title can feel all at once thrilling and intimidating. After all, the name you give your little one will be an everlasting part of your project’s identity that they’ll carry with them from their hospital I.D. bracelet to their days on the playground and beyond. Although many CS kiddos have a good deal of confidence in their title…</p>
            </div>
            <div className="resources">
                <h3>Resources</h3>
                <div className="resource-list">
                    {links.map(link =>
                        <a key={link.name} href={link.url} className="resource-badge">
                            {link.name} ↗
                        </a>
                    )}
                </div>
            </div>
        </div>

        <div id="vote-block">
            <div className="header">
                <h2>Vote on Suggestions</h2>
                <div className="divider"/>
            </div>
            {cards.map(card =>
                <Card content={card}/>
            )}
        </div>
    </div>
  );
}

export default Vote;
