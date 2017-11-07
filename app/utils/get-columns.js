import getModelAttrs from './get-model-attrs';

let getModelsTableColumns = function(value, key, name) {
  let propertyName = value.propertyName || name.camelize,
      className = value.className || name.dasherize;
  return Object.assign(value, {
    modelKey: name,
    propertyName: propertyName,
    className: className
  });
};

export default function getColumns(model) {
  return getModelAttrs(model, 'table', getModelsTableColumns);
}