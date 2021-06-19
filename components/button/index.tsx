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
        'border',
        'p-2',
        'rounded',
        'text-base',
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
