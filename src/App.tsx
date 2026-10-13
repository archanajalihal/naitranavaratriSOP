import { useState } from 'react'

type PerformanceCategory = 'all' | 'dance' | 'music' | 'special'

type Performance = {
  id: number
  performer: string
  programme: string
  time: string
  category: PerformanceCategory
}

type ScheduleStep = { label: string; time?: string; kind?: 'start' | 'end' }

const event = {
  name: 'NAITRA NAVARATRI 3.0',
  category: 'GARBA & DANDIYA',
  tagline: 'Tradition Meets the Beat',
  date: '15 October 2026',
  venue: 'MILAGRES HALL COMPLEX, MANGALURU',
  start: '9:45 AM onwards',
  lunch: '12:15 PM – 1:00 PM',
  celebration: '1:00 PM – 3:30 PM',
  end: '3:30 PM',
  venueUrl: 'https://share.google/zyz41RZH4qG8Nvyic',
  instagramUrl: 'https://www.instagram.com/niatmangalore.media/',
}

const performances: Performance[] = [
  { id: 1, performer: 'Manushree', programme: 'Solo Prayer Song', time: '9:45 – 9:51 AM', category: 'music' },
  { id: 2, performer: 'Poornanda', programme: 'Solo Dance (Pilinalike)', time: '9:53 – 9:59 AM', category: 'special' },
  { id: 3, performer: 'Yashaswini & Team', programme: 'Group Dance', time: '10:01 – 10:09 AM', category: 'dance' },
  { id: 4, performer: 'Dhanushree', programme: 'Duo Performance', time: '10:11 – 10:17 AM', category: 'dance' },
  { id: 5, performer: 'Riya Gowder & Team', programme: 'Group Dance', time: '10:19 – 10:27 AM', category: 'dance' },
  { id: 6, performer: 'Aiza Fathima & Team', programme: 'Group Song', time: '10:29 – 10:37 AM', category: 'music' },
  { id: 7, performer: 'Raksha & Team', programme: 'Group Dance', time: '10:39 – 10:47 AM', category: 'dance' },
  { id: 8, performer: 'Jasmeen', programme: 'Solo Dance', time: '10:49 – 10:55 AM', category: 'dance' },
  { id: 9, performer: 'Joel Nimshi', programme: 'Solo Singing', time: '10:57 – 11:03 AM', category: 'music' },
  { id: 10, performer: 'Sakshi & Pooja', programme: 'Duo Dance', time: '11:05 – 11:11 AM', category: 'dance' },
  { id: 11, performer: 'Diganth & Team', programme: 'Group Dance', time: '11:13 – 11:21 AM', category: 'dance' },
  { id: 12, performer: 'Anusha & Manushree', programme: 'Duo Song', time: '11:23 – 11:29 AM', category: 'music' },
  { id: 13, performer: 'Jashmitha & Team', programme: 'Duo Dance', time: '11:31 – 11:37 AM', category: 'dance' },
  { id: 14, performer: 'Gayatri & Team', programme: 'Group Dance', time: '11:39 – 11:47 AM', category: 'dance' },
  { id: 15, performer: 'Chinmayi & Team', programme: 'Group Singing', time: '11:49 – 11:57 AM', category: 'music' },
  { id: 16, performer: 'Prajwal V', programme: 'Solo Dance', time: '11:59 AM – 12:05 PM', category: 'dance' },
  { id: 17, performer: 'Snigdha & Team', programme: 'Group Dance', time: '12:07 – 12:15 PM', category: 'dance' },
  { id: 18, performer: 'Bindu Sagar', programme: 'Solo Singing', time: '12:17 – 12:23 PM', category: 'music' },
]

const schedule: ScheduleStep[] = [
  { time: '9:45 – 9:51 AM', label: 'Opening music', kind: 'start' },
  { time: '9:53 – 9:59 AM', label: 'Opening dance' },
  { time: '10:01 AM – 12:23 PM', label: 'Student performances' },
  { time: '12:15 PM – 1:00 PM', label: 'Lunch break' },
  { time: '1:00 PM – 3:30 PM', label: 'Dandiya, Garba & DJ celebration' },
  { time: '3:30 PM', label: 'Programme concludes', kind: 'end' },
]

