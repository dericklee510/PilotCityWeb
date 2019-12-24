/**
 *Applies properties of classes in baseCtors to derivedCtors
 *
 * @export
 * @param {*} derivedCtor
 * @param {any[]} baseCtors
 * @returns
 */
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, (Object.getOwnPropertyDescriptor(baseCtor.prototype, name) as PropertyDescriptor))
        })
    })
    return class extends derivedCtor {}
}
