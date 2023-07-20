import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Nasze biuro" invert={invert}>
          Adres firmy 20
          <br />
          02-929 Warszawa
        </Office>
      </li>
      <li>
        <Office name="Kontakt" invert={invert}>
        danielsakolski@gmail.com
          <br />
        +48516651776
        </Office>
      </li>
    </ul>
  )
}
