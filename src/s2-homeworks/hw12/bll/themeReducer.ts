const initState:{themeId:number} = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeType): {themeId:number} => { // fix any
    switch (action.type) {

        case 'SET_THEME_ID':{
            debugger
            return {...state,themeId:action.id}
        }

        default:
            return state
    }
}


type changeThemeType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
