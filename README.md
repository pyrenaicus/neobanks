# Nuwe CaixaBankTech React Cross-Platform Challenge

This is my response to the [Nuwe & CaixaBank Tech challenge](https://nuwe.io/challenge/react-cross-platform). The objective is to build a mobile & web cross platform in React, following the [design given in Figma](<https://www.figma.com/file/QwywweWsNXzZhGQGOjw3zi/Figma-for-Developers%2C-Frontend-Masters-(Community)?node-id=41%3A331>)

![figma design](https://res.cloudinary.com/do6vrwdse/image/upload/v1653756834/caixabank/Screenshot_2022-05-28_at_18.52.21_vvbfkb.png)

We should build the components for a mobile web app and for a dashboard. So far I've been able to build the web app using [ReactJS](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), and [Recharts](https://recharts.org/), a React composable charting library for the graphics.

## Installation

Clone this repo, `cd` into newly created dir and install dependencies

```bash
git clone git@github.com:pyrenaicus/neobanks.git
cd neobanks
yarn
```

If you want to follow all the steps to build it from scratch, do:

1. Create a React app with Typescript template:

```bash
npx create-react-app neobanks --template typescript
```

2. Install Recharts library:

```bash
yarn add recharts
```

3. You will need as well to install [react-icons](https://react-icons.github.io/react-icons)

```bash
yarn add react-icons
```

## Result

![my result](https://res.cloudinary.com/do6vrwdse/image/upload/v1653760388/caixabank/Screenshot_2022-05-28_at_19.52.35_xzxnlw.png)

To build the app I followed an **Atomic design** methodology. Using this approach allows us to break our components into smaller units that can be developed and tested in isolation, and it helps to keep our directories in order as things scale up.

```
├── components
│   ├── atoms
│   │   ├── IconBarchart.tsx
│   │   ├── IconBattery.tsx
│   │   ├── IconCompass.tsx
│   │   ├── IconSignal.tsx
│   │   ├── IconUser.tsx
│   │   ├── IconWifi.tsx
│   │   └── Time.tsx
│   ├── molecules
│   │   ├── AppHeader.tsx
│   │   ├── PhoneStatus.tsx
│   │   └── PhoneVitals.tsx
│   └── organisms
│       ├── InfoBox.tsx
│       ├── MainSection.tsx
│       ├── MenuBar.tsx
│       ├── SectionHeader.tsx
│       ├── TransactionsGraphic.tsx
│       └── TransactionsInfo.tsx
```
