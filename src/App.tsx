import { useState } from 'react'

type Performance = { title: string; performer: string; programme: string }
type ScheduleStep = { label: string; time?: string; kind?: 'start' | 'end' }

const event = {
  name: 'NAITRA NAVARATRI 3.0',
  category: 'GARBA & DANDIYA',
  tagline: 'Tradition Meets the Beat',
  date: '15 October 2026',
  venue: 'NIAT Mangalore',
  start: '9:00 AM onwards',
  lunch: '12:15 PM – 1:00 PM',
  celebration: '1:00 PM – 3:30 PM',
  end: '3:30 PM',
  venueUrl: 'https://share.google/zyz41RZH4qG8Nvyic',
  instagramUrl: 'https://www.instagram.com/niatmangalore.media/',
}

const performances: Performance[] = [
  { title: 'OPENING MUSIC', performer: 'Manushree', programme: 'Solo Prayer Song' },
  { title: 'OPENING DANCE', performer: 'Poornanda', programme: 'Solo Dance (Pilinalike)' },
  { title: 'GROUP DANCE', performer: 'Yashaswini & Team', programme: 'Group Dance' },
  { title: 'DUO PERFORMANCE', performer: 'Dhanushree', programme: 'Duo Performance' },
  { title: 'SOLO DANCE', performer: 'Jasmeen', programme: 'Solo Dance' },
  { title: 'GROUP SONG', performer: 'Aiza Fathima & Team', programme: 'Group Song' },
  { title: 'GROUP DANCE', performer: 'Somyo Ranjan & Team', programme: 'Group Dance' },
  { title: 'GROUP DANCE', performer: 'Riya Gowder & Team', programme: 'Group Dance' },
  { title: 'DUO DANCE', performer: 'Sakshi & Pooja', programme: 'Duo Dance' },
  { title: 'GROUP DANCE', performer: 'Diganth & Team', programme: 'Group Dance' },
  { title: 'DUO SONG', performer: 'Anusha & Manushree', programme: 'Duo Song' },
  { title: 'SOLO DANCE', performer: 'Rushikesh', programme: 'Solo Dance' },
  { title: 'GROUP DANCE', performer: 'Dhanushree & Team', programme: 'Group Dance' },
  { title: 'SOLO PERFORMANCE', performer: 'Preetham Nayk', programme: 'Solo Performance' },
  { title: 'DUO DANCE', performer: 'Jashmitha & Team', programme: 'Duo Dance' },
  { title: 'GROUP SINGING', performer: 'Chinmayi & Team', programme: 'Group Singing' },
  { title: 'GROUP DANCE', performer: 'Gayatri & Team', programme: 'Group Dance' },
  { title: 'SOLO DANCE', performer: 'Prajwal V', programme: 'Solo Dance' },
  { title: 'GROUP DANCE', performer: 'Snigdha & Team', programme: 'Group Dance' },
  { title: 'SOLO SINGING', performer: 'Bindu Sagar', programme: 'Solo Singing' },
]

const schedule: ScheduleStep[] = [
  { time: '9:00 AM onwards', label: 'Event begins', kind: 'start' },
  { label: 'Opening music' },
  { label: 'Opening dance' },
  { label: 'Student performances' },
  { time: '12:15 PM – 1:00 PM', label: 'Lunch break' },
  { time: '1:00 PM – 3:30 PM', label: 'Dandiya, Garba & DJ celebration' },
  { time: '3:30 PM', label: 'Programme ends', kind: 'end' },
]

const communityHeads = [
  { role: 'Core Head', name: 'Bindu Sagar' },
  { role: 'Media', name: 'Srithan' },
  { role: 'Disciplinary', name: 'Archana' },
  { role: 'Backstage', name: 'Nanditha' },
  { role: 'Stage', name: 'Snigdha' },
  { role: 'Technical Committee', name: 'Nishan' },
]

const navigation = [
  ['Home', 'home'], ['About', 'about'], ['Performances', 'performances'],
  ['Schedule', 'schedule'], ['Garba & Dandiya', 'garba'], ['Venue', 'venue'],
]

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

function PerformanceItem({ item, index }: { item: Performance; index: number }) {
  return (
    <article className="performance-row">
      <span className="performance-number">{String(index + 1).padStart(2, '0')}</span>
      <div className="performance-copy">
        <h3>{item.title}</h3>
        <p className="performer">by {item.performer}</p>
        <p className="programme">{item.programme}</p>
      </div>
      <span className="performance-mark" aria-hidden="true">↗</span>
    </article>
  )
}

