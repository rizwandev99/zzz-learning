import { useState, useMemo } from "react";

function App() {
  const [sentences, setSentences] = useState([
    "ala is good",
    "lal is bad",
    "jack is not happy",
  ]);
  const [filter, setFilter] = useState("");

  const filteredSentences = useMemo(() => {
    return sentences.filter((x) => x.includes(filter));
  }, [filter, sentences]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />

      {filteredSentences.map((words, index) => (
        <div key={index}>{words}</div>
      ))}
    </div>
  );
}
export default App;
