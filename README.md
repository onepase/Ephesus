[![Open in Visual Studio Code](https://img.shields.io/badge/Open%20in-Visal%20Studio%20Code-blue?style=for-the-badge&logo=visualstudiocode)](https://open.vscode.dev/jpadhye/Ephesus)

# Ephesus

Ephesus Jekyll Theme - Simple and Minimal Jekyll Blog Theme

Author [Hakan Torun](https://hakan.io).

- **Demo:** https://pardin.us/ephesus/

### Features

- [x] Tiny CSS & No Dependency
- [x] Responsive Design
- [x] Dark/Light Theme
- [x] Custom 404 Page
- [x] About Page
- [x] Tags Page
- [x] Code Highlighter
- [x] Social Share
- [x] Atom & Json feeds
- [x] Robots.txt
- [x] Sitemap
- [x] Next & Previous Post
- [x] Pagination
- [x] Disqus
- [x] Mathjax Support
- [x] Google Analytics

## Screenshots

#### Light
![light-theme](https://github.com/onepase/Ephesus/blob/master/light.png)

#### Dark
![dark-theme](https://github.com/onepase/Ephesus/blob/master/dark.png)

## Manual Installation

Run local server:

```bash
$ git clone https://github.com/onepase/Ephesus.git
$ cd Ephesus
$ bundle install
$ bundle exec jekyll build
$ bundle exec jekyll serve
```

## VSCode environment

If you use VS Code and Docker, you can create a development container in one click by using the open in VS Code button at the top and select clone repo in container volume.

Then  click ctrl + shift + P and simply run the `Jekyll Build` or `Jekyll Serve` task


Navigate to `127.0.0.1:4000`.

Tags are created automatically under the /tags page.

To use a math formula in a post, use the mathjax:true tag in the post.

## Contributing

Feel free to open a pull request for contributing.

Please feel free to contribute. Do not hesitate to open a pull request and fix it, please read [contributing](./CONTRIBUTING.md) before PR.

## License

This project is open source and available under the [MIT License](LICENSE.md).
