import { createContext } from 'react';

type ScoreContextType = {
    score: number;
    setScore: (score: number) => void;
} | null;

const ScoreContext = createContext<ScoreContextType>(null);

export default ScoreContext;
