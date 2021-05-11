import React from 'react';
import GradeBot from './components/GradeBot';

function App() {
  return (
    <div className="container pt-4">
      <GradeBot startGrade={20} />
      <GradeBot />
      <GradeBot startGrade={100000000} />
    </div>
  );
}

export default App;
