# Girls in Computer Science — Del Norte High School

Website for GICS at Del Norte High School: club info, events, blog posts, and a free
self-paced computer science curriculum built to outlast any one graduating class.

Live at [vibha1019.github.io/gics](https://vibha1019.github.io/gics/).

## Structure

Static HTML/CSS/JS, no build step — every page is plain HTML you can edit directly and
reload in a browser.

```
index.html, about.html, contact.html, event.html   core site pages
blog/                                               blog posts (safety guides, event recaps)
curriculum/                                         Intro to Python & Intro to Digital Literacy courses
assets/                                              css, js, fonts
images/                                              photos, logo
```

## Running locally

No dependencies. From the repo root:

```
python3 -m http.server
```

then open `http://localhost:8000`.

## Adding a new blog post or lesson

Copy the closest existing page in `blog/` or `curriculum/` as a starting template —
header, nav, and footer are duplicated on every page (no templating system), so keep
new pages consistent with the ones already there.

## Credits

Built on **Future Imperfect** by [HTML5 UP](https://html5up.net) (AJ, aj@lkn.io),
used under the [CC BY 3.0 license](LICENSE.txt).

- Demo images: [Unsplash](https://unsplash.com)
- Icons: [Font Awesome](https://fontawesome.com)
- Other: [jQuery](https://jquery.com), [Responsive Tools](https://github.com/ajlkn/responsive-tools)
