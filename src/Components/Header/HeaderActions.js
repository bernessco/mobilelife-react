export const CHANGE_TITLE = 'CHANGE_TITLE'
export const changeTitle = (text, image) => {
    return {
        type: CHANGE_TITLE,
        text,
        image
    }
}