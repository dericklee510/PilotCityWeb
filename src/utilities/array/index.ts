import {findIndex} from 'lodash'
export function spliceOrPush<T>(
    target: Array<T>,
    obj: T,
    ...identifiers: (keyof T)[]
  ) {
    let searchObj: Record<keyof T, any> = ({} as unknown) as Record<keyof T, any>;
    identifiers.forEach(identifier => {
      searchObj[identifier] = obj[identifier];
    });
    let index = findIndex(target, searchObj);
    target.splice(index, index === -1 ? 0 : 1, obj);
  }