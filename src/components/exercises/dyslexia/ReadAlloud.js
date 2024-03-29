import React from 'react';
import useSetAnswer from 'functions/setAnswer';
import ExerciseContainer from 'components/ExerciseContainer';
import NextButton from 'components/NextButton';

const ReadAlloud = () => {
	const [, setAnswer, setUserAnswer] = useSetAnswer();
	return (
		<ExerciseContainer classes='read-alloud-container'>
			<NextButton setUserAnswer={setUserAnswer} answered={true} />
		</ExerciseContainer>
	);
};

export default ReadAlloud;
