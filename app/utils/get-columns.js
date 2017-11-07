import getModelAttrs from './get-model-attrs';

let getModelsTableColumns = function(value, key, name) {
  return Object.assign(value, {
    modelKey: name,
    propertyName: value.propertyName || name,
    className: value.className || name.dasherize()
  });
};

export default function getColumns(model) {
  return getModelAttrs(model, 'table', getModelsTableColumns);
}