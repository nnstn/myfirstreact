import { PERSONADD } from '../constant'
import { nanoid } from 'nanoid'
const initState = [{ id: nanoid(), name: "Tom", age: 12 }]
export default function personList(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case PERSONADD: //若是添加一个人
            //preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了。
            return [data, ...preState]
        default:
            return preState
    }
}