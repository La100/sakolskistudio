import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import  Testimonialsy  from '@/components/Testimonial2'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import mieszkanie1 from '@/images/mieszkanie1.png'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Zrealizowaliśmy już wiele inwestycji"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Doświadczenie jest kluczem na rynku nieruchomości. Sytuacje z którymi się spotykamy powtarzają się. Jesteśmy przygotowani na wszelkie niespodzianki.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-32 w-32"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Usługi"
        title="Znajdujemy okazje i zamieniamy je w perełki."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Dzięki wyjątkowemu zespołowi zajmujemy się procesem inwestycjnym od a do z. Pozyskujemy nieruchomość, remontujemy ją i zarabiamy na niej, pracując bardzo ciężko.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={mieszkanie1}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Znajdowanie okazji">
              Nasz zespół sourcerów, ma dostęp do okazji inwestycyjnych poza rynkiem. Kupujemy je poniżej ceny rynkowej, w stanie do remontu. Na tym etapie można zarobić od 10 do 20% wartości nieruchomości.
            </ListItem>
            <ListItem title="Analiza rentowności">
              Oceniamy, jak można najwięcej zarobić na inwestycji. Do wyboru jest sprzedaż i najem krótko lub długoterminowy.
            </ListItem>
            <ListItem title="Remont">
              To jest nasza specjalizacja. Współpracujemy ze specjalistami, możesz zapomnieć o męczeniu się z majstrami. Stawiamy na dobry projekt architektoniczny, robociznę wysokiej jakości i dobre materiały.
            </ListItem>
            <ListItem title="Pozyskanie klienta">
              Mieszkania sprzedaje się inaczej niż większość dóbr. Homestaging + sesja zdjęciowa, ogłoszenia na wielu portalach. Wyciągamy z nieruchomości najwięcej ile się da.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Inwestujemy w nieruchomości',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-12 sm:mt-18 md:mt-12">
        <FadeIn className="max-w-7xl">
                
              
           
        
       
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 ">
              <div className="mx-auto max-w-2xl  lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
           Z nami zarobisz więcej na nieruchomościach.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Zajmujemy się inwestowaniem na rynku mieszkaniowym w Warszawie. Oferujemy zakup inwestycyjny na wynajem i inwestycje w obrót nieruchomościami.
          </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="/process"
                      className="rounded-md bg-neutral-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                     Jak działamy?
                    </a>
                    <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                      Porozmawiajmy <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="mt-28 flex justify-end gap-8  sm:justify-start sm:pl-20 lg:mt-12 lg:pl-0">
                  <div className="ml-auto w-48 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://cdn.midjourney.com/247dfee2-59e6-436e-ac9b-bffca1047066/0_2.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-48 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://cdn.discordapp.com/attachments/1099821913829814362/1131167390755979314/CinkMane_apartment_in_poland_old_building_small_windows_soft_mi_cd20c284-33e3-4444-8f84-352dc884c6ec.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://cdn.discordapp.com/attachments/1099821913829814362/1131167412876750848/CinkMane_apartment_in_poland_old_building_small_windows_soft_mi_1f0a2ec1-9ebd-4d22-bc33-d8b11b55c4cd.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-48 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://cdn.discordapp.com/attachments/1099821913829814362/1131142944326422578/CinkMane_apartment_in_poland_old_building_small_windows_soft_mi_c76f2a8d-33c3-4f3f-a344-aaffe70ed4d4.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://cdn.discordapp.com/attachments/1099821913829814362/1130581464837267586/CinkMane_handsome_constructor_working_in_renovating_apartment_i_35a98766-75e7-4f9c-b2e8-94ba9e86d5f6.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

   
        </FadeIn>
      </Container>
      
      <Testimonialsy />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Ekpia w Revive Investments przerosła moje najśmielsze oczekiwania, najpierw sprzedałem moje mieszkanie 15% powyżej wartości rynkowej. Potem znaleźli mi okazję inwestycyjną 10% poniżej wartości rynkowej. Wymieniłem moje mieszkanie na warte 25% więcej, nie ponosząc żadnych kosztów!
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
