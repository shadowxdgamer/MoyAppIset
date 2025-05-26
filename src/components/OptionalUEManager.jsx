import React, { useState } from 'react';
import ECUEInput from './ECUEInput';

const OptionalUEManager = ({ ue, ueId, grades, onGradeChange, onECUEAdd }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newECUE, setNewECUE] = useState({
    name: '',
    credits: 1,
    assessments: {
      DC: 40,
      DS: 60
    }
  });

  const handleAddECUE = () => {
    if (newECUE.name.trim() === '') {
      alert('Veuillez entrer un nom pour l\'ECUE');
      return;
    }

    const ecueId = `opt_${Date.now()}`;
    onECUEAdd(ueId, ecueId, newECUE);
    
    // Reset form
    setNewECUE({
      name: '',
      credits: 1,
      assessments: {
        DC: 40,
        DS: 60
      }
    });
    setShowAddForm(false);
  };

  const handleAssessmentChange = (type, value) => {
    const numValue = parseInt(value) || 0;
    const otherType = type === 'DC' ? 'DS' : 'DC';
    const otherValue = 100 - numValue;
    
    setNewECUE(prev => ({
      ...prev,
      assessments: {
        [type]: numValue,
        [otherType]: otherValue
      }
    }));
  };
  const hasECUEs = Object.keys(ue.ecues).length > 0;

  return (
    <div className="optional-ue-manager">
      <div className="optional-ue-header">
        <h4>{ue.name}</h4>
        <span className="optional-badge">Optionnelle</span>
      </div>

      {/* Show existing ECUEs if any */}
      {hasECUEs && (
        <div className="existing-ecues">
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
        </div>
      )}

      {!hasECUEs && (
        <div className="empty-optional-ue">
          <p>Cette unité optionnelle ne contient aucun ECUE. Ajoutez des ECUEs pour pouvoir saisir des notes.</p>
        </div>
      )}

      {!showAddForm ? (
        <button 
          className="add-ecue-btn"
          onClick={() => setShowAddForm(true)}
        >
          + Ajouter un ECUE
        </button>
      ) : (
        <div className="add-ecue-form">
          <h5>Ajouter un nouvel ECUE</h5>
          
          <div className="form-group">
            <label>Nom de l'ECUE:</label>
            <input
              type="text"
              value={newECUE.name}
              onChange={(e) => setNewECUE(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Ex: Développement Mobile"
            />
          </div>

          <div className="form-group">
            <label>Crédits:</label>
            <input
              type="number"
              min="1"
              max="10"
              value={newECUE.credits}
              onChange={(e) => setNewECUE(prev => ({ ...prev, credits: parseInt(e.target.value) || 1 }))}
            />
          </div>

          <div className="form-group">
            <label>Répartition des évaluations:</label>
            <div className="assessment-distribution">
              <div className="assessment-item">
                <label>Devoir de Contrôle (DC):</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={newECUE.assessments.DC}
                  onChange={(e) => handleAssessmentChange('DC', e.target.value)}
                />
                <span>%</span>
              </div>
              <div className="assessment-item">
                <label>Devoir de Synthèse (DS):</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={newECUE.assessments.DS}
                  onChange={(e) => handleAssessmentChange('DS', e.target.value)}
                />
                <span>%</span>
              </div>
            </div>
            <small>Total: {newECUE.assessments.DC + newECUE.assessments.DS}%</small>
          </div>

          <div className="form-actions">
            <button 
              className="save-btn"
              onClick={handleAddECUE}
              disabled={newECUE.assessments.DC + newECUE.assessments.DS !== 100}
            >
              Ajouter
            </button>
            <button 
              className="cancel-btn"
              onClick={() => setShowAddForm(false)}
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionalUEManager;
