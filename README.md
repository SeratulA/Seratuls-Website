# Seratul Ambia website

A personal website with Home, About, Resume, Portfolio, and Contact pages. The site uses static HTML, CSS, and JavaScript and runs on GitHub Pages without a build step.

## Preview

Open `index.html` in a browser, or run the following command from this directory and open the local URL it displays:

```sh
python3 -m http.server 8000
```

The five pages share `assets/css/style.css` and `assets/js/main.js`. Navigation is included in each HTML file. The resume download is `assets/docs/Seratul_Ambia_Resume.pdf`.

## Updating content

Update the work history in `resume.html`, project descriptions in `portfolio.html`, and featured work in `index.html`. Contact links appear in the shared header and footer markup and in `contact.html`. Keep these consistent across the pages.

The contact page uses email, phone, and LinkedIn links. It does not require a form service. The portfolio includes archived screenshots within expandable sections.

## Publishing

The existing `CNAME` preserves the custom domain. Review the changes on a branch before merging into the GitHub Pages publishing branch. The new PDF and the website's employment information are intended to be public once publication is approved.
