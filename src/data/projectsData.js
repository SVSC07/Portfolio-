export const projectsData = {
  recruitments: {
    id: 'recruitments',
    title: "Recruitments '26",
    bannerSrc: "/assets/recruitments_banner.png",
    headline: "Redesigning Recruitment: From Static Form to Guided Journey",
    summary: "A recruitment platform for GDG JSSATEN that replaces a one-time form with a guided, multi-round journey, visible progress, domain-specific assessments, and built-in help.",
    buttonText: "Visit Figma Link",
    problem: {
      intro: "GDG JSSATEN runs its yearly recruitment drive across five domains — Design, Programming, Web Development, App Development, and Machine Learning through a multi-round process:",
      processFlow: "Registration → Task Round → Aptitude Round → Interview Round → Final Results",
      bullets: [
        "Candidates registered without knowing what came next, how long each round would take, or which domain-specific criteria they'd be judged on.",
        "Task submissions, aptitude tests, and interview scheduling lived in disconnected tools (forms, spreadsheets, WhatsApp), so there was no single place a candidate could check \"where am I in the process right now.\"",
        "Login was a recurring drop-off point — candidates who registered with email sometimes tried to return via phone, or vice versa, and hit dead ends.",
        "Every domain was treated identically, even though a Design brief, a Programming aptitude test, and a coding round need very different interfaces to feel fair and clear."
      ],
      outro: "The process worked, but it asked candidates to trust a black box — apply, then wait, with no visibility until results."
    },
    goal: "Design a recruitment web app that makes the entire funnel visible and self-serve: a candidate should be able to register, see exactly which round they're on, complete that round inside the platform, and check their status at any time — without needing to ask a coordinator.",
    process: [
      {
        title: "1. Mapping the Existing Funnel",
        content: "Before designing anything, I broke the recruitment drive down into its actual stages — Registration, Task Round, Aptitude Round, Interview Round, Final Results and mapped how a candidate would move through each one, plus the branching auth paths (register/login, by email or phone). This became the backbone for every screen that followed."
      },
      {
        title: "2. Designing the Front Door",
        content: "The landing page needed to do two jobs at once: sell the opportunity (domains, timeline, \"why join\") and set expectations for the process itself. I built a Journey Steps section directly into the landing page five numbered stages with dates so the funnel is transparent before a candidate even registers."
      },
      {
        title: "3. Building a Flexible Auth System",
        content: "Rather than forcing one entry path, I designed four parallel flows — register with email, register with phone, login with email, login with phone plus Google OAuth as a shortcut. Each flow was worked through screen-by-screen (input → verification → confirmation) so a candidate could recover gracefully regardless of which path they started on."
      },
      {
        title: "4. Turning the Dashboard into a Status Tracker",
        content: "This was the core shift. Instead of a generic homepage after login, the dashboard shows the candidate's three live rounds as cards — Task Round, Aptitude Quiz, Personal Interview each with a countdown, a clear CTA and status. A candidate opens the dashboard and immediately knows what's next and how much time they have."
      },
      {
        title: "5. Designing Round-Specific Interfaces",
        content: "Each round needed its own interface, not a generic form:",
        subBullets: [
          "Task Round: a brief with judgement criteria and \"brownie points\" laid out explicitly, plus a submission-link field built for open-ended domain briefs (e.g., a frontend clone or backend CRUD task).",
          "Aptitude Round: a timed, domain-specific quiz with a guidelines screen up front (time limit, question count, fullscreen rule) and a question-navigator sidebar showing answered / marked / unanswered state modeled on familiar exam-platform patterns so it feels trustworthy under time pressure.",
          "Coding Round: for technical domains, an in-browser code editor (problem description, language selector, run/submit, live test-case results) so candidates can be assessed without leaving the platform."
        ]
      },
      {
        title: "6. Adding a Safety Net",
        content: "I designed Zephyr, an in-platform AI helper accessible from every screen (\"I have a doubt\"), plus a notifications panel so candidates aren't stuck if something's unclear or they miss an update, without needing a human coordinator on standby."
      }
    ],
    solution: [
      "Makes the five-round journey visible from the landing page onward",
      "Supports flexible, resilient sign-up and login across email and phone",
      "Replaces a static homepage with a live status dashboard for each candidate",
      "Gives every round - task, aptitude, coding its own purpose-built interface",
      "Backs candidates with an always-available help layer (Zephyr + notifications)"
    ],
    outcome: "The redesign gave GDG JSSATEN's recruitment drive a consistent, branded experience end-to-end from the first landing page visit to final results replacing a process that previously lived across disconnected forms and manual updates. Candidates now have one place to register, track, and complete every round, and the domain-specific round interfaces (quiz, coding, task) let the platform assess Design, Programming, Web Dev, App Dev, and ML applicants fairly, on their own terms, in the same system.",
    keyLearnings: [
      "Visibility reduces anxiety - A candidate who can see \"Round 2 of 5, starts in 3h 20m\" trusts the process more than one refreshing their email for updates.",
      "One process, five different rounds - Treating every domain's assessment as an identical form would have made the platform feel generic. Building distinct interfaces for task, quiz, and code rounds made each one feel legitimate.",
      "Auth flexibility matters more than it seems - Designing all four register/login paths (not just the \"main\" one) closed off a quiet but real source of drop-off.",
      "A help layer isn't a nice-to-have at scale - With hundreds of candidates and a small organizing team, Zephyr and notifications carry support load the team can't cover manually."
    ],
    conclusion: "This project pushed me to think about recruitment not as a form to fill out, but as a multi-step relationship between a candidate and an organization - one where clarity at every stage is the difference between someone finishing the process or dropping off silently. Redesigning GDG JSSATEN's recruitment platform meant designing for that entire arc, not just a prettier landing page."
  },
  'website-revamp': {
    id: 'website-revamp',
    title: "Website Revamp '26",
    bannerSrc: "/assets/website_revamp_banner.png",
    mockupSrc: "/assets/website_revamp_mockup.png",
    headline: "A UX Audit of GDG JSSATEN's Website: Navigation, Content, and Trust",
    summary: "The official website for Google Developer Group, JSS Academy of Technical Education rebuilt from a stale, half-populated directory into a current, browsable record of who the community is and what it's building.",
    buttonText: "Visit Website",
    buttonLink: "https://gdgjss.in",
    problem: {
      intro: "GDG JSSATEN's old website was the first thing a student, prospective member, or alumnus would see, and it was quietly undermining the community it represented:",
      bullets: [
        "Team and Alumni pages had large numbers of empty profile photo slots, breaking the scanning rhythm of the grid.",
        "Entries were just a name and a one-line role no bio, no LinkedIn, no GitHub to click through to.",
        "The site still said \"GDSC,\" a name Google had already retired, and the footer read \"© 2021\" years stale.",
        "The homepage described activity in the abstract but showed no actual recent events or proof the club was active.",
        "The \"Let's Connect\" section listed four platforms as equal options, making a first-time visitor choose between Slack, Discord, Telegram, and email before they'd even decided to join.",
        "40+ people listed as one long wall of cards, with no way to scan by domain."
      ],
      outro: "The layout and visual language were fine — the site had simply stopped being maintained as a living document of the community."
    },
    goal: "Rebuild the site into an up-to-date, self-explanatory front door: every profile complete enough to act on, activity visible without digging, and a large roster scannable by domain instead of read end to end.",
    process: [
      {
        title: "1. Auditing the Old Site",
        subBullets: [
          "Went page by page through Home, Team, Projects, Alumni on the live old site",
          "Catalogued exactly where it broke down: missing photos, dead-end names, stale branding, no proof of activity"
        ]
      },
      {
        title: "2. Fixing the Basics First",
        subBullets: [
          "Corrected \"GDSC\" → GDG everywhere (nav, hero, footer), matching Google's actual rebrand",
          "Tied the footer year to the current year instead of leaving it to go stale again"
        ]
      },
      {
        title: "3. Making the Homepage Prove the Club Is Active",
        subBullets: [
          "Added a real Events showcase to the landing page with actual recent events and photography",
          "Shifted the homepage's job from describing activity to evidencing it"
        ]
      },
      {
        title: "4. Collapsing the Join Decision",
        subBullets: [
          "Replaced four equally-weighted platform blocks with one primary \"Join Us\" action",
          "Secondary channels still reachable, but no longer competing for the same first decision"
        ]
      },
      {
        title: "5. Rebuilding Every Card as a Complete, Linkable Unit",
        subBullets: [
          "Every Team/Alumni entry now has a real photo, a personal tagline, and links out (LinkedIn, GitHub, portfolio)",
          "Every Project links to a working repository, not just a description"
        ]
      },
      {
        title: "6. Making the Roster Scannable",
        subBullets: [
          "Added consistent domain tags (Programming, Design, App Dev, ML, Web Dev) across Team, Alumni, and Events",
          "Let a visitor narrow 40+ people down to the ones relevant to them"
        ]
      }
    ],
    solution: [
      "Uses the community's correct, current branding everywhere",
      "Opens with real, recent proof of activity instead of only descriptive copy",
      "Narrows the homepage's \"join us\" decision to one primary path",
      "Gives every person and project a working link out, not a dead end",
      "Lets the full roster be scanned by domain, not just scrolled"
    ],
    outcomeBullets: [
      "Trust restored: no more empty photo slots or outdated branding signaling neglect",
      "Every profile actionable: visitors can now actually reach the people they're looking at",
      "Roster scannable, not just complete: domain tags turned a 40+ person wall into something a visitor can navigate"
    ],
    keyLearnings: [
      "A design system can't fix missing content. The biggest gap was maintenance debt, not layout.",
      "Every listed name is a promise of a next step. A name with no link costs trust the moment someone tries to act on it.",
      "Fewer, better-weighted choices move more people to act. Four join options wasn't freedom, it was friction.",
      "Proof beats description. Showing the last five events works harder than any \"we're active!\" copy."
    ],
    conclusion: "This project was less about a new visual language and more about treating the website as a living record that has to stay true to the community behind it. Redesigning it meant finding where that promise had quietly broken and rebuilding the structure so staying current is the default, not something the next redesign has to fix again."
  }
}
