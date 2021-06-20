import Link from 'next/link'
import cn from 'clsx'

function ButtonLink({ href = '/', className = '', children }) {
  return (
    <Link href={href}>
      <a
        className={cn(
          'bg-transparent',
          'hover:bg-blue-500',
          'text-blue-700',
          'hover:text-white',
          'py-2 px-4',
          'border border-blue-500',
          'hover:border-transparent',
          'rounded',
          {
            [className]: Boolean(className),
          }
        )}
      >
        {children}
      </a>
    </Link>
  )
}

export default ButtonLink
