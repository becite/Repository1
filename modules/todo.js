export const ACTION = {
    TEXT_CHANGE  : 'todo/textCnange',
    TEXT_CLICK  : 'todo/textClick',
    TEXT_DELETE : 'todo/textDelete'
}

const initialState = {
    text: '',
    textList:[]
}

export default function reducer(state=initialState, action={type:null}) {
    if (!(action.type in REDUCER)) return state
    return REDUCER[action.type](state, action)
}

const REDUCER = {
    [ACTION.TEXT_CHANGE]: (state, action) => {
        return ({...state,text:action.value})
    },
    [ACTION.TEXT_CLICK]: (state, action) => {
        let array = [...state.textList]
        array.push(state.text)
        return ({...state,textList: array})
    },
    [ACTION.TEXT_DELETE]: (state, action) =>{
        return ({...state,text: '', textList: []})
    }
}

export const creator = {
    onChangeText: (event) =>
        ({type: ACTION.TEXT_CHANGE, value:event.target.value}),
    onClickButton: () =>
        ({type: ACTION.TEXT_CLICK}),
    onClickDelete: () =>
        ({type: ACTION.TEXT_DELETE})
}