const contacts = [
  { name: 'Bindu Sagar M', phone: '+91 97400 71409', tel: '+919740071409' },
  { name: 'Nishan', phone: '+91 81478 52587', tel: '+918147852587' },
  { name: 'Chethan Shetty', phone: '+91 8971389297', tel: '+918971389297' },
]

const navigation = [
  ['Home', 'home'], ['About', 'about'], ['Performances', 'performances'],
  ['Garba & Dandiya', 'garba'], ['Schedule', 'schedule'], ['Venue', 'venue'],
]

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
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
  const [activeCategory, setActiveCategory] = useState<PerformanceCategory>('all')
  const [selectedId, setSelectedId] = useState(1)

  const closeMenu = () => setMenuOpen(false)

  const filteredPerformances = activeCategory === 'all'
    ? performances
    : performances.filter(p => p.category === activeCategory)

  const selectedAct = performances.find(p => p.id === selectedId) || performances[0]
  const currentFilteredIndex = filteredPerformances.findIndex(p => p.id === selectedAct.id)
  const hasPrev = currentFilteredIndex > 0
  const hasNext = currentFilteredIndex !== -1 && currentFilteredIndex < filteredPerformances.length - 1

  const handlePrev = () => {
    if (hasPrev) setSelectedId(filteredPerformances[currentFilteredIndex - 1].id)
  }

  const handleNext = () => {
    if (hasNext) setSelectedId(filteredPerformances[currentFilteredIndex + 1].id)
  }

  const handleSelectFilter = (category: PerformanceCategory) => {
    setActiveCategory(category)
    const nextList = category === 'all' ? performances : performances.filter(p => p.category === category)
    if (nextList.length > 0 && !nextList.some(p => p.id === selectedId)) {
      setSelectedId(nextList[0].id)
    }
  }

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
          <div className="hero-topline mono"><span>MANGALURU / CULTURAL CELEBRATION</span><span>15—10—2026</span></div>
          <div className="hero-title-wrap">
            <p className="hero-kicker">A DAY OF RHYTHM, RITUAL & COMMUNITY</p>
            <h1 id="hero-title"><span className="hero-naitra">NAITRA</span><br /><span className="hero-navaratri">NAVARATRI</span><em>3.0</em></h1>
            <div className="hero-stamp" aria-hidden="true"><span>EST.</span><b>’26</b><span>TOGETHER<br />IN RHYTHM</span></div>
          </div>
          <div className="hero-bottomline">
            <p className="hero-category">{event.category}</p>
            <p className="hero-tagline">{event.tagline}</p>
            <div className="hero-meta"><span>{event.date}</span><ExternalLink href={event.venueUrl} className="hero-venue-link">{event.venue}</ExternalLink><span>{event.start}</span></div>
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
          <div className="intro-foot mono"><span>15 OCTOBER 2026</span><ExternalLink href={event.venueUrl} className="intro-venue-link">{event.venue}</ExternalLink><span>TRADITION / TALENT / TOGETHERNESS</span></div>
        </section>

        <section className="performances section-pad" id="performances" aria-labelledby="performances-title">
          <div className="section-label"><span className="eyebrow">02 — THE RUNNING ORDER</span><span className="label-rule" /></div>
          <div className="performances-heading">
            <h2 id="performances-title">PERFORMANCE<span>S</span></h2>
            <p>Eighteen moments.<br />One shared stage.</p>
          </div>

          <div className="performance-filter-bar">
            <div className="filter-pill-group mono" role="tablist" aria-label="Performance filters">
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'all'}
                className={`filter-pill ${activeCategory === 'all' ? 'is-active' : ''}`}
                onClick={() => handleSelectFilter('all')}
              >
                ALL ACTS <span>18</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'dance'}
                className={`filter-pill ${activeCategory === 'dance' ? 'is-active' : ''}`}
                onClick={() => handleSelectFilter('dance')}
              >
                DANCE <span>11</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'music'}
                className={`filter-pill ${activeCategory === 'music' ? 'is-active' : ''}`}
                onClick={() => handleSelectFilter('music')}
              >
                MUSIC & VOCALS <span>6</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'special'}
                className={`filter-pill ${activeCategory === 'special' ? 'is-active' : ''}`}
                onClick={() => handleSelectFilter('special')}
              >
                PILINALIKE <span>1</span>
              </button>
            </div>
            <span className="filter-caption mono">CLICK OR HOVER TO EXPLORE</span>
          </div>

          <div className="stage-split">
            {/* Left Column: Interactive Timetable */}
            <div className="stage-list" role="tablist" aria-label="Performances schedule">
              <div className="stage-list-head mono">
                <span>ORDER & TIME</span>
                <span>PERFORMER / PROGRAMME</span>
                <span>ACT</span>
              </div>
              <div className="stage-list-scroll">
                {filteredPerformances.map((item) => {
                  const isSelected = selectedAct.id === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      className={`stage-row ${isSelected ? 'is-active' : ''}`}
                      onClick={() => setSelectedId(item.id)}
                      onMouseEnter={() => setSelectedId(item.id)}
                    >
                      <div className="stage-row-meta mono">
                        <span className="stage-row-no">{String(item.id).padStart(2, '0')}</span>
                        <span className="stage-row-time">{item.time.split('–')[0].trim()}</span>
                      </div>
                      <div className="stage-row-body">
                        <h4 className="stage-row-name">{item.performer}</h4>
                        <span className="stage-row-genre mono">{item.programme}</span>
                      </div>
                      <span className="stage-row-indicator" aria-hidden="true">→</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Featured Stage Spotlight */}
            <div className="stage-spotlight" aria-live="polite">
              <div className="spotlight-header mono">
                <span className="spotlight-badge">
                  <span className="spotlight-dot" aria-hidden="true" />
                  STAGE SPOTLIGHT
                </span>
                <span className="spotlight-index">ACT {String(selectedAct.id).padStart(2, '0')} / 18</span>
              </div>

              <div className="spotlight-body">
                <span className="spotlight-time mono">{selectedAct.time}</span>
                <h3 className="spotlight-title">{selectedAct.performer}</h3>
                <div className="spotlight-tags">
                  <span className="spotlight-tag mono">{selectedAct.programme}</span>
                  <span className="spotlight-venue-tag mono">MAIN STAGE</span>
                </div>
              </div>

              <div className="spotlight-progress">
                <div
                  className="spotlight-progress-fill"
                  style={{ width: `${(selectedAct.id / performances.length) * 100}%` }}
                />
              </div>

              <div className="spotlight-footer">
                <div className="spotlight-count mono">
                  <span>TIMELINE PROGRESS</span>
                  <strong>{Math.round((selectedAct.id / performances.length) * 100)}% COMPLETED</strong>
                </div>
                <div className="spotlight-nav mono">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={!hasPrev}
                    className="spotlight-nav-btn"
                    aria-label="Previous performance"
                  >
                    ← PREV
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!hasNext}
                    className="spotlight-nav-btn"
                    aria-label="Next performance"
                  >
                    NEXT →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lunch section-pad" aria-label="Lunch break">
          <span className="eyebrow">A MOMENT TO RESET</span><h2>LUNCH<br /><span>BREAK</span></h2><p className="lunch-time">{event.lunch}</p><span className="lunch-note mono">PAUSE / REFUEL / RETURN</span>
        </section>

        <section className="celebration section-pad" id="garba" aria-labelledby="celebration-title">
          <div className="celebration-top mono"><span>THE DAY TURNS TO DANCE</span><span>03 — EVENT HIGHLIGHT</span></div>
          <p className="eyebrow">EVERYONE ON THE FLOOR</p>
          <h2 id="celebration-title">DANDIYA,<br /><span className="celebration-garba">GARBA</span> <span>&</span> DJ</h2>
          <div className="celebration-bottom"><p className="celebration-time">{event.celebration}</p><p>All students, mentors and faculty members are cordially invited to join the celebration.</p><p className="concludes">The programme concludes at {event.end}.</p></div>
          <span className="celebration-asterisk" aria-hidden="true">✳</span>
        </section>

        <section className="schedule-section section-pad" id="schedule" aria-labelledby="schedule-title">
          <div className="section-label"><span className="eyebrow">04 — THE FLOW OF THE DAY</span><span className="label-rule" /></div>
          <div className="schedule-heading"><h2 id="schedule-title">EVENT<br /><span>SCHEDULE</span></h2><p>One day, unfolding<br />in rhythm.</p></div>
          <div className="timeline-scroll" role="region" aria-label="Event schedule timeline" tabIndex={0}><ol className="timeline">{schedule.map((step, index) => <ScheduleItem key={`${step.label}-${index}`} step={step} index={index} />)}</ol></div>
          <p className="timeline-hint mono">SCROLL TO FOLLOW THE DAY <span aria-hidden="true">→</span></p>
        </section>

        <section className="venue-section section-pad" id="venue" aria-labelledby="venue-title">
          <div className="section-label"><span className="eyebrow">05 — FIND YOUR WAY</span><span className="label-rule" /></div>
          <div className="venue-grid"><div><h2 id="venue-title">MEET US<br /><span>THERE.</span></h2><p className="venue-note">A day of culture, movement and shared celebration.</p></div><div className="venue-details"><span className="eyebrow">VENUE</span><ExternalLink href={event.venueUrl} className="venue-name">{event.venue}<span aria-hidden="true">↗</span></ExternalLink><div className="venue-detail-row"><div><span className="eyebrow">DATE</span><p>{event.date}</p></div><div><span className="eyebrow">EVENT START</span><p>{event.start}</p></div></div><ExternalLink href={event.venueUrl} className="map-link">VIEW VENUE ON MAPS <span aria-hidden="true">↗</span></ExternalLink></div></div>
        </section>

        <section className="community section-pad" aria-labelledby="contact-title">
          <div className="community-top"><span className="eyebrow">06 — PEOPLE WHO MAKE IT HAPPEN</span><span className="community-rule" /></div>
          <div className="community-grid"><div className="community-heads"><h2 id="contact-title">CONTACT<br /><span>US</span></h2><div className="contacts-list">{contacts.map((contact) => <div className="contact-row" key={contact.name}><strong>{contact.name}</strong><a href={`tel:${contact.tel}`}>{contact.phone}</a></div>)}</div></div>
            <div className="community-connect"><div className="connect-block"><span className="eyebrow">NIAT MANGALORE</span><h3>MEDIA</h3><p className="connect-caption">FOLLOW US ON INSTAGRAM</p><ExternalLink href={event.instagramUrl} className="social-link">@niatmangalore.media <span aria-hidden="true">↗</span></ExternalLink></div><div className="connect-block venue-connect"><span className="eyebrow">VISIT THE VENUE</span><ExternalLink href={event.venueUrl} className="connect-venue">{event.venue} <span aria-hidden="true">↗</span></ExternalLink><ExternalLink href={event.venueUrl} className="footer-map-link">VIEW VENUE ON MAPS <span aria-hidden="true">↗</span></ExternalLink></div></div>
          </div>
          <div className="community-foot mono"><span>MANGALURU / 2026</span><span>IN COMMUNITY, WE CELEBRATE.</span></div>
        </section>
      </main>

      <footer className="site-footer section-pad"><a href="#home" className="footer-name">NAITRA NAVARATRI 3.0 <span>— GARBA & DANDIYA</span></a><p>{event.tagline}</p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </>
  )
}

export default App
