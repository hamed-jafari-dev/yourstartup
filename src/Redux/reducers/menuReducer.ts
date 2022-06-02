export default (state: any, action: { type: any,payload: any }) => {
    switch (action.type) {
        case "menu":
            return {
                showMenu: action.payload
            };
        default:
            return state;
    }
};
