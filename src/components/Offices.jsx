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
        <Office name="Revive Investments Sp. z o.o." invert={invert}>
        Witosa Point <br/>
        ul. Idzikowskiego 16
          <br />
        00-710 Warszawa <br />
        NIP 7011160797
        </Office>
      </li>
      <li>
        <Office name="Kontakt" invert={invert}>
        kontakt@reviveinvestments.pl
          <br />
        +48516651776
        </Office>
      </li>
    </ul>
  )
}
