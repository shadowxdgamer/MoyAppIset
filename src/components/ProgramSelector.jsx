const ProgramSelector = ({ programs, selectedProgram, onProgramChange }) => {
  return (
    <div className="program-selector">
      <div>
        <label htmlFor="program-select">Programme d'études:</label>
        <select 
          id="program-select"
          value={selectedProgram} 
          onChange={(e) => onProgramChange(e.target.value)}
        >
          {Object.entries(programs).map(([programId, program]) => (
            <option key={programId} value={programId}>
              {program.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProgramSelector;
