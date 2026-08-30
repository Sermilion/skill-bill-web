# Skill Bill web

Marketing landing page for [Skill Bill](https://github.com/oila-gmbh/skill-bill).

Static HTML/CSS/JS. No build step.

## Preview locally

```bash
python3 -m http.server 8765
```

Open http://127.0.0.1:8765/

## Layout

| Path | Role |
|------|------|
| `index.html` | Page structure and copy |
| `styles.css` | Layout and brand styles |
| `main.js` | Install-command copy button |
| `assets/` | Icon, demo GIF, IntelliJ screenshot, hero art |

Demo GIF and brand assets are sourced from the Skill Bill repo (`docs/assets/`). Regenerate the GIF there with `python3 docs/assets/generate_demo_gif.py`, then copy into `assets/` here.
