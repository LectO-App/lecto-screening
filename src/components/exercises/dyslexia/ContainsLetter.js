import { useEffect } from 'react';
import ExerciseContainer from 'components/ExerciseContainer';
import NextButton from 'components/NextButton';
import useSetAnswer from 'functions/setAnswer';
import { getImage } from 'functions/getImage';
import PictogramWithSound from './components/PictogramWithSound';

const ContainsLetter = () => {
	const { exercise, userAnswer, setUserAnswer, submitAnswer } = useSetAnswer();

	return (
		<>
			<ExerciseContainer classes='contains-letter-container multiple-choice-container'>
				<p className='instruction'>{exercise.letter}</p>
				<div className='options'>
					{exercise.words.map((word, i) => (
						<div
							key={word.word}
							className={`option ${userAnswer.i === i ? 'selected' : ''}`}
							onClick={() => setUserAnswer({ i, word: word.word })}
						>
							<PictogramWithSound classes='image-option' word={word.word} />
						</div>
					))}
				</div>

				<NextButton setUserAnswer={submitAnswer} answered={Object.keys(userAnswer).length !== 0} />
			</ExerciseContainer>
		</>
	);
};

export default ContainsLetter;
