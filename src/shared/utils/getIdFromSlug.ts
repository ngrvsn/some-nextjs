export const getIdFromSlug = (slug: string): string => {
  const slugSplited = slug.split('-')
  return slugSplited.length === 1
    ? slugSplited[0]
    : slugSplited[slugSplited.length - 1]
}