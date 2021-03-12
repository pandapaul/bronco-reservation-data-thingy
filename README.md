# bronco-reservation-data-thingy
> A thing for formatting Bronco reservation data to be more readable

# Usage
Currently requires `npm`, so you can crank it up via `npx` like this
```
npx bronco-reservation-data-thingy <pathToYourOrderData.json>
```
or install globally then run
```
npm i -g bronco-reservation-data-thingy
bronco-reservation-data-thingy <pathToYourOrderData.json>
```

# Output
Writes csv data to standard out so if you want that to write to a file, pipe it as such.
```
bronco-reservation-data-thingy <pathToYourOrderData.json> | orderData.csv
```