"use client";

import { useState } from "react";
import { useId } from 'react'
import Link from 'next/link'
import { useClient } from "next/client";
import { ClientContext } from "next/client";
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import ContactUs  from '@/components/ContactForm'
// function TextInput({ label, ...props }) {
//   let id = useId()

//   return (
//     <div className="group relative z-0 transition-all focus-within:z-10">
//       <input
//         type="text"
//         id={id}
//         {...props}
//         placeholder=" "
//         className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
//       />
//       <label
//         htmlFor={id}
//         className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
//       >
//         {label}
//       </label>
//     </div>
//   )
// }

// function RadioInput({ label, ...props }) {
//   return (
//     <label className="flex gap-x-3">
//       <input
//         type="radio"
//         {...props}
//         className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
//       />
//       <span className="text-base/6 text-neutral-950">{label}</span>
//     </label>
//   )
// }

// function ContactForm() {
//   return (
//     <FadeIn className="lg:order-last">
//       <form>
//         <h2 className="font-display text-base font-semibold text-neutral-950">
//           Wyślij zapytanie
//         </h2>
//         <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
//           <TextInput label="Imię" name="name" autoComplete="Imię" />
//           <TextInput
//             label="Email"
//             type="email"
//             name="email"
//             autoComplete="email"
//           />
       
//           <TextInput label="Wiadomość" name="message" />
          
//         </div>
//         <Button type="submit" className="mt-10">
//           Wyślij wiadomość
//         </Button>
//       </form>
//     </FadeIn>
//   )
// }

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
       Interesuje cię inwestycja w nieruchmości?
      </h2>
      <p className="mt-6 text-base text-neutral-600">
       Jesteś we właściwym miejscu. Przygotujemy dla Ciebie okazję inwestycjną, oraz zajmiemy się całym procesem - remontem i sprzedażą.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
{/* 
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Kontakt
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Careers', 'careers@studioagency.com'],
            ['Press', 'press@studioagency.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border> */}

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nasze Social Media
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

// export const metadata = {
//   title: 'Porozmawiajmy',
//   description: 'Zapraszamy do kontaktu.',
// }

export default function Contact() {
  
  return (
    <>
  

      <PageIntro eyebrow="Porozmawiajmy" title="Zapraszamy do kontaktu.">
       
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
        <ContactUs/>
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
