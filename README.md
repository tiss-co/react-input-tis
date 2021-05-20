# react-input-tis

> Powerful input component for React

[![NPM](https://img.shields.io/npm/v/react-input-tis.svg)](https://www.npmjs.com/package/react-input-tis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![react-input-tis Banner](https://user-images.githubusercontent.com/76048512/118974397-08d80e00-b988-11eb-8906-8f473ce17d7c.png)

## Install

```bash
npm i react-input-tis
```

or

```bash
yarn add react-input-tis
```

## Usage

```jsx
import React, { useState } from 'react'

import { Input, inputType } from 'react-input-tis'
import 'react-input-tis/dist/index.css'

const App = () => {
  const [value, setValue] = useState('')

  return (
    <Input
      containerClassName='Container'
      labelClassName='Label'
      inputClassName='Input'
      label='Text input:'
      placeholder='Input your text'
      type={inputType.text}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      roundedBorder={true}
      autoFocus={false}
      darkMode={false}
      minLength={4}
      // and other typical input props ...
    />
  )
}
```

## License

MIT © [boof-tech](https://github.com/boof-tech)
