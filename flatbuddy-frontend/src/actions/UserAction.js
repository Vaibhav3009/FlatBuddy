import { ON_USER_SUBMIT } from "./types"

 const userAdd = initialState =>async dispatch=> {
     console.log(initialState)
    dispatch ({
        type:ON_USER_SUBMIT,
        payload:initialState
    }
    )
}

export default userAdd
