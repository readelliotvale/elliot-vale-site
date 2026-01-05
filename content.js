// Edit ONLY the text inside quotes. No HTML knowledge needed.

window.SITE = {
  name: "Elliot Vale",
  initials: "EV",
  taglineShort: "Thriller / Police Procedural",
  heroKicker: "Winter-noir • Character-driven • High pressure",
  heroHeadline: "Where the cold isn’t the backdrop—it’s the pressure.",
  heroSubhead:
    "I write atmospheric thrillers and police procedurals with tight settings, moral friction, and characters forced to choose what they can live with.",

  // Books / WIP (Option C: both "Now Querying" + "WIP" tone)
  book: {
    title: "A Quiet Death",
    status: "Now Querying / WIP",
    meta: "Thriller / Police Procedural · Great Lakes noir",
    // You asked me to write this hook (1–2 sentences):
    blurb:
      "On Michigan’s Lake Huron shoreline, a death that should be straightforward is staged to look clean—until the lies beneath a respected community begin to surface. Detective Dana Whitlock follows the evidence into isolation, denial, and a rival mind willing to rewrite the truth at any cost.",
    buttons: [
      // Optional: you can add links later
      { label: "Newsletter (Coming Soon)", href: "#contact", primary: true },
      { label: "Contact", href: "#contact", primary: false }
    ],
    tags: ["Thriller", "Police Procedural", "Great Lakes", "Winter Noir"]
  },

  about: {
    title: "About",
    paragraphs: [
      "Elliot Vale writes winter-noir thrillers and police procedurals—stories where setting applies pressure and people fracture under it. The work leans grounded and character-forward, built on tension, motive, and the slow click of consequences.",
      "Expect contained atmospheres, sharp stakes, and moral dilemmas that don’t resolve cleanly. If you like investigations that feel personal—and antagonists who can pass for respectable—you’re in the right place."
    ],
    quickFacts: [
      { label: "Genres", value: "Thriller / Police Procedural" },
      { label: "Tone", value: "Atmospheric, grounded, high-tension" },
      { label: "Newsletter", value: "Coming soon" }
    ]
  },

  contact: {
    title: "Contact",
    email: "readelliotvale@gmail.com",
    // Contact form handler:
    // This is a placeholder. Later you'll replace it with your Formspree endpoint (easy).
    formAction: "",
    formNote:
      "Prefer a contact form? I can wire this to Formspree (recommended) in about 60 seconds—no backend needed.",
    socials: [
      { label: "Bluesky", href: "https://bsky.app/profile/readelliotvale.bsky.social" },
      { label: "X", href: "https://x.com/readelliotvale" }
      // Add more anytime:
      // { label: "Goodreads", href: "https://..." },
      // { label: "BookBub", href: "https://..." }
    ]
  }
};
