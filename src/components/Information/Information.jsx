import styles from './Information.module.css';
import { useSelector } from 'react-redux';
import {
	selectCurrentPlayer,
	selectIsDraw,
	selectIsGameEnded,
} from '../../Redux/selectors';

function Information() {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);

	let message = `Ходит: ${currentPlayer}`;
	if (isDraw) message = 'Ничья!';
	if (isGameEnded && !isDraw) message = `Победа: ${currentPlayer}`;

	return <div className={styles.information}>{message}</div>;
}

export default Information;
