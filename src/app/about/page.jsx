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
import imageMarcin from '@/images/marcin.jpg'
import imageSonia from '@/images/sonia.jpg'
import imageAnastazja from '@/images/anastazja.jpg'
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
        name: 'Anastasiia Shyshko',
        role: 'Fotograf',
        image: { src: imageAnastazja },
      },
      {
        name: 'Marcin Stola',
        role: 'Marketing',
        image: { src: imageMarcin },
      },
      {
        name: 'Sonia Rendecka',
        role: 'Architekt',
        image: { src: imageSonia },
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
    'Revive Investments to firma inwestycyjna specjalizująca się w nieruchomościach. ',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="O nas" title="Wierzymy we współpracę z inwestorami, opartą na szczerości.">
        <p>
         Pomagamy prywatnym osobom pomnażać ich majątek w bezpieczny i zyskowny sposób, oferując szeroki wybór możliwości inwestycyjnych, dopasowanych do indywidualnych potrzeb i profilu ryzyka.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
         

Nasz ostatni rok w liczbach

W 2023 roku obraliśmy 16 nieruchomości, o łącznej wartości 9,1 mln zł.
Zarządzane aktywa mają wartość 1,8 mln zł.<br/>
Średni zwrot z inwestycji rocznie dla naszych inwestorów wynosi 25%.<br/>
<br/>Nasze usługi:
<p>
<ul className='font-bold'>
<li>Inwestycje na wynajem</li>
<li>
Inwestycje w nowe nieruchomości
</li>
<li>Handel nieruchomościami</li>

</ul></p>
<br/>Dlaczego warto wybrać Revive?
<br/><br/>
Oferujemy wysoką stopę zwrotu z kapitału przy inwestycjach w nieruchomości. Średnio od 16% do 30% rocznie.
Oferujemy szeroki wybór możliwości inwestycyjnych, dopasowanych do indywidualnych potrzeb i profilu ryzyka.
Naszym priorytetem jest bezpieczeństwo i zyskowność inwestycji.
Mamy doświadczony zespół ekspertów, którzy pomogą Ci wybrać odpowiednią inwestycję.
Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o naszych usługach.
          </p>
          
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="16" label="Kupionych nieruchomości" />
          <StatListItem value="1.8 mln zł" label="Zysk" />
          <StatListItem value="9.1 mln zł" label="Zarządzanych aktywów" />
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
