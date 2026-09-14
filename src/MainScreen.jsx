import React, { useEffect, useMemo, useState } from 'react'

import weddingMusic from './assets/shaadi.mp3'
const WEDDING_CONFIG = {
  couple: {
    groom: 'Pankaj',
    bride: 'Mamta',
    dateISO: '2026-12-10T16:00:00',

    groomPhoto:
      'https://instagram.fdel32-1.fna.fbcdn.net/v/t51.82787-15/658085983_18430393987184618_2240961019998312271_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&_nc_map=urlgen_bucketless&ig_cache_key=Mzg2MzMyNDI2NjY0NTc4NTMyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=e4kf0M__XlEQ7kNvwGigqMs&_nc_oc=AdpTEW2s54YX7iqTT1CFm41nyDZAzDxyipHtFq9cKt1sMik8QSOsF6IoLfSUeOR734o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fdel32-1.fna&_nc_gid=xaGWT15-svcQxO5LBElYuw&_nc_ss=7a22e&oh=00_AQJh2hreT8U5UvY-CR-ltq3CUF_0OJUem08a1_o0U7ZCFw&oe=6AADD79E',

    bridePhoto:
      'https://instagram.fdel32-1.fna.fbcdn.net/v/t51.82787-15/804646371_18106151198607188_4977080354097991405_n.webp?_nc_cat=105&_nc_map=urlgen_bucketless&ig_cache_key=Mzk4MzYwMjU2MjI0MjUxNTYwMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Bx9oP5qIyzUQ7kNvwED26HK&_nc_oc=AdqpUmbcUEW8DzxiKDyAgVVl2lJ5Rbe8iCkUW1URoBm23IUBYw_yH2Iz_5HqKJEnU9w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fdel32-1.fna&_nc_gid=zjCGE4DJtyqCgJkvG7vXZA&_nc_ss=7a22e&oh=00_AQL8nVTLonu4givarHDotyQ9fQiqmHGkb3i0o43bt7FtQQ&oe=6AADCC41',

    groomTitle:
      'Son of Mrs. Geeta Devi & Mr. Yogender Sharma',

    brideTitle:
      'Daughter of Mrs. Lalita Devi & Mr. Surendra Sharma',

    groomBio:
      '',

    brideBio:
      ''
  },

  hero: {
    invitation: 'ROYAL WEDDING INVITATION',
    date: '10 • 12 • 2026',
    location: 'Noida, Delhi NCR',
    welcome: 'Padhaaro Mhare Desh',
    ganeshText: '|| श्री गणेशाय नमः ||',

    monogramGroom: 'P',
    monogramBride: `‎ M`,

    wedsText: 'weds'
  },

  intro: {
    title: 'Together Under the Stars',

    message:
      '"Mangalam Bhagwan Vishnu, Mangalam Garunadhwaja,<br/>Mangalam Pundarikaksha, Mangalakarotari."',

    body:
      'With the divine blessings of Almighty, our ancestors, and beloved parents, we cordially invite you to grace the auspicious royal union of our children as they embark on the holy journey of <strong>Saptapadi (The Seven Vows)</strong>.'
  },

  sections: {
    coupleTag: 'Shubh Vivah',
    coupleTitle: 'The Groom & Bride',

    eventsTag: 'Utsav',
    eventsTitle: 'Wedding Rituals & Celebrations',

    timelineTag: 'Karyakram',
    timelineTitle: 'Auspicious Sequence',

    venueTag: 'Royal Destination',

    countdownTag: 'Auspicious Muhurat',
    countdownTitle: 'Countdown to the Pheras',

    galleryTag: 'Glimpses',
    galleryTitle: 'Royal Moments',

    familyTag: 'Aashirvaad',
    familyTitle: 'With the Blessings of Our Families',

    rsvpTag: 'Nimantran',
    rsvpTitle: 'RSVP & Attendance',

    finalTitle: 'Darshan Ki Abhilasha Hai',
    finalSubtitle: 'We eagerly await your gracious presence!',
    finalCredit: 'Designed By Groom Brother: Dhruv Sharma'
  },

  venue: {
    name: 'Aggarwal Dharmshala, Chhatarpur, New Delhi',

    address:
      '100 feet Rd, Chhatarpur, New Delhi 110074',

    image:
      'https://images.jdmagicbox.com/v2/comp/delhi/u6/011pxx11.xx11.171127233224.h8u6/catalogue/aggarwal-dharamshala-chhatarpur-enclave-delhi-banquet-halls-VwAOheDKri.jpg',
      
    mapUrl: 'https://maps.app.goo.gl/hak18oSHVe3Ud3Wg6',

    directionsText: 'Get Venue Directions',

    alt: 'Aggarwal Dharmshala, Chhatarpur, New Delhi'
  },

  families: [
    {
      title: 'Groom Family',
      parents: 'Mrs. Geeta Devi & Mr. Yogender Sharma',
      relatives: 'Compliments From: Sharma Family'
    },

    {
      title: 'Bride Family',
      parents: 'Mrs. Lalita Devi & Mr. Surendra Sharma',
      relatives: 'Compliments From: Bride Family'
    }
  ],

  // rsvp: {
  //   deadline: 'November 15, 2026',

  //   intro:
  //     'Kindly respond by {deadline} to help us make arrangements for your comfortable stay.',

  //   nameLabel: 'Your Honorable Name *',

  //   namePlaceholder:
  //     'e.g. Aditi & Rahul Verma',

  //   nameError:
  //     'Please enter your name.',

  //   guestLabel:
  //     'Number of Guests *',

  //   attendanceLabel:
  //     'Will You Grace the Occasion? *',

  //   messageLabel:
  //     'Blessings & Wishes for Couple',

  //   messagePlaceholder:
  //     'Send your love, blessings, or travel notes...',

  //   submitText:
  //     'Send Response',

  //   successMessage:
  //     'Dhanyawaad! Your RSVP response has been safely recorded.'
  // },

  final: {
    date: '10 • 12 • 2026',

    footerDate:
      '10 DECEMBER 2026 • NOIDA, DELHI NCR',

    footerMonogramSeparator:
      '||',

    heart:
      '♥'
  },

  events: [
    {
      title: 'Tikal Ceremony',
      date: 'DECEMBER 6, 2026',
      time: '09:00 PM ONWARDS',
      venue: 'Sharma Residence, Noida',

      desc:
        'An evening of glitz, dance performances, live royal music, and celebration.',

      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M9 18V5l12-2v13M9 19l12-2" />
        </svg>
      )
    },
    {
      title: 'Haldi',
      date: 'DECEMBER 9, 2026',
      time: '09:00 AM ONWARDS',
      venue: 'Sharma Residence, Noida',

      desc:
        'Auspicious prayers to Lord Ganesha followed by a cheerful splash of yellow turmeric blessings.',

      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" />
        </svg>
      )
    },

    {
      title: 'Mehendi Ki Raat',
      date: 'DECEMBER 9, 2026',
      time: '04:00 PM ONWARDS',
      venue: 'Sharma Residence, Noida',

      desc:
        'Intricate bridal henna, Rajasthani folk music, and vibrant celebrations with high tea.',

      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
        </svg>
      )
    },

    {
      title: 'Shubh Pheras (Wedding Ceremony)',
      date: 'DECEMBER 10, 2026',
      time: '04:00 PM ONWARDS',
      venue: 'Aggarwal Dharmshala, Chhatarpur, New Delhi',

      desc:
        'The sacred Seven Steps under the sunset sky as two families unite as one.',

      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2l-2 4 2 3 2-3-2-4zm0 7c-4 0-7 3-7 7 0 3 3 6 7 6s7-3 7-6c0-4-3-7-7-7z" />
        </svg>
      )
    },

    {
      title: 'Grand Reception',
      date: 'DECEMBER 12, 2026',
      time: '07:00 PM ONWARDS',
      venue: 'Sharma Residence, Noida',

      desc:
        'A royal dinner banquet, live orchestra, and celebrating the newlyweds under the stars.',

      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  ],

