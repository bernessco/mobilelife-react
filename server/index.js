const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const DBQuestions = require('./database/questions.json');

const getQuestionsForClient = () => {
	return [...DBQuestions].map(question => {
		return {
			id: question.id,
			question: question.question,
			answers: question.answers
		}
	})
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, '../build')));

app.get('/api/questions', (req, res) => {
	res.status(202).send(getQuestionsForClient());
});

app.post('/api/questions', (req, res) => {
	let answers = req.body
	const correct = []
	answers.map(answer => {
		DBQuestions.forEach(question => {
			if (question.id === answer.question && question.correct === answer.answer) {
				correct.push(answer)
			}
		})
	})
	res.status(202).send({procent: (correct.length / answers.length) * 100})
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
