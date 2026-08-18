// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Mexico City",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "JAPAN",
      timezone: "Asia/Tokyo",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "g",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url:"src/img/banners/banner_15.gif",
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
              name: "ProtonMail",
              url: "https://mail.proton.me/u/1/",
              icon: "mail",
              icon_color: palette.peach,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
            {
              name: "Notion",
              url: "https://app.notion.com/p/Neuropilines-3b8e992875fd8064839bd9ad7df0d369",
              icon: "brand-notion",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "IA",
          links: [
            {
              name: "Gemini",
              url: "https://gemini.google.com/app?hl=es_419",
              icon: "sparkles",
              icon_color: palette.green,
            },
            {
              name: "NotebookLM",
              url: "https://notebooklm.google.com",
              icon: "notebook",
              icon_color: palette.peach,
            },
            {
              name: "Qwen",
              url: "https://chat.qwen.ai/",
              icon: "brand-alipay",
              icon_color: palette.red,
            },
            {
              name: "Deepseek",
              url: "https://chat.deepseek.com/",
              icon: "message-chatbot",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_17.gif",
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
              name: "Cisco Netacad",
              url: "https://www.netacad.com/",
              icon: "world",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "Freecodecamp",
              url: "https://www.freecodecamp.org",
              icon: "code",
              icon_color: palette.red,
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
            {
              name: "X (twitter)",
              url: "https://x.com/home",
              icon: "brand-x",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "Amazon Luna",
              url: "https://luna.amazon.com/claims/home",
              icon: "brand-amazon",
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
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "Crunchyroll",
              url: "https://www.crunchyroll.com/es/discover",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "Disney+",
              url: "https://www.disneyplus.com/es-419/home",
              icon: "brand-disney",
              icon_color: palette.blue,
            },
            {
              name: "PrimeVideo",
              url: "https://www.primevideo.com/",
              icon: "brand-amazon",
              icon_color: palette.mauve,
            },
            {
              name: "Netflix",
              url: "https://www.netflix.com/browse",
              icon: "brand-netflix",
              icon_color: palette.red,
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
