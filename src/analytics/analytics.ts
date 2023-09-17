import ReactGA from "react-ga4";
import { GOOGLE_ANALYTICS_ID } from "./constants";
import { GA4 } from "react-ga4/types/ga4";

class Analytics {
  analyticsProperty: string;
  analyticsClient: GA4;

  constructor(analyticsProperty: string) {
    this.analyticsProperty = analyticsProperty;
    this.analyticsClient = ReactGA;
    this.analyticsClient.initialize(GOOGLE_ANALYTICS_ID);
  }

  sendPageView(page: string) {
    this.analyticsClient.send({ hitType: "pageview", page });
  }

  sendAnalytics(event: any) {
    this.analyticsClient.event(event);
  }
}

export default Analytics;
