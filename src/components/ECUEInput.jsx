import React from 'react';

const ECUEInput = ({ ecue, grades, onGradeChange }) => {
  const calculateECUEGrade = () => {
    let total = 0;
    let hasGrades = false;
    const totalCoeff = Object.values(ecue.assessments).reduce((sum, coeff) => sum + coeff, 0);

    Object.entries(ecue.assessments).forEach(([type, coefficient]) => {
      const grade = grades[type];
      if (grade !== undefined && grade !== '') {
        total += parseFloat(grade) * coefficient;
        hasGrades = true;
      }
    });

    return hasGrades ? total / totalCoeff : null;
  };

  const ecueGrade = calculateECUEGrade();

  const handleInputChange = (assessmentType, value) => {
    // Validate input: should be between 0 and 20
    if (value === '' || (parseFloat(value) >= 0 && parseFloat(value) <= 20)) {
      onGradeChange(assessmentType, value);
    }
  };

  const getAssessmentLabel = (type) => {
    const labels = {
      'DC': 'Devoir de Contrôle',
      'DS': 'Devoir de Synthèse', 
      'EC': 'Évaluation Continue',
      'ES': 'Évaluation de Synthèse',
      'TP': 'Travaux Pratiques',
      'oral': 'Oral',
      'projet': 'Projet',
      'stage': 'Stage',
      'pfe': 'Projet de Fin d\'Études'
    };
    return labels[type] || type;
  };

  return (
    <div className="ecue-input">
      <div className="ecue-header">
        <h4>{ecue.name}</h4>
        <div className="ecue-info">
          <span className="ecue-credits">{ecue.credits} crédits</span>
          {ecueGrade !== null && (
            <span className={`ecue-grade ${ecueGrade >= 10 ? 'passing' : 'failing'}`}>
              {ecueGrade.toFixed(2)}/20
            </span>
          )}
        </div>
      </div>      <div className="assessments-grid">
        {Object.entries(ecue.assessments).map(([type, coefficient]) => (
          <div key={type} className="assessment-input">
            <label htmlFor={`${ecue.id}-${type}`}>
              {getAssessmentLabel(type)}
              <span className="coefficient">({coefficient}%)</span>
            </label>
            <input
              type="number"
              id={`${ecue.id || 'ecue'}-${type}`}
              min="0"
              max="20"
              step="0.25"
              placeholder="0-20"
              value={grades[type] || ''}
              onChange={(e) => handleInputChange(type, e.target.value)}
              className="grade-input"
            />
          </div>
        ))}
      </div>

      {ecue.description && (
        <div className="ecue-description">
          <p>{ecue.description}</p>
        </div>
      )}
    </div>
  );
};

export default ECUEInput;
