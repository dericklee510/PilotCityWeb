export function countDigits(val: number): bigint {
    return BigInt(val.toString().replace('r', '').length)
}
export function countDecimals(val: number): bigint {
    if (Math.floor(val) !== val) return BigInt(val.toString().split('.')[1].length || 0)
    return BigInt(0)
}
