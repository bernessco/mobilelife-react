const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const questions = require('./database/questions.json');

const getQuestionsForClient = () => {
	return questions.map(question => {
		delete question.correct
		return question
	})
}
app.get('/questions', (req, res) => {
	res.status(404).send(getQuestionsForClient());
});

app.use('/', express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
