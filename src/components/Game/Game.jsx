import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restartGame } from '../../Redux/actions';
import { selectField, selectIsGameEnded } from '../../Redux/selectors';

import Field from '../Field/Field';
import Information from '../Information/Information';
import styles from './Game.module.css';

function Game() {
	const dispatch = useDispatch();
	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);

	useEffect(() => {}, [field]);

	return (
		<div className={styles.game}>
			<Information />
			<Field />
			{isGameEnded ? (
				<button
					className={styles.resetButton}
					onClick={() => dispatch(restartGame())}
				>
					Начать заново
				</button>
			) : (
				<button className={styles.resetButton} disabled="disabled">
					Начать заново
				</button>
			)}
		</div>
	);
}

export default Game;
