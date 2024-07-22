import { INCREASE_COUNTER } from "../utils/reducerConstants";



export default function increaseCounter(counter: number) {
    return {
        type: INCREASE_COUNTER,
        count:counter
    }

}