timeline: [
    {
      time: '03:30 PM',
      title: 'Baraat Aagman & Procession',
      desc:
        'The Groom’s grand procession with traditional dhol, dancing, and royal entry to meet the Bride’s family.'
    },

    {
      time: '04:30 PM',
      title: 'Varmala Ceremony',
      desc:
        'Exchange of floral garlands as the Groom greets the Bride at the lakefront stage.'
    },

    {
      time: '05:15 PM',
      title: 'Pheras & Wedding Rituals',
      desc:
        'Sacred seven vows around the holy fire as the Groom accepts the Bride into his family.'
    },

    {
      time: '08:00 PM',
      title: 'Royal Bhoj (Feast)',
      desc:
        'Enjoying an authentic Bihar royal dinner with family and friends.'
    }
  ],

  gallery: [
    {
      url:
        '/images/img1.jpg',
      caption: 'Golden Traditions'
    },

    {
      url:
        '/images/img2.jpg',
      caption: 'The Royal Entrance'
    },

    {
      url:
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80',
      caption: 'Sacred Promises'
    },

    {
      url:
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
      caption: 'Floral Splendor'
    },

    {
      url:
        '/images/img4.jpg',
      caption: 'Joyful Celebrations'
    },

    {
      url:
        '/images/img3.jpg',
      caption: 'Eternal Union'
    }
  ]
}


