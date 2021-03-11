import { createContext, useState, ReactNode } from 'react';



interface ChallengeContextData {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    challengesCompleted: number;
    startNewChallenge: () =>;
}

interface ChallengeProviderProps {
    children: ReactNode;
}

export const challengeContext = createContext({} as ChallengeContextData );

export function ChallengeProvider({children}: ChallengeProviderProps) {
    
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);



    function levelUp(){
      setLevel(level + 1)
    }

    function startNewChallenge() {
        console.log('new Challenge')
    }

    return(
        <challengeContext.Provider value={{
            level, 
            levelUp, 
            currentExperience, 
            challengesCompleted,
            startNewChallenge
            }}>

            {children}

        </challengeContext.Provider>
    )
}
