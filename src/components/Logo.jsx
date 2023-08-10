import { useId } from 'react'
import clsx from 'clsx'


export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
   <img
   src="../images/logstein.png"
   width='150px'
   height='50px'
   />
  )
}
