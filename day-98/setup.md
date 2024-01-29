## How to setup Tailwindcss

Step1: Run the following commands

```
npm init -y
npx install -D tailwindcss
npx tailwindcss init -p
```

sTEP2: Update tailwind.conf.js file to include this line:

```
content: ["*.html"]
```

Step3: Create/input.css to include:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step4: Include the src/output.css file to your input:

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch