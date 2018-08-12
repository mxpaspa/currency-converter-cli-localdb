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

## Usage

#### 1. Create a user:

```
converter create-user <username> <password>
```
#### 2. Login and run your first conversion. You will be prompted for your credentials.  

```
converter login
```
#### 3. Once you are authenticated run your first conversion.

```
converter <home currency> <exchange currency> <amount>
```
*For example:*
```
converter USD EUR 10
```

#### For a symbols reference [supportedCurrencies.json](https://github.com/mxpaspa/converter-cli-refactored/blob/master/utils/supportedCurrencies.json)

#### 4. After logging in you can retrieve your conversion history, which will present the last 5 conversions executed
```
logs
```
#### 5. In application help:
```
help
```


## Available Currencies

See [supportedCurrencies.json](https://github.com/mxpaspa/converter-cli-refactored/blob/master/utils/supportedCurrencies.json) file.

## Third Party Technologies Used:

- [mlab.com](https://mlab.com/welcome/) provided a cloud instance of MongoDB.
- [fixer.io](http://fixer.io/) provided real-time currency conversions.
