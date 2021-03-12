# broncoReservationDataThingy
> A thing for formatting Bronco reservation data to be more readable

# Usage
Currently requires `npm`, so you can crank it up via `npx` like this
```
npx broncoReservationDataThingy <pathToYourOrderData.json>
```
or install globally then run
```
npm i -g broncoReservationDataThingy
broncoReservationDataThingy <pathToYourOrderData.json>
```

# Output
Writes csv data to standard out so if you want that to write to a file, pipe it as such.
```
broncoReservationDataThingy <pathToYourOrderData.json> | orderData.csv
```