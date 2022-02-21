import useSetAnswer from 'functions/setAnswer';
import DotsPanel from './components/DotsPanel';

const DotsComparison = ({ isResult }) => {
	const { exercise, submitAnswer } = useSetAnswer({ isResult });
	const { number1, number2 } = exercise.value;

	return (
		<div className='exercise panel-container'>
			<DotsPanel
				className='panel-hover'
				dots={number1}
				onClick={() => submitAnswer({ answer: number1, number1, number2 })}
			/>
			<DotsPanel
				className='panel-hover'
				dots={number2}
				onClick={() => submitAnswer({ answer: number2, number1, number2 })}
			/>
		</div>
	);
};

export default DotsComparison;
