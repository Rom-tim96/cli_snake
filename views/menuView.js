const View = require("./View")

module.exports = new View(({items}) => {
    return (
`___Menu___
${items.map((({isSelected, title}) => (isSelected ? ">" : " ") + title )).join("\n")}`
)
})