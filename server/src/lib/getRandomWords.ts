import { IWord } from "../types";

/**
 * @param [Array]
 * 1. shuffle word list
 * 2. slice 10 elements from shuffled list
 * 3. check if the array include all pos
 * @return Array
 */
export default function getRandomWords(words: IWord[]): IWord[] {
    const pos = ["adjective", "adverb", "noun", "verb"];

    // shuffle word list
    const shuffled = words.sort(() => Math.random() - Math.random());

    // get 10 elements from shuffled word list
    const slicedList = shuffled.slice(0, 10);

    // check if all pos exists in sliced word list
    const allPosExist = slicedList.every((word) => {
        return pos.includes(word.pos);
    });
    // if all post exists return sliced arr
    // if not exits repeat
    if (allPosExist) {
        return slicedList;
    } else {
        getRandomWords(words);
    }
}