function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.scroll-reveal')

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('revealed'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.15 }
    )

    reveals.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  })
}


function Petals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        size: Math.random() * 12 + 10,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 6 + 8
      })),
    []
  )

  return (
    <div id="petals-container" aria-hidden="true">
      {petals.map(p => (
        <div
          key={p.id}
          className="petal"
          style={{
            width: p.size,
            height: p.size * 1.5,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }}
        />
      ))}
    </div>
  )
}


function AudioControl({ audioRef, playing, setPlaying }) {
  const toggleMusic = async () => {
    if (!audioRef.current) return

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play()
        setPlaying(true)
      } else {
        audioRef.current.pause()
        setPlaying(false)
      }
    } catch (error) {
      console.error('Unable to play wedding music:', error)
      setPlaying(false)
    }
  }

  return (
    <div
      className="audio-control"
      role="button"
      tabIndex="0"
      aria-label="Toggle background music"
      onClick={toggleMusic}
    >
      <svg
        className="icon-music"
        viewBox="0 0 24 24"
      >
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>

      <span className="audio-label">
        {playing ? 'Music On' : 'Music Off'}
      </span>
    </div>
  )
}


function Monogram() {
  return (
    <svg
      className="monogram-svg"
      viewBox="0 0 140 140"
      width="160"
      height="140"
    >
      <circle
        cx="80"
        cy="70"
        r="66"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeDasharray="6 3"
      />

      <circle
        cx="80"
        cy="70"
        r="58"
        fill="none"
        stroke="#E5C158"
        strokeWidth=".8"
      />

      <path
        d="M70 12 C60 30 80 30 70 12 Z"
        fill="#D4AF37"
      />

      <text
        x="42"
        y="78"
        className="monogram-text"
      >
        {WEDDING_CONFIG.hero.monogramGroom}
      </text>

      <text
        x="68"
        y="75"
        className="monogram-amp"
      >
        &amp;
      </text>

      <text
        x="80"
        y="78"
        className="monogram-text"
      >
        {WEDDING_CONFIG.hero.monogramBride}
      </text>
    </svg>
  )
}


function Ornament({ rotate = false }) {
  return (
    <div className="svg-divider">
      <svg
        viewBox="0 0 200 40"
        className={`ornament-svg ${rotate ? 'rotate-180' : ''}`}
      >
        <path
          d="M100 5 C80 25 60 10 30 20 C10 25 0 35 0 35 L200 35 C200 35 190 25 170 20 C140 10 120 25 100 5 Z"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1"
        />

        <circle
          cx="100"
          cy="20"
          r="5"
          fill="#C5283D"
        />
      </svg>
    </div>
  )
}


function Mandala({ hero = false }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={hero ? 'rotating-mandala' : ''}
      width={hero ? 100 : 70}
      height={hero ? 100 : 70}
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="#D4AF37"
        strokeWidth=".8"
      />

      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="#E5C158"
        strokeWidth=".8"
        strokeDasharray={hero ? '2 2' : '3 3'}
      />

      <path
        d="M50 0 L50 100 M0 50 L100 50"
        stroke="#D4AF37"
        strokeWidth={hero ? '.3' : '.5'}
      />

      {hero && (
        <path
          d="M15 15 L85 85 M15 85 L85 15"
          stroke="#D4AF37"
          strokeWidth=".3"
        />
      )}
    </svg>
  )
}


