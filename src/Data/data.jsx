import React from "react";
import FindJobs from "../Screen/FindJobs/findJobs";

export const navData = [
  { name: "Find Jobs", path: "/" },
  { name: "Top Companies", path: "/topcompanies" },
  { name: "Job Tracker", path: "jobtracker" },
  { name: "My Calendar", path: "/mycalendar" },
  { name: "Documents", path: "/documents" },
  { name: "Messages", path: "/messages" },
  { name: "Notifications", path: "/notifications" },
];

export const routes = [
  {
    path: "/",
    element: React.createElement(FindJobs),
  },
];

export const jobData = [
  { title: "Profile Visitors", job: "140" },
  { title: "Resume Viewers", job: "20" },
  { title: "My Jobs", job: "88" },
];

export const locationData = [
  { value: "karachi", label: "karachi Sindh" },
  { value: "Hyderabad", label: "Hyderabad" },
];

export const jobsData = [
  { value: "seo", label: "Seo" },
  { value: "marketing", label: "Marketing" },
];

export const featuredJobData = [
  {
    title: "Promoted",
    position: "UI/UX Designer",
    text: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago | 22 applicants",
  },

  {
    title: "Promoted",
    position: "UI/UX Designer",
    text: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago | 22 applicants",
  },

  {
    title: "Promoted",
    position: "UI/UX Designer",
    text: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago | 22 applicants",
  },

  {
    title: "Promoted",
    position: "UI/UX Designer",
    text: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago | 22 applicants",
  },

  {
    title: "Promoted",
    position: "UI/UX Designer",
    text: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago | 22 applicants",
  },
];

export const recommendedjobData = [
  {
    position: "UI/UX Designer",
    text: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago | 22 applicants",
  },

  {
    position: "UI/UX Designer",
    text: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago | 22 applicants",
  },

  {
    position: "UI/UX Designer",
    text: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago | 22 applicants",
  },

  {
    position: "UI/UX Designer",
    text: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago | 22 applicants",
  },

  {
    position: "UI/UX Designer",
    text: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago | 22 applicants",
  },
];
