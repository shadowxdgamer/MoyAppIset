import { useState, useEffect } from 'react';
import { programs, calculateSemesterAverage } from '../data/programs';
import ProgramSelector from './ProgramSelector';
import SemesterView from './SemesterView';
import SummaryPanel from './SummaryPanel';

const GradeCalculator = () => {
  const [selectedProgram, setSelectedProgram] = useState('TC');
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [grades, setGrades] = useState({});
  const [semesterAverages, setSemesterAverages] = useState({});
  const [programAverage, setProgramAverage] = useState(null);

  // Initialize grades structure when program changes
  useEffect(() => {
    const program = programs[selectedProgram];
    if (program) {
      const availableSemesters = Object.keys(program.semesters).map(Number);
      if (!availableSemesters.includes(selectedSemester)) {
        setSelectedSemester(availableSemesters[0]);
      }
        // Initialize grades structure
      const newGrades = {};
      Object.entries(program.semesters).forEach(([semesterId, semester]) => {
        newGrades[semesterId] = {};
        Object.entries(semester.ues).forEach(([ueId, ue]) => {
          newGrades[semesterId][ueId] = {};
          Object.entries(ue.ecues).forEach(([ecueId]) => {
            newGrades[semesterId][ueId][ecueId] = {};
          });
        });
      });
      setGrades(newGrades);
    }
  }, [selectedProgram, selectedSemester]);

  // Recalculate averages when grades change
  useEffect(() => {
    const program = programs[selectedProgram];
    if (!program || !grades) return;

    const newSemesterAverages = {};
    const semesterGrades = [];

    // Calculate each semester average
    Object.entries(program.semesters).forEach(([semesterId, semester]) => {
      const semesterGradeData = grades[semesterId] || {};
      const semesterAvg = calculateSemesterAverage(semester, semesterGradeData);
      newSemesterAverages[semesterId] = semesterAvg;
      
      if (semesterAvg !== null) {
        semesterGrades.push(semesterAvg);
      }
    });

    setSemesterAverages(newSemesterAverages);

    // Calculate program average
    if (semesterGrades.length > 0) {
      const programAvg = semesterGrades.reduce((sum, grade) => sum + grade, 0) / semesterGrades.length;
      setProgramAverage(programAvg);
    } else {
      setProgramAverage(null);
    }
  }, [grades, selectedProgram]);
  const handleGradeChange = (ueId, ecueId, assessmentType, value) => {
    setGrades(prev => ({
      ...prev,
      [selectedSemester]: {
        ...prev[selectedSemester],
        [ueId]: {
          ...prev[selectedSemester]?.[ueId],
          [ecueId]: {
            ...prev[selectedSemester]?.[ueId]?.[ecueId],
            [assessmentType]: value
          }
        }
      }
    }));
  };

  const handleECUEAdd = (ueId, ecueId, ecueData) => {
    // Add ECUE to the program structure
    const program = programs[selectedProgram];
    if (program && program.semesters[selectedSemester]) {
      program.semesters[selectedSemester].ues[ueId].ecues[ecueId] = ecueData;
      
      // Initialize grades for this new ECUE
      setGrades(prev => ({
        ...prev,
        [selectedSemester]: {
          ...prev[selectedSemester],
          [ueId]: {
            ...prev[selectedSemester]?.[ueId],
            [ecueId]: {}
          }
        }
      }));
    }
  };

  const program = programs[selectedProgram];
  const availableSemesters = program ? Object.keys(program.semesters).map(Number).sort() : [];
  const currentSemesterData = program?.semesters[selectedSemester];
  const currentSemesterGrades = grades[selectedSemester] || {};
  const currentSemesterAverage = semesterAverages[selectedSemester];

  return (
    <div className="grade-calculator">
      <div className="calculator-header">
        <ProgramSelector 
          programs={programs}
          selectedProgram={selectedProgram}
          onProgramChange={setSelectedProgram}
        />
      </div>
      
      <div className="calculator-content">
        {program && (
          <>
            <div className="semester-nav">
              {availableSemesters.map(semesterId => (
                <button
                  key={semesterId}
                  className={`semester-tab ${selectedSemester === semesterId ? 'active' : ''}`}
                  onClick={() => setSelectedSemester(semesterId)}
                >
                  {program.semesters[semesterId].name}
                </button>
              ))}
            </div>

            <div className="main-content">
              <div className="semester-section">                <SemesterView
                  semester={currentSemesterData}
                  grades={currentSemesterGrades}
                  onGradeChange={handleGradeChange}
                  semesterAverage={currentSemesterAverage}
                  onECUEAdd={handleECUEAdd}
                />
              </div>

              <div className="summary-section">
                <SummaryPanel
                  program={program}
                  grades={grades}
                  currentSemester={selectedSemester - 1}
                  semesterAverages={semesterAverages}
                  programAverage={programAverage}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GradeCalculator;
