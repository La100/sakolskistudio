import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/flip5.png'
import imageMeeting from '@/images/flip4.png'
import imageWhiteboard from '@/images/flip2.png'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className=" lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Odkrycie" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Pracujemy z inwestorami i najpierw poznajemych ich{' '}
          <strong className="font-semibold text-neutral-950">potrzeby</strong> i cele.
          Następnie rozpoczynamy poszukiwania okazji inwestycyjnej, o ile nie mamy aktualnie dostępnych.
        
        </p>
        <p>
        Okazje występują w wielu miejsach, takich jak portale ogłoszeniowe, licytacje komornicze, nieruchomości zagmatwane prawnie.
          Naszym zadaniem jest znalezienie okazji {' '}
          <strong className="font-semibold text-neutral-950">poniżej ceny rynkowej.</strong>{' '}
        
        </p>
        <p>
          Kiedy okazja jest znaleziona, przedstawiamy Ci {' '}
          <strong className="font-semibold text-neutral-950">korzystną</strong> ofertę w Twoim budżecie.

  
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Na tym etapie
      </h3>
      <TagList className="mt-4">
        <TagListItem>Analiza Twoich potrzeb</TagListItem>
        <TagListItem>Przygotowanie strategii</TagListItem>
        <TagListItem>Obliczenie zysków</TagListItem>
        <TagListItem>Znalezienie okazji</TagListItem>
        <TagListItem>Przedstawienie Ci możliwości</TagListItem>
       
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Renowacja" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Posiadamy własną ekipę remontową. Wykonaliśmy z nią już 13 renowacji. 
        </p>
        <p>
          Cenimy sobie terminowość i przykładanie uwagi do szczegółów.  Potrafimy wykować remont w optymalnym budżecie. Nasz architekt przygotowuje plan oraz listę zakupów.
        </p>
        <p>
          Możesz zapomnieć o kilkudziesięciu wycieczkach do Bricko Mana i Leroy Merlin. Cały proces remontu staje się dla Ciebie sprawny i przyjemny. Bez stania w korkach i kłócenia się z robotnikami.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Adam Sadowski', role: 'Inwestor' }}
        className="mt-12"
      >
        To pierwszy remont w moim życiu który poszedł sprawnie. Do tej pory miałem złe wspomnienia z ekipami remontowymi, lecz Revive Investments pokazało mi, że można inaczej.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Wystawienie na rynek" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Aby jak nawięcej{' '} 
          <strong className="font-semibold text-neutral-950">
            zarobić  
          </strong>
          {' '}na nieruchomości, ogłoszenie musi być idealne. Musi je także zobaczyć jak najwięcej potencjalnych klientów.
        </p>
        <p>
          Po zrobieniu {' '}
          <strong className="font-semibold text-neutral-950">homestaginu</strong>{' '}
          i sesji zdjęciowej przez profesjonalnego fotografa, dodajemy ogłoszenie na portale ogłoszeniowe. Tekst jest oczywiście przemyślany, pasujący pod potrzeby idealnego klienta.
        </p>
        <p>
          Staramy się żeby prezentacja przebiegła{' '}
          <strong className="font-semibold text-neutral-950">
            idealnie.
          </strong>{' '}
          Nieruchomość jest przed każdą dokładnie wyczyszczona, tak, że się{' '}
          <strong className="font-semibold text-neutral-950">
            błyszczy.
          </strong>
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Na tym etapie
      </h3>
      <List className="mt-8">
        <ListItem title="Homestaging">
          Małą ilością pracy, można sprawdzić że nieruchomość wygląda dużo lepiej. Postawienie roślin, lub zawieszenie obrazków, zmienia lokal, tak że staje się przyjemny dla oka.
        </ListItem>
        <ListItem title="Sesja zdjęciowa">
          Dobre zdjęcia do podstawa ogłoszenia, profesjonalny fotograf, dobre oświetlenie i na końcu retusz. Na ogłoszenie trafią zdjęcia idealne.
        </ListItem>
        <ListItem title="Prezentacja">
          Ładnie się uśmiechamy i oprowadzamy potencjalnych klientów. Stwarzamy przyjazną atmosferę i nawiązujemy więź z kupującym lub wynajmującym.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Nasz proces" title="Na czym polega nasza praca?">
        <p>
          Posiadamy wszystkie narzędzia potrzebne do zarabiania na nieruchomościach i robiliśmy już to wiele razy. Zobacz jakie to proste:
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      {/* <Values /> */}

      <ContactSection />
    </>
  )
}