function Countdown({ dateISO }) {
  const [left, setLeft] = useState(0)

  useEffect(() => {
    const target = new Date(dateISO).getTime()

    const update = () => {
      setLeft(Math.max(0, target - Date.now()))
    }

    update()

    const id = setInterval(update, 1000)

    return () => clearInterval(id)
  }, [dateISO])

  const days = Math.floor(left / 86400000)
  const hours = Math.floor(
    (left % 86400000) / 3600000
  )
  const minutes = Math.floor(
    (left % 3600000) / 60000
  )
  const seconds = Math.floor(
    (left % 60000) / 1000
  )

  return (
    <div className="countdown-grid scroll-reveal">
      {[
        ['Days', days],
        ['Hours', hours],
        ['Minutes', minutes],
        ['Seconds', seconds]
      ].map(([label, val]) => (
        <div
          className="countdown-card"
          key={label}
        >
          <span className="countdown-number">
            {String(val).padStart(2, '0')}
          </span>

          <span className="countdown-label">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}


function Lightbox({
  gallery,
  index,
  onClose,
  onChange
}) {
  if (index === null) return null

  const data = gallery[index]

  return (
    <div
      className="lightbox active"
      aria-hidden="false"
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close Lightbox"
      >
        &times;
      </button>

      <button
        className="lightbox-nav prev"
        onClick={() =>
          onChange(
            (index - 1 + gallery.length) %
              gallery.length
          )
        }
        aria-label="Previous Image"
      >
        &#10094;
      </button>

      <button
        className="lightbox-nav next"
        onClick={() =>
          onChange(
            (index + 1) % gallery.length
          )
        }
        aria-label="Next Image"
      >
        &#10095;
      </button>

      <div className="lightbox-content">
        <img
          src={data.url}
          alt={data.caption}
        />

        <p className="lightbox-caption">
          {data.caption}
        </p>
      </div>
    </div>
  )
}


export const MainScreen = ({ audioRef, playing, setPlaying }) => {
  const [lightboxIndex, setLightboxIndex] =
    useState(null)

  const [name, setName] = useState('')

  const [feedback, setFeedback] =
    useState('')

  const [hasError, setHasError] =
    useState(false)

  useScrollReveal()


  const submit = e => {
    e.preventDefault()

    if (!name.trim()) {
      setHasError(true)
      return
    }

    setHasError(false)

    setFeedback(
      WEDDING_CONFIG.rsvp.successMessage
    )

    setName('')

    e.currentTarget.reset()
  }


  // const rsvpIntro =
  //   WEDDING_CONFIG.rsvp.intro.replace(
  //     '{deadline}',
  //     WEDDING_CONFIG.rsvp.deadline
  //   )


  return (
    <>
      <Petals />

      <AudioControl audioRef={audioRef} playing={playing} setPlaying={setPlaying} />


      {/* HERO */}

      <header
        className="hero-section"
        id="hero"
      >
        <div className="hero-bg-parallax" />

        <div className="hero-overlay" />

        <div className="royal-arch-overlay" />


        <div className="hero-content">

          <p className="ganesh-text fade-in-up">
            {WEDDING_CONFIG.hero.ganeshText}
          </p>


          <div className="monogram-wrapper fade-in-up delay-1">
            <Monogram />
          </div>


          <p className="hero-subtitle fade-in-up delay-2">
            {WEDDING_CONFIG.hero.invitation}
          </p>


          <h1 className="hero-title fade-in-up delay-3">

            <span className="groom-name">
              {WEDDING_CONFIG.couple.groom}
            </span>

            <span className="ampersand">
              {WEDDING_CONFIG.hero.wedsText}
            </span>

            <span className="bride-name">
              {WEDDING_CONFIG.couple.bride}
            </span>

          </h1>


          <div className="garland-divider fade-in-up delay-4">

            <svg
              viewBox="0 0 200 20"
              width="200"
              height="20"
            >

              {[
                [30, 6, '#FF9933'],
                [50, 8, '#FFBF00'],
                [70, 6, '#FF9933'],
                [90, 10, '#E5C158'],
                [100, 12, '#D4AF37'],
                [110, 10, '#E5C158'],
                [130, 6, '#FF9933'],
                [150, 8, '#FFBF00'],
                [170, 6, '#FF9933']
              ].map(
                ([cx, r, fill]) => (
                  <circle
                    key={cx}
                    cx={cx}
                    cy="10"
                    r={r}
                    fill={fill}
                  />
                )
              )}

            </svg>

          </div>


          <p className="hero-date fade-in-up delay-4">
            {WEDDING_CONFIG.hero.date}
          </p>


          <p className="hero-location fade-in-up delay-5">
            {WEDDING_CONFIG.hero.location}
          </p>


          <div className="scroll-indicator fade-in-up delay-5">

            <a href="#intro">

              <span className="scroll-text">
                {WEDDING_CONFIG.hero.welcome}
              </span>

              <svg
                className="scroll-arrow"
                viewBox="0 0 24 24"
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
              </svg>

            </a>

          </div>

        </div>

      </header>


      {/* INTRO */}

      <section
        className="section intro-section"
        id="intro"
      >

        <div className="container container-narrow text-center scroll-reveal">

          <Ornament />

          <h2 className="section-title">
            {WEDDING_CONFIG.intro.title}
          </h2>

          <p
            className="intro-message"
            dangerouslySetInnerHTML={{
              __html:
                WEDDING_CONFIG.intro.message
            }}
          />

          <p
            className="intro-body"
            dangerouslySetInnerHTML={{
              __html:
                WEDDING_CONFIG.intro.body
            }}
          />

          <Ornament rotate />

        </div>

      </section>


      {/* COUPLE */}

      <section
        className="section couple-section"
        id="couple"
      >

        <div className="container">

          <div className="section-header text-center scroll-reveal">

            <span className="section-tag">
              {WEDDING_CONFIG.sections.coupleTag}
            </span>

            <h2 className="section-title">
              {WEDDING_CONFIG.sections.coupleTitle}
            </h2>

          </div>


          <div className="couple-grid">

            {/* GROOM */}

            <div className="couple-card scroll-reveal left">

              <div className="photo-frame-wrapper">

                <div className="circular-frame royal-border">

                  <img
                    src={
                      WEDDING_CONFIG.couple.groomPhoto
                    }
                    alt={`${WEDDING_CONFIG.couple.groom} - Groom`}
                    loading="lazy"
                  />

                </div>

              </div>


              <h3 className="person-name">
                {WEDDING_CONFIG.couple.groom} Sharma
              </h3>


              <p
                className="person-title"
                dangerouslySetInnerHTML={{
                  __html:
                    WEDDING_CONFIG.couple.groomTitle
                }}
              />


              <p className="person-bio">
                {WEDDING_CONFIG.couple.groomBio}
              </p>

            </div>


            {/* CENTER */}

            <div className="couple-center-symbol scroll-reveal">

              <div className="center-mandala-badge">
                &amp;
              </div>

            </div>


            {/* BRIDE */}

            <div className="couple-card scroll-reveal right">

              <div className="photo-frame-wrapper">

                <div className="circular-frame royal-border">

                  <img
                    src={
                      WEDDING_CONFIG.couple.bridePhoto
                    }
                    alt={`${WEDDING_CONFIG.couple.bride} - Bride`}
                    loading="lazy"
                  />

                </div>

              </div>


              <h3 className="person-name">
                {WEDDING_CONFIG.couple.bride} Sharma
              </h3>


              <p
                className="person-title"
                dangerouslySetInnerHTML={{
                  __html:
                    WEDDING_CONFIG.couple.brideTitle
                }}
              />


              <p className="person-bio">
                {WEDDING_CONFIG.couple.brideBio}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* EVENTS */}

      <section
        className="section events-section"
        id="events"
      >

        <div className="container">

          <div className="section-header text-center scroll-reveal">

            <span className="section-tag">
              {WEDDING_CONFIG.sections.eventsTag}
            </span>

            <h2 className="section-title">
              {WEDDING_CONFIG.sections.eventsTitle}
            </h2>

          </div>


          <div className="events-grid">

            {WEDDING_CONFIG.events.map(event => (

              <div
                className="event-card scroll-reveal"
                key={event.title}
              >

                <div className="event-icon-wrapper">
                  {event.icon}
                </div>

                <h3 className="event-title">
                  {event.title}
                </h3>

                <div className="event-date-time">
                  {event.date} • {event.time}
                </div>

                <div className="event-venue">
                  {event.venue}
                </div>

                <p className="event-desc">
                  {event.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* TIMELINE */}

      <section
        className="section timeline-section"
        id="timeline"
      >

        <div className="container">

          <div className="section-header text-center scroll-reveal">

            <span className="section-tag">
              {WEDDING_CONFIG.sections.timelineTag}
            </span>

            <h2 className="section-title">
              {WEDDING_CONFIG.sections.timelineTitle}
            </h2>

          </div>


          <div className="timeline-wrapper">

            <div className="timeline-line-bg" />

            <div className="timeline-line-progress" />

            <div className="timeline-events-list">

              {WEDDING_CONFIG.timeline.map(item => (

                <div
                  className="timeline-item scroll-reveal"
                  key={item.time}
                >

                  <div className="timeline-dot" />

                  <div className="timeline-content">

                    <div className="timeline-time">
                      {item.time}
                    </div>

                    <h3 className="timeline-title">
                      {item.title}
                    </h3>

                    <p className="event-desc">
                      {item.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* VENUE */}

      <section
        className="section venue-section"
        id="venue"
      >

        <div className="container">

          <div className="venue-card scroll-reveal">

            <div className="venue-image-container">

              <img
                src={WEDDING_CONFIG.venue.image}
                alt={WEDDING_CONFIG.venue.alt}
                loading="lazy"
              />

              <div className="venue-image-overlay" />

            </div>


            <div className="venue-details">

              <div className="venue-icon">

                <svg
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  fill="#D4AF37"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>

              </div>


              <span className="section-tag">
                {WEDDING_CONFIG.sections.venueTag}
              </span>


              <h3 className="venue-name">
                {WEDDING_CONFIG.venue.name}
              </h3>


              <p className="venue-address">
                {WEDDING_CONFIG.venue.address}
              </p>


              <a
                href={WEDDING_CONFIG.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-gold"
              >
                <span>
                  {WEDDING_CONFIG.venue.directionsText}
                </span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* COUNTDOWN */}

      <section
        className="section countdown-section"
        id="countdown"
      >

        <div className="container container-narrow text-center">

          <div className="section-header scroll-reveal">

            <span className="section-tag">
              {WEDDING_CONFIG.sections.countdownTag}
            </span>

            <h2 className="section-title">
              {WEDDING_CONFIG.sections.countdownTitle}
            </h2>

          </div>


          <Countdown
            dateISO={
              WEDDING_CONFIG.couple.dateISO
            }
          />

        </div>

      </section>


      {/* GALLERY */}

      <section
        className="section gallery-section"
        id="gallery"
      >

        <div className="container">

          <div className="section-header text-center scroll-reveal">

            <span className="section-tag">
              {WEDDING_CONFIG.sections.galleryTag}
            </span>

            <h2 className="section-title">
              {WEDDING_CONFIG.sections.galleryTitle}
            </h2>

          </div>


          <div className="gallery-grid">

            {WEDDING_CONFIG.gallery.map(
              (item, idx) => (

                <div
                  className="gallery-item scroll-reveal"
                  key={item.url}
                  onClick={() =>
                    setLightboxIndex(idx)
                  }
                >

                  <img
                    src={item.url}
                    alt={item.caption}
                    loading="lazy"
                  />

                  <div className="gallery-overlay">

                    <span className="gallery-caption">
                      {item.caption}
                    </span>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* FAMILY */}

      <section
        className="section family-section"
        id="family"
      >

        <div className="container">

          <div className="section-header text-center scroll-reveal">

            <span className="section-tag">
              {WEDDING_CONFIG.sections.familyTag}
            </span>

            <h2 className="section-title">
              {WEDDING_CONFIG.sections.familyTitle}
            </h2>

          </div>


          <div className="family-grid text-center">

            {WEDDING_CONFIG.families.map(
              (family, i) => (

                <div
                  className={`family-card scroll-reveal ${
                    i ? 'right' : 'left'
                  }`}
                  key={family.title}
                >

                  <div className="mandala-icon">
                    <Mandala />
                  </div>

                  <h3 className="family-side-title">
                    {family.title}
                  </h3>

                  <p className="family-parents">
                    {family.parents}
                  </p>

                  <p className="family-relatives">
                    {family.relatives}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* RSVP

      <section
        className="section rsvp-section"
        id="rsvp"
      >

        <div className="container container-narrow">

          <div className="section-header text-center scroll-reveal">

            <span className="section-tag">
              {WEDDING_CONFIG.sections.rsvpTag}
            </span>

            <h2 className="section-title">
              {WEDDING_CONFIG.sections.rsvpTitle}
            </h2>

            <p className="rsvp-intro">
              {rsvpIntro}
            </p>

          </div>


          <form
            className="rsvp-form scroll-reveal"
            onSubmit={submit}
            noValidate
          >

            <div
              className={`form-group ${
                hasError ? 'has-error' : ''
              }`}
            >

              <label htmlFor="fullName">
                {WEDDING_CONFIG.rsvp.nameLabel}
              </label>

              <input
                type="text"
                id="fullName"
                className="form-input"
                placeholder={
                  WEDDING_CONFIG.rsvp.namePlaceholder
                }
                value={name}
                onChange={e => {
                  setName(e.target.value)
                  setHasError(false)
                }}
                required
              />

              <span className="error-msg">
                {WEDDING_CONFIG.rsvp.nameError}
              </span>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label htmlFor="guestCount">
                  {WEDDING_CONFIG.rsvp.guestLabel}
                </label>

                <select
                  id="guestCount"
                  className="form-input"
                  defaultValue="1"
                >
                  <option value="1">
                    1 Person
                  </option>

                  <option value="2">
                    2 Persons
                  </option>

                  <option value="3">
                    3 Persons
                  </option>

                  <option value="4">
                    4+ Family Members
                  </option>
                </select>

              </div>


              <div className="form-group">

                <label htmlFor="attendance">
                  {WEDDING_CONFIG.rsvp.attendanceLabel}
                </label>

                <select
                  id="attendance"
                  className="form-input"
                  defaultValue="yes"
                >
                  <option value="yes">
                    Joyfully Attending All Events
                  </option>

                  <option value="wedding_only">
                    Attending Main Wedding / Reception
                  </option>

                  <option value="no">
                    Regretfully Unable to Attend
                  </option>
                </select>

              </div>

            </div>


            <div className="form-group">

              <label htmlFor="message">
                {WEDDING_CONFIG.rsvp.messageLabel}
              </label>

              <textarea
                id="message"
                className="form-input form-textarea"
                rows="4"
                placeholder={
                  WEDDING_CONFIG.rsvp.messagePlaceholder
                }
              />

            </div>


            <button
              type="submit"
              className="btn btn-primary btn-block"
            >
              <span>
                {WEDDING_CONFIG.rsvp.submitText}
              </span>
            </button>


            {feedback && (
              <div className="form-feedback success">
                {feedback}
              </div>
            )}

          </form>

        </div>

      </section> */}


      {/* FINAL */}

      <section
        className="section final-section text-center"
      >

        <div className="container container-narrow scroll-reveal">

          <div className="mandala-hero">
            <Mandala hero />
          </div>


          <h2 className="final-title">
            {WEDDING_CONFIG.sections.finalTitle}
          </h2>


          <p className="final-subtitle">
            {WEDDING_CONFIG.sections.finalSubtitle}
          </p>


          <p className="final-names">

            {WEDDING_CONFIG.couple.groom.toUpperCase()}

            {' '}

            {WEDDING_CONFIG.final.heart}

            {' '}

            {WEDDING_CONFIG.couple.bride.toUpperCase()}

          </p>


          <p className="final-date">
            {WEDDING_CONFIG.final.date}
          </p>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="footer">

        <div className="container text-center">

          <div className="footer-monogram">

            {WEDDING_CONFIG.final.footerMonogramSeparator}

            {' '}

            {WEDDING_CONFIG.hero.monogramGroom}

            {' '}

            &amp;

            {' '}

            {WEDDING_CONFIG.hero.monogramBride}

            {' '}

            {WEDDING_CONFIG.final.footerMonogramSeparator}

          </div>


          <p className="footer-date">
            {WEDDING_CONFIG.final.footerDate}
          </p>


          <p className="footer-credit">
            {WEDDING_CONFIG.sections.finalCredit}
          </p>

        </div>

      </footer>


      {/* LIGHTBOX */}

      <Lightbox
        gallery={WEDDING_CONFIG.gallery}
        index={lightboxIndex}
        onClose={() =>
          setLightboxIndex(null)
        }
        onChange={setLightboxIndex}
      />

    </>
  )
}