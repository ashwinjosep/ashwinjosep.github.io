import ReactGA from "react-ga4";
import { GOOGLE_ANALYTICS_ID } from "./constants";

class Analytics {
  analyticsProperty: string;

  constructor(analyticsProperty: string) {
    this.analyticsProperty = analyticsProperty;
    ReactGA.initialize(GOOGLE_ANALYTICS_ID);
  }

  sendPageView(page: string) {
    ReactGA.send({ hitType: "pageview", page });
  }

  sendAnalytics(event: any) {
    ReactGA.event(event);
  }
}

export default Analytics;
