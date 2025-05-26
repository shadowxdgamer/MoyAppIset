import React from 'react';
import UECard from './UECard';

const SemesterView = ({ 
  semester, 
  grades, 
  onGradeChange, 
  semesterAverage,
  onECUEAdd 
}) => {
  if (!semester) {
    return (
      <div className="semester-view">
        <p>Sélectionnez un semestre pour commencer</p>
      </div>
    );
  }
  return (
    <div className="semester-view">
      <div className="semester-header">
        <h2>{semester.name}</h2>
        {semesterAverage !== null && semesterAverage !== undefined && (
          <div className="semester-average">
            <span className="average-label">Moyenne du semestre:</span>
            <span className={`average-value ${semesterAverage >= 10 ? 'passing' : 'failing'}`}>
              {semesterAverage.toFixed(2)}/20
            </span>
          </div>
        )}
      </div>
      
      <div className="ues-container">        {Object.entries(semester.ues).map(([ueId, ue]) => (
          <UECard
            key={ueId}
            ue={ue}
            ueId={ueId}
            grades={grades[ueId] || {}}
            onGradeChange={(ecueId, assessmentType, value) => 
              onGradeChange(ueId, ecueId, assessmentType, value)
            }
            onECUEAdd={onECUEAdd}
          />
        ))}
      </div>
    </div>
  );
};

export default SemesterView;
