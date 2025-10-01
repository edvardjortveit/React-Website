# Source Code Organization

This directory follows a clean, scalable architecture pattern:

## 📁 Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── CountryAccordion.tsx
│   ├── MainContent.tsx
│   └── index.ts         # Barrel exports
├── pages/              # Page-level components
│   ├── folka.tsx
│   ├── før-du-reiser.tsx
│   ├── mens-du-reiser.tsx
│   ├── pakkeliste.tsx
│   └── index.ts         # Barrel exports
├── constants/          # Application constants
│   └── index.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── hooks/              # Custom React hooks
│   ├── useCountryNavigation.ts
│   └── index.ts
├── utils/              # Utility functions
│   └── index.ts
├── services/           # API services (future)
│   └── index.ts
├── styles/             # CSS and styling files
│   ├── App.css
│   └── index.css
├── assets/             # Static assets
│   └── react.svg
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🎯 Benefits

- **Separation of Concerns**: Each directory has a specific purpose
- **Scalability**: Easy to add new features without cluttering
- **Maintainability**: Clear structure makes code easier to find and modify
- **Reusability**: Components and utilities are easily reusable
- **Clean Imports**: Barrel exports provide clean import statements

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `Header.tsx`)
- **Hooks**: camelCase starting with 'use' (e.g., `useCountryNavigation.ts`)
- **Utilities**: camelCase (e.g., `formatCountryName`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MY_COLOR`)
- **Types**: PascalCase (e.g., `Country`)

## 🔄 Future Enhancements

- Add state management (Redux/Zustand)
- Implement routing (React Router)
- Add testing structure
- Create storybook for components
- Add internationalization support
