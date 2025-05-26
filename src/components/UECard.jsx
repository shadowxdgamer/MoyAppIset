import React from 'react';
import ECUEInput from './ECUEInput';
import OptionalUEManager from './OptionalUEManager';

const UECard = ({ ue, ueId, grades, onGradeChange, onECUEAdd }) => {
  // Check if this is an optional UE
  if (ue.isOptional) {
    return (
      <OptionalUEManager
        ue={ue}
        ueId={ueId}
        grades={grades}
        onGradeChange={onGradeChange}
        onECUEAdd={onECUEAdd}
      />
    );
  }

  const calculateUEAverage = () => {
    let totalCredits = 0;
    let weightedSum = 0;
    let hasGrades = false;

    Object.entries(ue.ecues).forEach(([ecueId, ecue]) => {
      const ecueGrades = grades[ecueId] || {};
      let ecueTotal = 0;
      let hasEcueGrades = false;
      const totalCoeff = Object.values(ecue.assessments).reduce((sum, coeff) => sum + coeff, 0);

      // Calculate ECUE grade based on assessment methods
      Object.entries(ecue.assessments).forEach(([type, coefficient]) => {
        const grade = ecueGrades[type];
        if (grade !== undefined && grade !== '') {
          ecueTotal += parseFloat(grade) * coefficient;
          hasEcueGrades = true;
        }
      });

      if (hasEcueGrades) {
        const ecueAverage = ecueTotal / totalCoeff;
        weightedSum += ecueAverage * ecue.credits;
        totalCredits += ecue.credits;
        hasGrades = true;
      }
    });

    return hasGrades && totalCredits > 0 ? weightedSum / totalCredits : null;
  };

  const ueAverage = calculateUEAverage();

  return (
    <div className="ue-card">
      <div className="ue-header">
        <h3>{ue.name}</h3>
        <div className="ue-info">
          <span className="ue-credits">{ue.credits} crédits</span>
          {ueAverage !== null && (
            <span className={`ue-average ${ueAverage >= 10 ? 'passing' : 'failing'}`}>
              {ueAverage.toFixed(2)}/20
            </span>
          )}
        </div>
      </div>

      <div className="ecues-container">
        {Object.entries(ue.ecues).map(([ecueId, ecue]) => (
          <ECUEInput
            key={ecueId}
            ecue={ecue}
            grades={grades[ecueId] || {}}
            onGradeChange={(assessmentType, value) => 
              onGradeChange(ecueId, assessmentType, value)
            }
          />
        ))}
      </div>      {ue.isOptional && (
        <div className="optional-ue-notice">
          <span className="optional-badge">UE Optionnelle</span>
          <p>Cette UE est optionnelle. Vous pouvez ajouter des ECUEs supplémentaires si nécessaire.</p>
        </div>
      )}
    </div>
  );
};

export default UECard;
