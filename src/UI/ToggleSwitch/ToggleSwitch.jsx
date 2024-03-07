// import { useState } from 'react';
// import './ToggleSwitch.css';

// function ToggleSwitch() {
//   const [isToggled, setIsToggled] = useState(false);

//   const onToggle = () => setIsToggled(!isToggled);

//   return (
//     <div className="toggle-container">
//       <span className="toggle-label">Город</span>
//       <div className="toggle-switch">
//         <input
//           className="toggle-checkbox"
//           type="checkbox"
//           id="toggle"
//           checked={isToggled}
//           onChange={onToggle}
//           aria-label="Переключить между городом и деревней"
//         />
//         <label className="toggle-slider" htmlFor="toggle" />
//       </div>
//     </div>
//   );
// }

// export default ToggleSwitch;
import { useState } from 'react';
import './ToggleSwitch.css';

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => setIsToggled(!isToggled);

  return (
    <div className="toggle-container">
      <span className="toggle-label">Город</span>
      <div className="toggle-switch">
        <input
          className="toggle-checkbox"
          type="checkbox"
          id="toggle-checkbox"
          checked={isToggled}
          onChange={onToggle}
          aria-label="Переключить между городом и деревней"
        />
        <label className="toggle-slider" htmlFor="toggle-checkbox" />

        {/* <label className="toggle-slider" htmlFor="toggle-checkbox" /> */}
      </div>
    </div>
  );
}

export default ToggleSwitch;
