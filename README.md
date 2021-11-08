# create-lasca-app

Scaffolding a Vue.js or React project which will help scaffold the basic structure of building a web applications using Lasca.

## Quick start

To use it, open up your terminal in the desired directory and run the following command:

``` sh
yarn create lasca-app
```

Then, the command will interactively give you following simple steps:

``` sh
cd lasca-app
yarn install
export LASCA_API_TOKEN=<YOUR_API_TOKEN>  ( Get your API token from https://lasca.app/signup )
yarn lasca pull
yarn webpack serve
```

After finishing the above steps, go to [http://localhost:8080](http://localhost:8080) ( [http://localhost:3000](http://localhost:3000) if you choose Nuxt.js or Next.js)

Explore the page and you will see that **it has dynamic features such as condition or click event**, but **it's created without writing even a single line of HTML and CSS**, just an export of the Figma design!

## Going further

To automate front-end coding in your own projects, refer to the more detailed documentation [here](https://doc.lasca.app/).
