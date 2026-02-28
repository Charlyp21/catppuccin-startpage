// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = frappe;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Mexico city",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "Japan",
      timezone: "Japan",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
      q: ["https://chat.qwen.ai/", "Qwen"],
    },
    default: "g",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://chat.qwen.ai/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Myself",
      background_url: "src/img/banners/banner_15.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "Protonmail",
              url: "https://proton.me",
              icon: "mail",
              icon_color: palette.peach,
            },
            {
              name: "Notion",
              url: "https://www.notion.so/NEURO-SYSTEM_V1-2f8e992875fd808b8277c6fc8955e529",
              icon: "brand-notion",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
            {
              name: "Notebook LM",
              url: "https://notebooklm.google.com/",
              icon: "notebook",
              icon_color: palette.mauve,
            }
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "BIDI UNAM",
              url: "https://www.bidi.unam.mx/",
              icon: "book-2",
              icon_color: palette.green,
            },
            {
              name: "Omnitools",
              url: "http://localhost:8080/",
              icon: "folder",
              icon_color: palette.peach,
            },
            {
              name: "куток",
              url: "https://kutok.io",
              icon: "border-radius",
              icon_color: palette.red,
            },
            {
              name: "ґрунт",
              url: "https://grnt.media",
              icon: "eye-bolt",
              icon_color: palette.blue,
            },
            {
              name: "village",
              url: "https://www.village.com.ua",
              icon: "home-2",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_16.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
            {
              name: "duckdb",
              url: "https://app.motherduck.com",
              icon: "file-type-sql",
              icon_color: palette.red,
            },
            {
              name: "collab",
              url: "https://colab.research.google.com",
              icon: "notebook",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "infiniteBacklog",
              url: "https://infinitebacklog.net",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
