import React, { useState, useEffect } from "react";
import SidebarLink from "./SidebarLink";
import SidebarToggle from "./SidebarToggle";
import LogOutButton from "./LogOutButton";
import { FaPlus, FaBook, FaCog, FaRegCommentAlt } from "react-icons/fa";

function SidebarVisible({ hideSidebar, icon, visible }) {
  const [sidebarEntries, setSidebarEntries] = useState([]);

  useEffect(() => {
    getSidebarEntries();
  }, []);

  const getSidebarEntries = async () => {
    const url = `/api/sidebar_entry_links`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return setSidebarEntries(data);
    } catch (e) {
      console.error(e);
    }
  };

  const sidebarEntriesList = sidebarEntries.map((entrySidebarLink) => {
    return (
      <SidebarLink
        destination={`/entries/${entrySidebarLink[0]}`}
        key={entrySidebarLink[0]}
        content={entrySidebarLink[1]}
        icon={<FaRegCommentAlt />}
      />
    );
  });

  return (
    <section className="flex h-full flex-col justify-between gap-4   p-4 underline-offset-4 ">
      <div className="flex flex-col items-center gap-2 2xl:items-stretch">
        <div className="mb-1 flex flex-col-reverse items-center gap-2 lg:flex-row">
          <SidebarLink
            destination="/entries/new"
            content="New Entry"
            icon={<FaPlus />}
          />
          <SidebarToggle
            hideSidebar={hideSidebar}
            icon={icon}
            visible={visible}
          />
        </div>

        <SidebarLink
          destination="/entries"
          content="All Entries"
          icon={<FaBook />}
        />
        <div className="flex flex-col gap-4  pt-8">
          <h1 className="border-b border-b-white font-bold">Recent Entries</h1>
          {sidebarEntriesList}
        </div>
      </div>
      <div className="mb-1 flex flex-col items-center gap-4">
        <SidebarLink
          destination="/settings"
          content="Settings"
          icon={<FaCog />}
        />
        <LogOutButton />
      </div>
    </section>
  );
}

export default SidebarVisible;
