import clsx from 'clsx'
import ButtonProps from '@/types/components/buttons/ButtonProps'
import { reportButtonClick } from '@/API/Analytics/triggerEvent';

export default function IconButton({
  onClick,
  className,
  screenReaderText,
  icon, 
  name, 
  location
}: ButtonProps): JSX.Element {
  
  const handleClick = () => {
    reportButtonClick(name, location)
    
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <button
      onClick={handleClick}
      className={clsx(
        className,
        'rounded-xl p-2 backdrop-blur-sm backdrop-filter',
        'border border-slate-500/20 dark:border-slate-600/30',
        'bg-slate-100/10 dark:bg-slate-600/20',
        'hover:bg-slate-100/20 dark:hover:bg-slate-600/30'
      )}
    >
      <p className='sr-only'>{screenReaderText}</p>
      {icon}
    </button>
  )
}
