import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpeg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpeg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpeg'
import imageDaniel from '@/images/daniel.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Nasza kultura"
        title="Zdejmujemy ciężar i stres z Twoich barków"
        invert
      >
        <p>
          Jesteśmy grupą ekspertów w dziedzinie nieruchomości. 
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Lojalność" invert>
            Jako inwestor jesteś dla nas najważniejszy. Cięzko pracujemy żeby zdobyć zaufanie ludzi z którymi współpracujemy. Stawiamy Twoje dobro na pierwszym miejscu.
          </GridListItem>
          <GridListItem title="Zaufanie" invert>
            W nieruchomościach nie mamy kontroli nad wszystkimi czynnikami, zdażają się opóźnienia w remontach lub kryzysy światowe wpływające na rynek.
          </GridListItem>
          <GridListItem title="Współczucie" invert>
            Znamy bolączki inwestowania w nieruchomości. Naszą misją jest sprawienie, aby cały proces był dla Ciebie przyjemny.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Przywództwo',
    people: [
      {
        name: 'Daniel Sakolski',
        role: 'Założyciel / CEO',
        image: { src: imageDaniel },
      },
   
    ],
  },
  {
    title: 'Zespół',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'O nas',
  description:
    'Wierzymy we współpracę z inwestorami, opartą na szczerości.  ',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="O nas" title="Wierzymy we współpracę z inwestorami, opartą na szczerości.">
        <p>
        Dlatego jesteśmy transparentni i podajemy prawdziwe liczby. Każdą z nich możemy udowodnić, pokazująć akty notarialne.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Nasza misja w „Sakolski Investments” to przełamanie stereotypu, że inwestycje w nieruchomości są skomplikowane, czasochłonne i wymagają dużego kapitału poprzez umożliwienie łatwego, szybkiego i bezproblemowego inwestowania w najbardziej okazyjne nieruchomości dla jak największej liczby inwestorów z Europy i USA, minimalizując ryzyko inwestycyjne.
          </p>
          <p>
          Chcemy umożliwić inwestorom z tych regionów, aby zainwestowali w nieruchomość lub jej część, dzięki czemu mogą zwiększyć swój zysk przy jednoczesnym zmniejszeniu ryzyka. Pragniemy stać się światowym liderem w dziedzinie inwestycji w nieruchomości, zapewniając naszym klientom transparentny, rzetelny i prosty proces inwestycyjny.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="13" label="Kupionych nieruchomości" />
          <StatListItem value="1.5 mln zł" label="Zysk" />
          <StatListItem value="6.7 mln zł" label="Zarządzanych aktywów" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Dowiedz się jak inwestować"
        intro="Zobacz co wiemy i potrafimy, jesteśmy ekspertami w tej dziedzinie. Zapraszamy do przeczytania kilku artykułów o tym jak działać w tej branży."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
