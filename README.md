# CARDCARD

We can apply shadows and padding to the card

# Installation

`npm i cardcard --save`

```
import { cardcard } from 'cardcard';

cardcard({
    shadow_type: 'soft',
    padding: false
});
```

## Options

cardcard supports two options, both of which are optional:

* *shadow_type* - _hard | soft_  (Default to soft)
* *padding* - _boolean_ (Default to false)