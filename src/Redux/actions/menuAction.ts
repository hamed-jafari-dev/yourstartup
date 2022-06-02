const menuAction = (payload: boolean) => {
    return {
        type: "menu",
        payload
    }
}
export default menuAction;
