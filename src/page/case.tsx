import WhatTasks from '../components/caseComponents/WhatTasks/WhatTasks';
import Slider from '../components/caseComponents/slieder';

function Case() {
  return (
    <main className="main">
      <div className="container container-slider">
        <Slider />
        <WhatTasks />
      </div>
    </main>
  );
}

export default Case;
