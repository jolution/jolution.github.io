import { ui, defaultLang, showDefaultLang } from './ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: keyof typeof ui = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}

export function stripLangFromPath(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length === 0) return '/'
  if (segments[0] in ui) {
    const rest = segments.slice(1)
    return rest.length ? `/${rest.join('/')}` : '/'
  }
  return pathname
}
