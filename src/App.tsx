import React, { Fragment } from "react"
import { Route } from "react-router-dom"
import HomePage from "pages/home"
import SigninPage from "pages/signin"
import RegisterPage from "pages/register"
import NewsListPage from "pages/news-list"
import JobPostPage from "pages/job-post"
import { useDispatch } from "react-redux"
import { refresh_token } from "features/account-auth"
import FeedbackPage from "pages/feedback"
import NewsArticlePage from "pages/news-article"
import JobListPage from "pages/job-list"
import JobArticlePage from "pages/job-article"
import TermsPage from "pages/terms"
import PrivacyPage from "pages/privacy"
import ActivationPage from "pages/activate"
import ResetPasswordPage from "pages/reset-password"
import ProfileStatsPage from "pages/profile-stats"
import MyApplicationsPage from "pages/my-applications"
import MyPostingsPage from "pages/my-postings"
import PostingDetailsPage from "pages/my-posting-details"
interface IProps {}

const App: React.FC<IProps> = () => {
  // Refresh Authenticated everytime user refreshes browser.
  const dispatch = useDispatch()
  dispatch(refresh_token(null))
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/sign-in" component={SigninPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/news-list" component={NewsListPage} />
      <Route exact path="/create-jobs" component={JobPostPage} />
      <Route exact path="/provide-feedback" component={FeedbackPage} />
      <Route path="/news-detail/:slug" exact component={NewsArticlePage} />
      <Route exact path="/job-list" component={JobListPage} />
      <Route exact path="/job/:slug" component={JobArticlePage} />
      <Route exact path="/activate-account" component={ActivationPage} />
      <Route exact path="/reset-password" component={ResetPasswordPage} />
      <Route exact path="/profile" component={ProfileStatsPage} />
      <Route exact path="/my-applications" component={MyApplicationsPage} />
      <Route exact path="/my-postings" component={MyPostingsPage} />
      <Route exact path="/my-postings/:job_id" component={PostingDetailsPage} />
      <Route
        exact
        path="/documentation/terms-and-conditions"
        component={TermsPage}
      />
      <Route
        exact
        path="/documentation/privacy-policy"
        component={PrivacyPage}
      />
    </Fragment>
  )
}

export default App
