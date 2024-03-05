import './SegmentedControl.scss';

function SegmentedControl() {
  return (
    <ul className="segmented-control">
      <li className="segmented-control__item segmented-control__item_active">
        <button
          onClick={console.log('segmented control clicked')}
          type="button"
          className="segmented-control__button"
        >
          На отправку
        </button>
      </li>
      <li className="segmented-control__item">
        <button
          onClick={console.log('segmented control clicked')}
          type="button"
          className="segmented-control__button"
        >
          Отправленные
        </button>
      </li>
    </ul>
  );
}

export default SegmentedControl;
