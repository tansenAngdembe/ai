const Reducer = (state, action) => {
    switch (action.type) {
        case "TEXT_AREA":
            const data = action.payload
            return {
                ...state,
                text: data.txt,
                count: data.cnt
            }
        case "MODE_FALSE":
            return {
                ...state,
                mode: false
            }
        case "MODE_TRUE":
            return {
                ...state,
                mode: true
            }
        case "FORM_SUBMIT":

            return {
                ...state,
                count: 0,
                text: "",
                mode: true,
                user_data: [...state.user_data,action.payload]
            }
        case "SHOW_MODEL_SUBMIT":
            return {
                ...state,
                assets:[...state.assets,action.payload]
            }

        default:
            return { ...state }
    }
}

export default Reducer