import React, { Fragment } from "react"
import { Route } from "react-router-dom"
import HomePage from "pages/home"
import SigninPage from "pages/signin"
import RegisterPage from "pages/register"
import NewsListPage from "pages/news-list"
import JobPostPage from "pages/job-post"

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/sign-in" component={SigninPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/news-list" component={NewsListPage} />
      <Route exact path="/create-jobs" component={JobPostPage} />
    </Fragment>
  )
}

export default App
