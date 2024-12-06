import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import LegalMate from "./LegalMate";

const Sidebar = (props) => {
  const [openAccordions, setOpenAccordions] = React.useState({});
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  function Icon({ rotate }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${rotate ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        aria-hidden="true" // Added for accessibility
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }

  const toggleAccordion = (index) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const AccodionItems = props?.items ?? [];

  return (
    <>
      {!isSidebarOpen && (
        <button
          className="md:hidden fixed top-0 left-0 w-full z-50 bg-teal-500 text-white p-4 flex items-center shadow-lg"
          onClick={toggleSidebar}
          aria-label="Open sidebar" // Added for accessibility
        >
          <div className="flex items-center space-x-2">
            <Bars3Icon className="h-6 w-6" aria-hidden="true" color="white"/>{" "}
            {/* Added aria-hidden for icon */}
            <Typography
              variant="h5"
              color="white"
              className="text-shadow"
              style={{ textShadow: "1px 1px 0 black" }}
            >
              LegalAid App
            </Typography>
          </div>
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex-[0.20]`}
        role="navigation" // Added role for better accessibility
        aria-label="Main navigation" // Added aria-label for better accessibility
      >
        <Card className="h-full w-full min-w-[20rem] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-auto">
          <Link
            to="/"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Go to home"
          >
            <div className="flex items-center w-fit">
              <img src="/logo.svg" alt="LegalAid logo" className="h-24" />
            </div>
          </Link>

          <div className="p-2">
            <LegalMate />
          </div>

          {AccodionItems.map((accordionItem, accordionIndex) => (
            <Accordion
              open={openAccordions[accordionIndex] ?? false}
              key={`${accordionItem}-${accordionIndex}`}
              icon={<Icon rotate={openAccordions[accordionIndex]} />}
            >
              <AccordionHeader
                onClick={() => {
                  toggleAccordion(accordionIndex);
                }}
              >
                {accordionItem.title}
              </AccordionHeader>
              {openAccordions[accordionIndex] && (
                <AccordionBody id={`accordion-body-${accordionIndex}`}>
                  <List>
                    {accordionItem?.menu.map((menuItem, menuIndex) => (
                      <NavLink
                        to={`${accordionItem.link}${menuItem.link}`}
                        key={`${accordionItem}-${accordionIndex}-${menuIndex}-${menuIndex}`}
                        onClick={() => setIsSidebarOpen(false)}
                        aria-label={`Navigate to ${menuItem.label}`} // Added for accessibility
                      >
                        <ListItem>
                          {menuItem.label}
                          {menuItem?.chip?.length && (
                            <ListItemSuffix>
                              <Chip
                                value="Online"
                                size="sm"
                                variant="ghost"
                                color="blue-gray"
                                className="rounded-full"
                              />
                            </ListItemSuffix>
                          )}
                        </ListItem>
                      </NavLink>
                    ))}
                  </List>
                </AccordionBody>
              )}
            </Accordion>
          ))}
          <a
            href="https://legal--aid--ecru-vercel-app.translate.goog/?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src="./google-translate.png"
              alt="Google Translate"
              className="px-8 py-2 mx-auto"
              width="200"
              height="100"
            />
          </a>
        </Card>
      </div>

      {/* Overlay for Mobile View */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
          role="button" // Added role for better accessibility
          aria-label="Close sidebar" // Added for accessibility
        ></div>
      )}
    </>
  );
};

export default Sidebar;
