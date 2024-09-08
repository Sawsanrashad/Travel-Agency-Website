import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { messages } from './translations/messages'
import { IntlProvider } from 'react-intl'
import { useRecoilState } from 'recoil'
import { $lang, $theme } from './Store'
import router from './routes/routes'
import { ToastContainer } from 'react-toastify';

export default function App() {
  const lang = localStorage.getItem("lang") || "ltr";
  const [langState, setLangState] = useRecoilState($lang);
  const locale = lang == "ltr" ? "en" : "ar"
  const [theme] = useRecoilState($theme);

  useEffect(() => {
    document.documentElement.dir = lang;
    setLangState(locale)
  }, [])

  const translation = messages[locale];
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div>
      <IntlProvider locale={locale} messages={translation} defaultLocale='en' >
        <RouterProvider router={router} />
        <ToastContainer position={"top-right"} autoClose={3000} />
      </IntlProvider>
    </div>
  )
}
