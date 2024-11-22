This is a [Markdoc](https://markdoc.io) and [Next.js](https://nextjs.org) project template.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage
You can start editing the page by modifying `pages/index.md`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

There is an example subpage in the `pages/secondary` directory. All sub folders in the pages folder will be treated as their own route. eg `/secondary/subpage` will be rendered by `pages/secondary/subpage.md`.

Components can be accessed via `components/<component-name>.js`. However, to use components you must be declare them as a tag. To do this you can:
1. Create the component in `components/<component-name>.js`.
2. Create the component tag in `markdoc/tags/<component-name>.markdoc.js`.
3. Register the component tag in `markdoc/tags/index.markdoc.js`.
4. The Component can be accessed via the syntax `{% <component-name> %}` in any markdown file in `pages` such as `pages/index.md`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

To learn more about Markdoc, take a look at the following resources:
- [Markdoc Documentation](https://markdoc.io/docs) - learn about Markdoc features and API.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
