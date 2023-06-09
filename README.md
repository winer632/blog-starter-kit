# A statically generated blog example using Next.js, Markdown, and TypeScript

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

[https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/blog-starter)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter&project-name=blog-starter&repository-name=blog-starter)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent)
- [Umbraco Heartcore](/examples/cms-umbraco-heartcore)
- [Builder.io](/examples/cms-builder-io)
- [TinaCMS](/examples/cms-tina/)
- [Enterspeed](/examples/cms-enterspeed)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example blog-starter blog-starter-app
```

```bash
yarn create next-app --example blog-starter blog-starter-app
```

```bash
pnpm create next-app --example blog-starter blog-starter-app
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

`blog-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).


# 本地调试

npx next dev


如果使用上述命令后遇到编译问题，可以执行npm ls命令找出版本冲突，然后在package.json文件中解决。
比如下面这个报错就是package.json文件中next版本配置成了"next": "latest", 实际./node_modules中是13.4.4，改过来"next": "13.4.4"就好了

wangxinxin@CN0614009276M  ~/Desktop/blog-starter-kit   main ±  npm ls
npm ERR! code ELSPROBLEMS
npm ERR! invalid: next@13.4.4 /Users/wangxinxin/Desktop/blog-starter-kit/node_modules/next
blog-starter-kit@ /Users/wangxinxin/Desktop/blog-starter-kit
├── @types/node@18.16.16 -> ./node_modules/.pnpm/@types+node@18.16.16/node_modules/@types/node
├── @types/react-dom@18.2.4 -> ./node_modules/.pnpm/@types+react-dom@18.2.4/node_modules/@types/react-dom
├── @types/react@18.2.9 -> ./node_modules/.pnpm/@types+react@18.2.9/node_modules/@types/react
├── @vercel/analytics@1.0.1 -> ./node_modules/.pnpm/@vercel+analytics@1.0.1/node_modules/@vercel/analytics
├── autoprefixer@10.4.14 -> ./node_modules/.pnpm/autoprefixer@10.4.14_postcss@8.4.24/node_modules/autoprefixer
├── classnames@2.3.2 -> ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames
├── date-fns@2.30.0 -> ./node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns
├── gray-matter@4.0.3 -> ./node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter
├── next@13.4.4 invalid: "latest" from the root project -> ./node_modules/.pnpm/next@13.4.4_react-dom@18.2.0_react@18.2.0/node_modules/next
├── postcss@8.4.24 -> ./node_modules/.pnpm/postcss@8.4.24/node_modules/postcss
├── react-dom@18.2.0 -> ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom
├── react@18.2.0 -> ./node_modules/.pnpm/react@18.2.0/node_modules/react
├── remark-html@15.0.2 -> ./node_modules/.pnpm/remark-html@15.0.2/node_modules/remark-html
├── remark@14.0.3 -> ./node_modules/.pnpm/remark@14.0.3/node_modules/remark
├── tailwindcss@3.3.2 -> ./node_modules/.pnpm/tailwindcss@3.3.2/node_modules/tailwindcss
└── typescript@4.9.5 -> ./node_modules/.pnpm/typescript@4.9.5/node_modules/typescript


npm ERR! A complete log of this run can be found in: /Users/wangxinxin/.npm/_logs/2023-06-09T12_07_43_743Z-debug-0.log
 ✘ wangxinxin@CN0614009276M  ~/Desktop/blog-starter-kit   main ± 