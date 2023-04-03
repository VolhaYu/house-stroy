import WhatTasks from '../components/caseComponents/WhatTasks/WhatTasks';
import Slider from '../components/caseComponents/Slider/slieder';
import Cooperation from '../components/caseComponents/Cooperation/cooperation';

function Case() {
  return (
    <main className="main">
      <div className="container container-slider">
        <Slider />
        <WhatTasks />
        <Cooperation />
      </div>
    </main>
  );
}

export default Case;
