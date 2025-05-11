import FieldLayout from './FieldLayout';
import {
	setField,
	setIsGameEnded,
	setIsDraw,
	setCurrentPlayer,
} from '../../Redux/actions';
import {
	selectCurrentPlayer,
	selectIsGameEnded,
	selectField,
} from '../../Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Вертикали
	[0, 4, 8],
	[2, 4, 6], // Диагонали
];

function Field() {
	const dispatch = useDispatch();
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const field = useSelector(selectField);

	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		dispatch(setField(newField));

		if (checkWinner(newField, currentPlayer)) {
			dispatch(setIsGameEnded(true));
			return;
		}

		if (!newField.includes('')) {
			dispatch(setIsDraw(true));
			dispatch(setIsGameEnded(true));
			return;
		}

		dispatch(setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'));
	};

	const checkWinner = (field, player) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === player),
		);
	};

	return <FieldLayout handleCellClick={handleCellClick} />;
}

export default Field;
