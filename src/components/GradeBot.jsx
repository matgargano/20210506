import React, { useState } from 'react';

function GradeBot(props) {
  const [grade, setGrade] = useState(props.startGrade);
  let gradeNote = '';
  let gradeClass = '';

  if (grade <= 10) {
    gradeNote = 'You could do better than that';
    gradeClass = 'danger';
  } else if (grade > 10 && grade < 70) {
    gradeNote = 'You are almost passing';
    gradeClass = 'warning';
  } else if (grade >= 70) {
    gradeNote = 'Good job!';
    gradeClass = 'primary';
  }

  function incrementGradeByFive() {
    setGrade(grade + 5);
  }

  return (
    <div className="my-5">
      <div className={`alert alert-${gradeClass}`} role="alert">
        {gradeNote}
      </div>

      <p>Your grade is {grade}</p>
      <button className="btn btn-secondary mr-3" onClick={incrementGradeByFive}>
        Increment Grade by +5
      </button>
      <button className="btn btn-danger" onClick={() => setGrade(0)}>
        Reset
      </button>
    </div>
  );
}

GradeBot.defaultProps = {
  startGrade: 0,
};

export default GradeBot;
