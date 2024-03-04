import './SegmentedControl.scss';

function SegmentedControl() {
  return (
    <ul
      className="segmented-control"
    >
      <li className="segmented-control__item segmented-control__item_active">
        <button type="button">На отправку</button>
      </li>
      <li className="segmented-control__item">
        <button type="button">Отправленные</button>
      </li>
    </ul>
  );
}

export default SegmentedControl;
