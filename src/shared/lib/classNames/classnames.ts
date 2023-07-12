type Modes = Record<string, | boolean | string>

export function classnames(cls: string, modes:Modes = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(modes)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls, value]) => cls)
    ].join(' ')
}
