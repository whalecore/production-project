import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', function () {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })
  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
      'someClass class1 class2'
    )
  })
  test('with additional class and mods', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, [
        'class1',
        'class2'
      ])
    ).toBe('someClass class1 class2 hovered')
  })
  test('with additional class and mods', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'class1',
        'class2'
      ])
    ).toBe('someClass class1 class2 hovered scrollable')
  })
  test('with additional class and mods', () => {
    expect(
    // @ts-ignore
      classNames('someClass', { hovered: true, scrollable: undefined }, [
        'class1',
        'class2'
      ])
    ).toBe('someClass class1 class2 hovered')
  })
})
