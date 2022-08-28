import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeole] = useState(data);

  return (
    <main>
      <section className="container">
        <h3> {people.length} birthday today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeole([]);
          }}
        >
          clear all
        </button>
        <button
          onClick={() => {
            setPeole(data);
          }}
        >
          set all
        </button>
      </section>
    </main>
  );
}

export default App;
