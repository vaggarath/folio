### A quick to edit web folio for developers in REACT
#### *A simple yet effective folio for developers who don't have time*

[![demo](http://vag.ovh/this.jpg "demo")](http://vag.ovh/this.jpg "demo")
*You can use this folio at you own convenience, if you can respect credits it would be much appreciated !*

------------


### [**DEMO**](http://www.vag.ovh "DEMO")

## Some options but with lots of improvements needed

- A dark / light mode. It's not really usefull but it's always great to have a visually impacting option like this. *If it's useless it's essential !*
- A language swap for a bilingual folio.

But as stated, this folio could use some improvements. Lots of in fact. I'll work on it from time to time, but feel free to propose your improvements. I'd be more than thankfull to publish it!

Here's a non-exhaustive list of what i intend to improve, (non-hierarchical) :
- Mobile responsive menu. It already is, but i'd like a better looking one ^^
- Mobile responsive dark / light button
- Better looking timeline for experiences.
- Another way to display skills in smaller screens, (too small on mobile, a progressiv bar instead for small screens would be better).
- A more complex & automated language module. What I have in mind would be to make it a configurable component with lots of languages (and their respective flag). The idea would be to pass an array as props like this

```javascript
<Languages langList={['eng', 'fr', 'jpn', ...]}>
```
the idea would be to avoid having to load the flags yourself and be able to use more than two languages.
- A mail form served with NodeJS ?
- Lots of other things !^^

## A quick to edit and deploy build
### Between 30 minutes to one hour to publish your folio
You'll need NodeJS & NPM.
You can download it here : [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "https://docs.npmjs.com/downloading-and-installing-node-js-and-npm")
1. Clone this repo
2. Go where you downloaded it and run the command "npm install"
3. Edit the content through the components
4. Run "npm run build"
5. Upload your build on your hosting service
