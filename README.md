# Popis Kódu

App.js je hlavný komponent, ktorý obsahuje všetky ostatné komponenty aplikácie.
App.js sa stará aj o počiatočné vytiahnutie dát z Api, ktoré potom ukladá do redux storu.

TimeIntervalButton.js je komponent navhnutý na to aby si používateľ vybral interval údajov, ktoré chce z Api vytiahnuť.
V komponente je zakomentovaná funkcia na fetchovanie dát z Api pomocou parametrov from a to.

LossColumnChart.js, SalesColumnChart.js, CostsColumnChart.js sú 3 komponenty, ktoré vyťahujú z redux storu aktuálne dáta (podľa ich úlohy). Všetky 3 komponenty využívaju komponent MyColumnChart.js, ktorému pošlú dáta na vykreslenie.

MyColumnChart.js je komponent, ktorý vykresľuje malý stĺpcový graf, pričom údaje na vykreslenie očakáva z props.

DphTable.js je komponent, ktorý si z redux storu vytiahne dáta o dph a tie vypíše do tabuľky.

MyAreasplineChart.js je komponent, ktorý vytiahne dáta z redux storu a tieto dáta zakreslí do Areaspline grafu.

BusinessTable.js je komponent, ktorý vytiahne dáta z redux storu a pre každý mesačný záznam potom vytvára komponent OneRow.js.

OneRow.js je komponent, ktorý cez props očakáva dáta o jednom mesiaci. Tieto dáta zapíše do riadku tabuľky. Tento komponent sa ešte stará o odstránenie daného riadku a editovanie daného riadku v redux store.

AddRecordButton.js je komponent predstavujúci tlačidlo. Toto tlačidlo slúži na pridávanie nových záznamov do redux storu. Po stlačnení tlačídla sa otvorí modálne okno, v ktorom si používať vykliká aký záznam chce pridať (vypočítajú sa DPH hodnoty).
Tento záznam sa potom uloží do redux storu. V AddRecordButton.js je zakomentovaná funkcia s názvom addNewRecord_apiVersion, ktorá by sa dala využiť, ak by sme chceli dáta posielať na Api a neukladať si ich do redux storu. V takomm prípade by sa po odoslaní post requestu museli znovu fetchnut dáta z Api, aby sme používali nové dáta (podobná úvaha aj pri edite a vymazávaní dát).

SalesPieChart.js je komponent, ktorý vyťahuje z redux storu dáta o tržbách a tie posiela komponentu PieChart.js.

CostsPieChart.js je komponent, ktorý vyťahuje z redux storu dáta o nákladoch a tie posiela komponentu PieChart.js.

PieChart.js je komponent, ktorý pomocou dát, ktoré očakáva z props nakreslí koláčový graf.

Fungovanie:
Aplikácia si z Api vytiahne potrebné dáta. Tieto dáta do reduxu ukladáme v rovnakom formáte ako boli v Api, to znamená ako jeden veľký objekt.
Vo všetkých komponentoch, kde potrebujeme pracovať s týmito dátami používame useSelector. Ak tieto dáta upravujeme alebo mažeme používame useDispatch/Reducer. 
V aplikácie je čiastočné ošetrovanie zlých vstupov. 

Aplikáciu je možné vyskúšať na tomto linku: https://business-analyse.netlify.app





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
