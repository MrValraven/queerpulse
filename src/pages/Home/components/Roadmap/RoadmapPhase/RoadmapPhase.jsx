import './styles.scss';

const RoadmapPhase = ({ hasPhaseStarted, phaseNumber, phaseTitle, phaseGoals = [] }) => {
    const getPhaseCompletionStatus = (goals) => {
        const amountOfGoals = goals.length;
        const amountOfCompletedGoals = goals.filter((goal) => goal.isGoalCompleted).length;

        if (amountOfCompletedGoals === 0) {
            return 0
        }

        return Math.round((amountOfCompletedGoals / amountOfGoals) * 100);
    }
    return (
        <div className='roadmap-phase'>
            <div className="progress-bar">
                <div className="progress-header">
                    <div className={`phase-number ${hasPhaseStarted ? 'phase-number-complete' : ''}`}>{phaseNumber}</div>
                    <div className="text">
                        <h4>Phase {phaseNumber}</h4>
                        <h3>{phaseTitle}</h3>

                    </div>
                </div>
                <div className="progress-body">
                    <div className="progress">
                        <div className="progress-done" style={{ height: hasPhaseStarted ? `calc(${getPhaseCompletionStatus(phaseGoals)}%)` : getPhaseCompletionStatus(phaseGoals) + '%' }}>
                            {getPhaseCompletionStatus(phaseGoals) + '%'}
                        </div>
                    </div>
                    <div className="content">
                        <ul>
                            {phaseGoals.map((goal) =>
                                <li key={goal.id} className={goal.isGoalCompleted ? 'objective-complete' : ''}>
                                    {goal.text + " "}
                                    {goal.isGoalCompleted ? <span>✅</span> : ''}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadmapPhase