# converter-cli

A CLI application that makes real-time currency conversions

## Installation using :package: npm

#### 1. Install Node.js [HERE](https://nodejs.org/en/download/).
#### 2. Open your terminal.
#### 3. Type: `npm install -g converter-cli`.
#### 4. Wait for NPM to install the package on your computer.
#### 5. You can now access the converter-cli help doc from anywhere in your terminal by entering:

```
converter help
```
#### 6. You can also view the current version from anywhere in your terminal by entering:
```
converter version
```

## Usage

#### 1. Run a conversion:

converter convert <home currency> <exchange currency> <amount>

*For example:*
```
converter convert USD EUR 10
```

#### 2. Retrieve your conversion history, which will present the last 5 conversions executed.
```
converter logs
```

#### 3. List available symbols:
```
converter symbols
```

## Available Currencies

See [supportedCurrencies.json](https://github.com/mxpaspa/converter-cli-refactored/blob/master/utils/supportedCurrencies.json) file.

## Third Party Technologies Used:

- [mlab.com](https://mlab.com/welcome/) provided a cloud instance of MongoDB.
- [fixer.io](http://fixer.io/) provided real-time currency conversions.
