import cn from 'clsx'

function Button({
  onClick = console.log,
  className = '',
  children = null,
  type = null,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
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
    </button>
  )
}

export default Button
