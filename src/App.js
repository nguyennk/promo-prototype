import { Toaster } from "react-hot-toast";
import { createServer } from "miragejs";
import "./App.css";
import Dashboard from "./modules/Dashboard";

createServer({
  routes() {
    this.get("/api/fetch_info_bar", () => ({
      balance: 213920,
      payout: 159465,
    }));
    this.get("/api/fetch_promo_services", () => [
      {
        id: "1",
        title: "Siteconstructor.io",
        description: "Description",
        promo_code: "itpromocodes_1",
        is_activated: false,
      },
      {
        id: "2",
        title: "Appvision.com",
        description: "Description",
        promo_code: "itpromocodes_2",
        is_activated: false,
      },
      {
        id: "3",
        title: "Analytics.com",
        description: "Description",
        promo_code: "itpromocodes_3",
        is_activated: true,
      },
      {
        id: "4",
        title: "Logotype",
        description: "Description",
        promo_code: "itpromocodes_4",
        is_activated: false,
      },
    ]);
  },
});

function App() {
  return (
    <>
      <Dashboard />
      <Toaster />
    </>
  );
}

export default App;
