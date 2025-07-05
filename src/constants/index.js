export const sidebarLinks = [
  {
    imgUrl: "/DashboardLayout.png",
    label: "Dashboard",
    path: "/dashboard",
    role: "common",
  },
  {
    imgUrl: "/newticket.png",
    label: "New Ticket",
    path: "/new-ticket",
    role: "user",
  },
  {
    imgUrl: "/myticket.png",
    label: "My Tickets",
    path: "/my-tickets",
    role: "user",
  },
  {
    imgUrl: "/database.svg",
    label: "Database",
    path: null,
    role: "admin",
  },
  {
    imgUrl: "/settings.svg",
    label: "Setting",
    path: null,
    role: "admin",
  },
  {
    imgUrl: "/userlog.svg",
    label: "Users Log",
    path: null,
    role: "admin",
  },
];
export const topBarLinks = [
  { imgUrl: "/notification.svg", label: "Notifications" },
  { imgUrl: "/profile.svg", label: "Profile" },
  { imgUrl: "/signout.svg", label: "Sign Out" },
];
export const dashboardCards = [
  { label: "Total Tickets", value: 12, color: "#2F82FF" },
  { label: "Total Solved", value: 8, color: "#0BFF68" },
  { label: "Total awaiting approval", value: 2, color: "#FE594E" },
  { label: "Total in progress", value: 2, color: "#FCFF6C" },
];
