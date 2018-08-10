<p align="center">
  <img src="https://i.imgur.com/ddhPSQ4.png" height="64">
  <h3 align="center">cash-cli</h3>
  <p align="center">Convert Currency Rates directly from your Terminal!<p>
  <p align="center">  
	<a href="https://travis-ci.org/xxczaki/cash-cli"><img src="https://travis-ci.org/xxczaki/cash-cli.svg?branch=master" alt="Build Status"></a>
	  <a href='https://coveralls.io/github/xxczaki/cash-cli'><img src='https://coveralls.io/repos/github/xxczaki/cash-cli/badge.svg' alt='Coverage Status' /></a>
	<a href="https://npmjs.com/package/cash-cli"><img src="https://img.shields.io/npm/dt/cash-cli.svg" alt="npm Downloads"></a>  
	<a href="https://github.com/sindresorhus/xo"><img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="Code Style"></a>  
	<a href="https://www.david-dm.org/xxczaki/cash-cli"><img src="https://david-dm.org/xxczaki/cash-cli.svg" alt="David"></a>
	<a href='https://github.com/agarrharr/awesome-cli-apps'><img src='https://awesome.re/mentioned-badge.svg' alt='Mentioned in Awesome CLI Apps' /></a>

</p>
</p>
<p align="center"><img src="https://cdn.rawgit.com/xxczaki/cash-cli/aa171028/cash.svg" alt="SVG"></p>

<p align="center"><a href="https://github.com/xxczaki/cash-cli/wiki/Introducing-cash-cli-2.0!">🎉 Introducing cash-cli 2.0 🎉</a><p>

# Currency Converter

A CLI application that makes real-time currency conversions

## Installation using :package: npm

#### 1. Install Node.js [HERE](https://nodejs.org/en/download/).
#### 2. Open your terminal.
#### 3. Type: `npm install -g converter-cli`.
#### 4. Wait for NPM to install this package on your computer.
#### 5. You can now access converter-cli with the `converter` command from anywhere in your terminal

```
npm install -g converter-cli
```

## Usage

#### 1. Create a user: `converter create-user username password`
#### 2. Login and run your first conversion: `converter login username password`. You will be prompted for your credentials. Once you are authenticated follow the prompts and enter the currencies you want to exchange by their symbol. For example `USD` or `EUR`
#### 3. Retrieve your conversion history: this will show you the last 5 conversions you have executed `converter logs username password`.


## Available Currencies

See [supportedCurrencies.json](https://github.com/mxpaspa/currency-converter-cli/blob/master/supportedCurrencies.json) file.

## Third Party Technologies Used:

- [mlab.com](https://mlab.com/welcome/) for providing great and simple conversion library.
- [fixer.io](http://fixer.io/) for providing fast currency conversion API.

## License

[MIT](https://opensource.org/licenses/MIT) © Anthony Kepinski

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fxxczaki%2Fcash-cli.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fxxczaki%2Fcash-cli?ref=badge_large)
