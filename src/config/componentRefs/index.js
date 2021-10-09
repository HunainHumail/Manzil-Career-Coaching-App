let refs = {}

const SaveCompRef = (componentName, componentReference) => refs[componentName] = componentReference
const GetCompRef = (componentName) => refs[componentName]

export {
    SaveCompRef,
    GetCompRef,
}


