import { RequiredKeys, NonFunctionKeys } from 'utility-types';

/**
 * throw error when specific field is not found on the current class
 * @param messages a map that contains custom error messages to display when dependencies 
 * are not found on the class, dependencies and the messages map should be one-one mapping
 * @param dependencies an array of dependencies, should be the name of the field that you 
 * want this class to have
 */
export function Dependency<T extends Object>(messages?: Record<keyof T,string>, ...dependencies: (NonFunctionKeys<T>)[]) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        let pass = true;
        descriptor.value = function (...args: any[]){
            dependencies.forEach(key => {
                if (!(key in this) || !((this as any)[key])) {
                    pass = false;
                    // eslint-disable-next-line no-console
                    console.error(
                        (messages && messages[key]) ?
                        messages[key] :
                        `${key} is listed as a dependency for this function, but not found`
                    )
                }
            })
            if (!pass) throw new Error("Dependency not satified")
            return originalMethod(...args)
        }
    }
}


