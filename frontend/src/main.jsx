import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageLayout from "./layout/PageLayout.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import theme from "./theme/theme.js"
import Dictionary from "./pages/Dictionary.jsx";
import About from "./pages/About.jsx"
import AIPage from "./pages/AIPage.jsx";
// const styles = {
//   global: (props) => ({
//     body: {
//       bg: mode("gray.200", "#000")(props),
//       color: mode("gray.200", "WhiteAlpha.900")(props),
//     },
//   }),
// };

// // 2. Add your color mode config
// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: true,
// };

// 3. extend the theme


const router = createBrowserRouter([
  {
    path: "/",
    element:<PageLayout/>,
      children: [
        {
          path:"auth",
          element:<AuthPage/>
        },
        {
          path:"dictionary",
          element:<Dictionary/>,
        },
        {
          path:"about",
          element:<About/>,
        },
        {
          path:"ai-translate",
          element:<AIPage/>,
        }
        

      ]
    
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
