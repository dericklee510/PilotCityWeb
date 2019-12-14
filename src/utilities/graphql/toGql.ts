export function arr2Gql(arr: any[]): string {
    return JSON.stringify(arr).replace('[', '{').replace(']', '}')
}
