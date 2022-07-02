import {ADD,DEL,ADDVAL,ODDADD} from '../constant'
export const addOne=data=>({type:ADD,data})
export const delnum=data=>({type:DEL,data})
export const add=data=>({type:ADDVAL,data})
export const oddadd=data=>({type:ODDADD,data})
