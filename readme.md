# Colorvert HTTP JSON API

An easy-to-use color conversion API written in node and using Express. 

It uses the [colorvert](https://github.com/jpederson/node-colorvert) to perform color conversions. If you need the color conversion modules only, that's where you should look.

If you only need conversions between ICC profiles (CMYK, Lab, XYZ, RGB) and don't need the math-based conversions, you should take a look at the [`transicc`](https://github.com/jpederson/node-transicc) node module, which colorvert uses to perform those.

*****

### Installation

Colorvert uses a tiny command line utility called transicc. It's installed by the `install-deps.sh` script in the root of this repo. Roughly, the commands below will get everything installed.

```bash
git clone https://github.com/jpederson/node-colorvert-api.git
cd node-colorvert-api
npm install --production
./install-deps.sh
```

**Note:** If you're on Debian/Ubuntu, you can install the `lcms2` package instead of the last step.

Once you've installed that dependency, you're ready to run `node server.js` from the same directory, or use a tool like [forever](https://github.com/nodejitsu/forever) to keep the server running in the background. It binds to port 3000 by default - you can change it at the bottom of server.js file.

*****

### API Usage

There are currently 7 endpoints for the colorvert API.

#### `/cmyk/[c]/[m]/[y]/[k]`

Expects 0-100 values for each component. Example: `/cmyk/100/0/0/0`

#### `/lab/[l]/[a]/[b]`

Expects `[l]` to be between 0-100. There are no bounds on `[a]` or `[b]` so they can be any positive or negative number (integer or decimal). Example: `/lab/52/-68/23`

#### `/xyz/[x]/[y]/[z]`

Expects 0-100 for `[x]`, `[y]`, and `[z]`. Assumes a luminance level of D65. 

#### `/rgb/[r]/[g]/[b]`

Expects 0-255 for `[r]`, `[g]`, and `[b]`. Example: `/rgb/0/172/136`

#### `/hsl/[h]/[s]/[l]`

Expects 0-360&deg; value for `[h]` (hue), and 0-100 values for both `[s]` and `[l]`.

#### `/hsv/[h]/[s]/[v]`

Expects 0-360&deg; value for `[h]` (hue), and 0-100 values for both `[s]` and `[v]` (sometimes also called HSB - 'B' being brightness).

#### `/hex/[hex]`

Expects `[hex]` to be a valid hex color **without the '#'**. Example: `/hex/00ccff` or `/hex/AACCFF`.

I plan to post more documentation with regard to end points as I continue developing the module. In the meantime, post an issue if you have a question or would like clarification!

*****

### Warning! :)

This and the colorvert module are still under development. They currently function for perfect input, but as soon as an empty/invalid value is passed, things fall apart, so I have to do some input testing/error reporting and write thorough tests before anyone should use it. You've been warned :) Otherwise, feel free to run it locally if you need to batch convert colors and you know the input will be valid!
