import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// will be using the create function as an arrow funtion in map
// function create(emoji) {
//   return (
//     <Entry
//       key={emoji.id}
//       emoji={emoji.emoji}
//       name={emoji.name}
//       description={emoji.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emoji) => (
          <Entry
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            description={emoji.meaning}
          />
        ))}
        ;
      </dl>
    </div>
  );
}

export default App;
