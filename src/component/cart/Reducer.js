export const reducer = (state, action) => {

    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            data: state.data.filter((curItem) => {
                return curItem.id !== action.payload;
            }),
        };
    }
    return state;
}