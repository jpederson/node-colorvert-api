## Colorvert + Express API Implementation

An easy-to-use color conversion API written in node and Express. 

It uses the [colorvert](https://github.com/jpederson/node-colorvert) to perform color conversions. If you need the color conversion modules only, that's where you should look.

If you only need conversions between ICC profiles (CMYK, Lab, XYZ, RGB) and don't need the math-based conversions, you should take a look at the `transicc` node module, which colorvert uses to perform those.

*****

### Installation Requirements

Colorvert uses a tiny command line utility called transicc. It's installed by the `install-deps.sh` script in the root of this repo. Roughly, the commands below will get everything installed.

```bash
git clone https://github.com/jpederson/node-colorvert-api.git
cd node-colorvert-api
npm install --production
./install-deps.sh
```

Once you've installed that dependency, you're ready to run `node server.js` from the same directory, or use a tool like [forever](https://github.com/nodejitsu/forever) to keep the server running in the background. It binds to port 3000 by default - you can change it at the bottom of ser

*****

### Warning! :)

This and the colorvert module are still under development. They currently function for perfect input, but as soon as an empty/invalid value is passed, things fall apart, so I have to do some input testing/error reporting and write thorough tests before anyone should use it. You've been warned :) Otherwise, feel free to run it locally if you need to batch convert colors and you know the input will be valid!
