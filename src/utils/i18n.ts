export const SUPPORTED_LOCALES = ['es', 'en'] as const;
export const DEFAULT_LOCALE = 'es' as const;

export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

export function isValidLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function getLocaleFromPathname(pathname: string): SupportedLocale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (isValidLocale(firstSegment)) {
    return firstSegment;
  }
  
  return DEFAULT_LOCALE;
}

export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (isValidLocale(firstSegment)) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}

export function getLocalePath(pathname: string, locale: SupportedLocale): string {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  return `/${locale}${pathWithoutLocale}`;
} 