import styles from './Field.module.css';
import Cell from '../Cell/Cell';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectField } from '../../Redux/selectors';

function FieldLayout({ handleCellClick }) {
	const field = useSelector(selectField);

	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<Cell key={index} value={cell} onClick={() => handleCellClick(index)} />
			))}
		</div>
	);
}

FieldLayout.propTypes = {
	handleCellClick: PropTypes.func.isRequired,
};
export default FieldLayout;
