export default {
    content: [
      "./index.html",
      "./src/**/*.{ts,js,html}",
    //   "./public/components/*.html"
    "./public/**/*.{html}"
    ],
    safelist: [
        "text-xl", "sm:text-2xl", "md:text-3xl",
        "font-bold", "mb-2", "p-2", "w-full", "sm:w-4/5", "md:w-3/4",
        "rounded", "border", "border-blue-500",
        "mt-2", "bg-blue-500", "text-white", "cursor-pointer",
        "font-semibold", "mt-4", "text-sm", "sm:text-base", "md:text-lg",
        "bg-green-500", "mt-4"
      ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  