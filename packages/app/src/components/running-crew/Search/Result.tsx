import React from 'react';

const array: number[] = [];
for (let i = 0; i < 100; i++) {
  array.push(i);
}

function Result() {
  return (
    <div>
      <ul>
        {array.map((_, idx) => (
          <li key={idx}>열라길다</li>
        ))}
      </ul>
    </div>
  );
}

export default Result;
