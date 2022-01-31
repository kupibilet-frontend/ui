export const buttonFilter = (token) => {
    const buttonTokenCategories = ['IconButton', 'TextButton', 'TextButtonWithIcon']
    return buttonTokenCategories.includes(token.attributes.category)
}