import styles from '../../styles/Home.module.css'

export default function Cell(props) {
    const size = props.size || 'small';
    const { state, setState, id, color } = props;

    function updateElement(event) {
        let items = [...state];
        items[id] = event.target.value;
        setState(items);
    }

    function getClass(color) {
        switch(color) {
            case "green":
                return styles.colorCorrect;
            case "yellow":
                return styles.colorPresent;
            case "grey":
                return styles.colorAbsent;
        }
    }

    return (
        <input
            className={ `${getClass(color)} ${size === 'small' ? styles.smallCell : styles.bigCell}` }
            type={'text'}
            // style={{ background: color }}
            value={state ? state[id] : ''}
            onChange={event => updateElement(event)}
            maxLength={color === 'grey' ? 30 : 1 }
        />
    )
}
