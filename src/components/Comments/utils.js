const isBrowser = typeof window !== 'undefined'

export const getSlug = () => isBrowser && window.location.pathname.replace(new RegExp('/', 'g'), '')
