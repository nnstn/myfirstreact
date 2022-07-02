import { ADD, DEL ,ADDVAL,ODDADD } from '../constant'

const initState = 0;
export default function count(Perstate = initState, action) {
    console.log(Perstate)
    const { type, data } = action
    switch (type) {
        case ADD:
            return Perstate + 1
        case DEL:
            return Perstate - data
        case ADDVAL:
            return Perstate + data
        case ODDADD:
            return Perstate + data
            
        default:
            return Perstate
    }
}
