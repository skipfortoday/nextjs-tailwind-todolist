## Next.JS Tailwind & Todo List

Check on [Demo](https://nextjs-tailwind-todolist-skipfortoday.vercel.app) .

Gif is e2e testing using cy-press

![Todolist e2e testing](https://user-images.githubusercontent.com/43211197/163987374-5a532681-f7c3-4713-8054-bc83da0b17f4.gif)


Feature :

- Different betwween done and undone task
- sorting date
- Simple github action to check dependencies & build in any node version
- Simple cy-press unit test

## Getting Started

First, Clone this Repository:

```bash
git clone https://github.com/skipfortoday/nextjs-tailwind-todolist
```

Install Dependency:

```bash
#move to directory apps
cd nextjs-tailwind-todolist
#install dependencies
npm install
```

run the on development server:

```bash
npm run dev
```

apps will start on [http://localhost:3000](http://localhost:3000) .

## Description

This Apps build with:

- [Next.js](https://nextjs.org/docs) - Framework for React with SSR.
- [Tailwind](https://tailwindcss.com/) - ui framework.
- [DaisyUI](https://daisyui.com/) - Tailwind Component Plugin.
- [Redux](https://redux.js.org/) - State Management.
- [Next Redux Wrapper](https://www.npmjs.com/package/next-redux-wrapper) - Library to easy warp Next.js with Redux.
- [Axios](https://axios-http.com/docs/intro) - HTTP Client.

call api just for init page, refresh will make list restore to deffault

I give a simple Github action worksflow to check this repo/apps can run with another
node version 12xx ,14xx 16xx

Unit test is using cy-press

run the unit test by:

```bash
npm run test
```

and then will show window testing automate by cy-press

You can check out [This Repo](https://github.com/skipfortoday/nextjs-tailwind-todolist - to give your feedback and contributions are welcome!

## Deploy on Vercel

You can easy deploy your apps to Vercel
Check [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
