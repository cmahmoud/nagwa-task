export interface IWord {
    id?: number;
    word?: string;
    pos?: string;
}
export interface IRank {
    rank: number;
}
export interface AppState {
    tasks: IWord[];
    currentQuestion: IWord;
    isLastTask: boolean;
    completedQuestions: number;
    score: number;
    taskCompleted: boolean;
    rank: number;
}
