type Modes = Record<string, | boolean | string>;

export function classnames(cls: string, modes: Modes = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(modes)
      .filter(([_, value]) => Boolean(value))
      .map(([classname, value]) => classname),
  ].join(' ');
}
