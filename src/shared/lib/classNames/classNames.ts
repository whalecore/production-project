type Mods = Record<string, boolean | string | undefined>

export function classNames (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}

// classNames('remove-btn', {hovered: true, red: true, selectable: false}, ['pdg'])
//
// 'remove-btn hovered red pdg'