function ScheduleItem({ step, index }: { step: ScheduleStep; index: number }) {
  return (
    <li className={`schedule-step ${step.kind ?? ''}`}>
      <span className="schedule-node" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      {step.time && <span className="schedule-time">{step.time}</span>}
      <span className="schedule-label">{step.label}</span>
    </li>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="NAITRA NAVARATRI 3.0 home">NN<span>3.0</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? 'CLOSE' : 'MENU'}</span><span className="menu-icon" aria-hidden="true">{menuOpen ? '−' : '+'}</span>
        </button>
        <nav id="primary-nav" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([label, id], index) => <a key={id} className={index === 0 ? 'nav-home' : ''} href={`#${id}`} onClick={closeMenu}>{label}<span>0{index + 1}</span></a>)}
        </nav>
      </header>

      <main id="main">
        <section className="hero section-pad" id="home" aria-labelledby="hero-title">
          <div className="hero-topline mono"><span>NIAT MANGALORE / CULTURAL CELEBRATION</span><span>15—10—2026</span></div>
          <div className="hero-title-wrap">
            <p className="hero-kicker">A DAY OF RHYTHM, RITUAL & COMMUNITY</p>
            <h1 id="hero-title">NAITRA<br /><span>NAVARATRI</span><em>3.0</em></h1>
            <div className="hero-stamp" aria-hidden="true"><span>EST.</span><b>’26</b><span>TOGETHER<br />IN RHYTHM</span></div>
          </div>
          <div className="hero-bottomline">
            <p className="hero-category">{event.category}</p>
            <p className="hero-tagline">{event.tagline}</p>
            <div className="hero-meta"><span>{event.date}</span><span>{event.venue}</span><span>{event.start}</span></div>
          </div>
          <a className="explore-link" href="#about"><span>EXPLORE THE EVENT</span><span aria-hidden="true">↓</span></a>
          <div className="hero-index mono"><span>01 / THE GATHERING</span><span>SCROLL TO DISCOVER</span></div>
        </section>

        <section className="intro section-pad" id="about" aria-labelledby="about-title">
          <div className="section-label"><span className="eyebrow">01 — ABOUT THE EVENT</span><span className="label-rule" /></div>
          <div className="intro-grid">
            <h2 id="about-title">A SHARED<br />RHYTHM.<br /><span>A SHARED</span><br />CELEBRATION.</h2>
            <div className="intro-text"><p className="intro-lead">Tradition meets the beat.</p><p>NAITRA NAVARATRI 3.0 brings student talent, music and dance together for a day shaped by Garba, Dandiya and community.</p><p>From the first prayer song to the final beat, every performance adds its own voice to the celebration.</p><a className="text-link" href="#performances">MEET THE LINEUP <span aria-hidden="true">↘</span></a></div>
          </div>
          <div className="intro-foot mono"><span>15 OCTOBER 2026</span><span>NIAT MANGALORE</span><span>TRADITION / TALENT / TOGETHERNESS</span></div>
        </section>

        <section className="performances section-pad" id="performances" aria-labelledby="performances-title">
          <div className="section-label"><span className="eyebrow">02 — THE RUNNING ORDER</span><span className="label-rule" /></div>
          <div className="performances-heading"><h2 id="performances-title">PERFORMANCE<span>S</span></h2><p>Twenty moments.<br />One shared stage.</p></div>
          <div className="lineup-head mono"><span>NO.</span><span>PERFORMANCE / PERFORMER</span><span>NAITRA 3.0</span></div>
          <div className="performance-list">{performances.map((item, index) => <PerformanceItem key={`${item.performer}-${index}`} item={item} index={index} />)}</div>
        </section>

        <section className="lunch section-pad" aria-label="Lunch break">
          <span className="eyebrow">A MOMENT TO RESET</span><h2>LUNCH<br /><span>BREAK</span></h2><p className="lunch-time">{event.lunch}</p><span className="lunch-note mono">PAUSE / REFUEL / RETURN</span>
        </section>

        <section className="celebration section-pad" aria-labelledby="celebration-title">
          <div className="celebration-top mono"><span>THE DAY TURNS TO DANCE</span><span>03 — EVENT HIGHLIGHT</span></div>
          <p className="eyebrow">EVERYONE ON THE FLOOR</p>
          <h2 id="celebration-title">DANDIYA,<br />GARBA <span>&</span> DJ</h2>
          <div className="celebration-bottom"><p className="celebration-time">{event.celebration}</p><p>All students, mentors and faculty members are cordially invited to join the celebration.</p><p className="concludes">The programme concludes at {event.end}.</p></div>
          <span className="celebration-asterisk" aria-hidden="true">✳</span>
        </section>

        <section className="schedule-section section-pad" id="schedule" aria-labelledby="schedule-title">
          <div className="section-label"><span className="eyebrow">04 — THE FLOW OF THE DAY</span><span className="label-rule" /></div>
          <div className="schedule-heading"><h2 id="schedule-title">EVENT<br /><span>SCHEDULE</span></h2><p>One day, unfolding<br />in rhythm.</p></div>
          <div className="timeline-scroll" role="region" aria-label="Event schedule timeline" tabIndex={0}><ol className="timeline">{schedule.map((step, index) => <ScheduleItem key={`${step.label}-${index}`} step={step} index={index} />)}</ol></div>
          <p className="timeline-hint mono">SCROLL TO FOLLOW THE DAY <span aria-hidden="true">→</span></p>
        </section>

        <section className="garba-section section-pad" id="garba" aria-labelledby="garba-title">
          <div className="garba-side mono">THE CIRCLE / THE BEAT / THE JOY</div>
          <div className="garba-main"><span className="eyebrow">05 — JOIN THE CELEBRATION</span><h2 id="garba-title">GARBA <span>&</span><br />DANDIYA</h2><p className="garba-tagline">{event.tagline}</p><p className="garba-description">A celebration of traditional dance, music and community participation. Step into the circle and find the rhythm together.</p><p className="garba-time">{event.celebration}</p></div>
          <span className="garba-index" aria-hidden="true">G</span>
        </section>

        <section className="venue-section section-pad" id="venue" aria-labelledby="venue-title">
          <div className="section-label"><span className="eyebrow">06 — FIND YOUR WAY</span><span className="label-rule" /></div>
          <div className="venue-grid"><div><h2 id="venue-title">MEET US<br /><span>THERE.</span></h2><p className="venue-note">A day of culture, movement and shared celebration.</p></div><div className="venue-details"><span className="eyebrow">VENUE</span><ExternalLink href={event.venueUrl} className="venue-name">{event.venue}<span aria-hidden="true">↗</span></ExternalLink><div className="venue-detail-row"><div><span className="eyebrow">DATE</span><p>{event.date}</p></div><div><span className="eyebrow">EVENT START</span><p>{event.start}</p></div></div><ExternalLink href={event.venueUrl} className="map-link">VIEW VENUE ON MAPS <span aria-hidden="true">↗</span></ExternalLink></div></div>
        </section>

        <section className="community section-pad" aria-labelledby="community-title">
          <div className="community-top"><span className="eyebrow">07 — PEOPLE WHO MAKE IT HAPPEN</span><span className="community-rule" /></div>
          <div className="community-grid"><div className="community-heads"><h2 id="community-title">COMMUNITY<br /><span>HEADS</span></h2><div className="heads-list">{communityHeads.map((head) => <div className="head-row" key={head.role}><span>{head.role}</span><strong>{head.name}</strong></div>)}</div></div>
            <div className="community-connect"><div className="connect-block"><span className="eyebrow">NIAT MANGALORE</span><h3>MEDIA</h3><p className="connect-caption">FOLLOW US ON INSTAGRAM</p><ExternalLink href={event.instagramUrl} className="social-link">@niatmangalore.media <span aria-hidden="true">↗</span></ExternalLink></div><div className="connect-block venue-connect"><span className="eyebrow">VISIT THE VENUE</span><ExternalLink href={event.venueUrl} className="connect-venue">NIAT MANGALORE <span aria-hidden="true">↗</span></ExternalLink><ExternalLink href={event.venueUrl} className="footer-map-link">VIEW VENUE ON MAPS <span aria-hidden="true">↗</span></ExternalLink></div></div>
          </div>
          <div className="community-foot mono"><span>NIAT MANGALORE / 2026</span><span>IN COMMUNITY, WE CELEBRATE.</span></div>
        </section>
      </main>

      <footer className="site-footer section-pad"><a href="#home" className="footer-name">NAITRA NAVARATRI 3.0 <span>— GARBA & DANDIYA</span></a><p>{event.tagline}</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </>
  )
}

export default App
