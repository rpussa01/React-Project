import { CORE_CONCEPTS } from "./data";
import {useState} from 'react';
import { EXAMPLES } from "./data";

import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TapButton from "./components/TapButton.jsx";
function App() {
  const [selectedTopic , setSelectedTopic] =useState('components');

  
  function handleClick(selectedButton)
  {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
           <CoreConcept {...CORE_CONCEPTS[0]}/>
           <CoreConcept {...CORE_CONCEPTS[1]}/>
           <CoreConcept {...CORE_CONCEPTS[2]}/>
           <CoreConcept {...CORE_CONCEPTS[3]}/>

          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
             <TapButton onSelect={()=>handleClick('component')}>Components</TapButton>
             <TapButton onSelect={()=>handleClick('jsx')}>JSX</TapButton>
             <TapButton onSelect={()=>handleClick('props')}>Props</TapButton>
             <TapButton onSelect={()=>handleClick('state')}>State</TapButton>
             
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                  {EXAMPLES[selectedTopic].code}
              </code>
            </pre>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
