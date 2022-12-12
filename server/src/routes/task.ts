import { Router, Request, Response } from "express";
import data from "../../TestData.json";
import getRandomWords from "../lib/getRandomWords";

// router
const router = Router();

// @Method GET
// @Route /api/task/words
// @Desc return word list
router.get("/words", async (req: Request, res: Response) => {
    // get random 10 words with including all pos
    const words = getRandomWords(data.wordList);

    // return words result
    res.status(200).json(words);
});

// @Method POST
// @Route /api/task/rank
// @Desc return rank
router.post("/rank", async (req: Request, res: Response) => {
    // get score from body
    const { score } = req.body;

    // filter numbers that smaller than score
    const filteredScoreList: number[] = data.scoresList.filter(
        (item) => item < Number(score)
    );

    // calculate rank
    // divide length of filtered array over length of score list array
    let rank: number =
        (filteredScoreList.length / data.scoresList.length) * 100;

    // convert to fixed if float or keep value if number
    rank = Number.isInteger(rank) ? rank : Number(rank.toFixed(2));

    // return rank result
    res.status(200).json({ rank });
});

export default router;
