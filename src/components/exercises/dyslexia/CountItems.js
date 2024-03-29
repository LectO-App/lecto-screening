import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ExerciseContainer from 'components/ExerciseContainer';
import useSetAnswer from 'functions/setAnswer';
import NextButton from 'components/NextButton';
import { getImage } from 'functions/getImage';
import PictogramWithSound from './components/PictogramWithSound';

const CountItems = () => {
	const current = useSelector(state => state.questions.current);
	const exercise = useSelector(state => state.questions.questions[state.questions.current]);

	const [answer, setAnswer, setUserAnswer] = useSetAnswer();

	const input = useRef();

	useEffect(() => {
		input.current.value = '';
	}, [current]);

	return (
		<ExerciseContainer classes='count-items-container '>
			<div className='images'>
				{Array(exercise.exercise.count)
					.fill(0)
					.map((item, i) => (
						<PictogramWithSound classes='count-image' word={item.word} />
					))}
			</div>
			<p className='instruction'>Ingresá el número de elementos que contó</p>
			<div className='number-input'>
				<div className='number'>
					<input
						ref={input}
						autoComplete='off'
						type='number'
						name='post'
						id='post'
						onChange={e => setAnswer(+e.target.value)}
					/>
				</div>
			</div>
			<NextButton setUserAnswer={setUserAnswer} answered={input?.current?.value !== ''} />
		</ExerciseContainer>
	);
};

export default CountItems;
