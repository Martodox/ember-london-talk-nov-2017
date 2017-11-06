import { assert } from '@ember/debug';
import { isEmpty, isBlank } from '@ember/utils';
import { get } from '@ember/object';


export default function getModelAttrs(model, key, fn = null) {
  assert('model object is required', model);
  assert('key is required', key);

  const attributes = get(model, 'attributes');
  const ret = [];

  assert('model must have attributes object', !isEmpty(attributes));

  attributes.forEach(function(meta, name) {
    if(!isBlank(meta.options[key]))  {
      if (fn) {
        ret.push(fn(meta.options[key], key, name, model));
      } else {
        ret.push(meta.options[key]);
      }
    }
  });
  return ret;
}