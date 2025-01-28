export interface NavItem {
  name: string
  href: string
}

export interface LanguageOption {
  code: string
  name: string
}

export interface ServiceItem {
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  title: string
  description: string
}

export interface Project {
  id: number
  title: string
  category: string
  image: string
  href: string
} 