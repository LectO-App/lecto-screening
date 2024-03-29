import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useSetAnswer from 'functions/setAnswer';
import ExerciseContainer from 'components/ExerciseContainer';
import NextButton from 'components/NextButton';

const NonexistingWords = () => {
	const { exercise, setUserAnswer, submitAnswer } = useSetAnswer(false);

	const arrayToShow = exercise.words;
	const [answers, setAnswers] = useState([]);
	const currentItem = answers.length;

	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	const addAnswer = answer => {
		if (arrayToShow.length > answers.length) {
			setAnswers(prev => {
				setUserAnswer([...prev, answer]);
				return [...prev, answer];
			});
			setCurrentWordIndex(prev => prev + 1);
		}
	};

	const keydownEvent = event => {
		if (event.key === 'ArrowRight') {
			addAnswer({ correct: true });
		} else if (event.key === 'ArrowLeft') {
			addAnswer({ correct: false });
		}
	};

	const nextExercise = () => {
		submitAnswer(answers);
		setAnswers([]);
	};

	useEffect(() => {
		if (currentItem <= arrayToShow.length) {
			window.removeEventListener('keydown', keydownEvent);
			window.addEventListener('keydown', keydownEvent);
		}
		if (arrayToShow.length - 1 === currentWordIndex) {
			submitAnswer();
		}

		return () => {
			window.removeEventListener('keydown', keydownEvent);
		};
	}, [answers]);

	return (
		<ExerciseContainer classes='say-the-letters-container'>
			<div className='letters'>
				{/* {arrayToShow.map((item, index) => (
					<div className={`letter ${index < currentItem ? 'answered' : ''}`} key={item}>
						{item}
					</div>
				))} */}
				<div
					className={`letter ${currentWordIndex < currentItem ? 'answered' : ''}`}
					key={arrayToShow[currentWordIndex]}
				>
					{arrayToShow[currentWordIndex]}
				</div>
			</div>

			<NextButton setUserAnswer={nextExercise} answered={currentWordIndex >= answers.length} />
		</ExerciseContainer>
	);
};

export default NonexistingWords;
