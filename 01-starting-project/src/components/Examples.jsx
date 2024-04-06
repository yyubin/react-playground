import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";

export default function Examples() {
    const [ selectedTopic, setSeletedTopic ] = useState();

    function handleSelect(selectedButton) {
      // selectedButton => "components", "jsx", "props", "state"
      setSeletedTopic(selectedButton);
      // console.log(selectedButton); // 이전값 출력 다시 앱을 재실행 하기 전까진 예전 앱이기 때문
    }
  
    let tabContent = <p>Please select a topic.</p>;
    
    if (selectedTopic) {
      tabContent = <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    }

    return (
        <Section title="Examples" id="examples">
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
        </menu>
          {tabContent}
      </Section>
    )
}