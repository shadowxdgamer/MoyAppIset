import React from 'react';

const SummaryPanel = ({ 
  program, 
  grades, 
  currentSemester,
  semesterAverages,
  programAverage 
}) => {
  if (!program) {
    return null;
  }

  const getGradeStatus = (average) => {
    if (average >= 16) return 'excellent';
    if (average >= 14) return 'good';
    if (average >= 12) return 'satisfactory';
    if (average >= 10) return 'passing';
    return 'failing';
  };

  const getGradeStatusText = (average) => {
    if (average >= 16) return 'Excellent';
    if (average >= 14) return 'Bien';
    if (average >= 12) return 'Assez Bien';
    if (average >= 10) return 'Passable';
    return 'Insuffisant';
  };

  return (
    <div className="summary-panel">
      <h3>Résumé des Notes</h3>
      
      <div className="program-info">
        <h4>{program.name}</h4>
        <p className="program-description">{program.description}</p>
      </div>

      {programAverage !== null && (
        <div className={`program-average ${getGradeStatus(programAverage)}`}>
          <div className="average-main">
            <span className="average-label">Moyenne Générale:</span>
            <span className="average-value">{programAverage.toFixed(2)}/20</span>
          </div>
          <div className="average-status">
            {getGradeStatusText(programAverage)}
          </div>
        </div>
      )}      <div className="semesters-summary">
        <h5>Moyennes par Semestre</h5>
        {Object.entries(program.semesters).map(([semesterId, semester]) => {
          const semesterAvg = semesterAverages[semesterId];
          return (
            <div 
              key={semesterId} 
              className={`semester-summary-item ${currentSemester === parseInt(semesterId) - 1 ? 'current' : ''}`}
            >
              <div className="semester-name">{semester.name}</div>
              <div className="semester-average">
                {semesterAvg !== null && semesterAvg !== undefined ? (
                  <span className={`average ${getGradeStatus(semesterAvg)}`}>
                    {semesterAvg.toFixed(2)}/20
                  </span>
                ) : (
                  <span className="no-grades">Pas de notes</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="calculation-info">
        <h5>Informations sur le Calcul</h5>
        <ul>
          <li>Les notes sont sur une échelle de 0 à 20</li>
          <li>La moyenne d'un ECUE est calculée selon les coefficients des évaluations</li>
          <li>La moyenne d'une UE est la moyenne pondérée de ses ECUEs par leurs crédits</li>
          <li>La moyenne d'un semestre est la moyenne pondérée de ses UEs par leurs crédits</li>
          <li>La moyenne générale est la moyenne pondérée de tous les semestres</li>
          <li>Une note de 10/20 est requise pour valider</li>
        </ul>
      </div>

      {Object.keys(grades).length === 0 && (
        <div className="empty-state">
          <p>Commencez à saisir vos notes pour voir vos moyennes calculées automatiquement.</p>
        </div>
      )}
    </div>
  );
};

export default SummaryPanel;
