exports.onCreatePage = ({
    page,
    actions
}) => {
    const {
        createPage
    } = actions

    console.log(page.path)
    if (page.path.match(/special-page/)) {
        // page.context.layout = "special"
        // createPage(page)
    }
}