## Colorvert + Express API Implementation

An easy-to-use color conversion module written for node. Uses the `transicc` node module to provide ICC profile-based color conversions between several color spaces spaces. 

*****

### Installation Requirements

You must first install LittleCMS, an open source Python library for converting colors using ICC profiles. This shell script will get you there.

```shell
git clone https://github.com/mm2/Little-CMS.git
cd Little-CMS
./configure 
make 
make check 
sudo make install
```

Once you've installed that dependency, you're ready to install colorvert-api and start serving your color API!

```shell
npm install colorvert-api --save
```

More documentation on running the server to come as it's finished being developed.