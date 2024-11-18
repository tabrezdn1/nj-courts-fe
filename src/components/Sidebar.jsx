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
  Input,
  ListItemSuffix,
  Chip
} from "@material-tailwind/react";
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
        >
          <div className="flex items-center space-x-2">
            <Bars3Icon className="h-6 w-6" />
            <Typography variant="h5" color="white">
              NJ Courts Forms
            </Typography>
          </div>
        </button>
      )}



      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex-[0.20]`}
      >
        <Card className="h-full w-full min-w-[20rem] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-auto">
          <Link to="/">
            <div className="mb-2 flex items-center gap-4 p-4">
              <img src="/nj-courts.jpeg" alt="brand" className="h-8 w-8" />
              <Typography variant="h5" color="blue-gray">
                NJ Courts Forms
              </Typography>
            </div>
          </Link>

          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>

          {AccodionItems.map((accordionItem, accordionIndex) => (
            <Accordion
              open={openAccordions[accordionIndex] ?? false}
              key={`${accordionItem}-${accordionIndex}`}
              icon={<Icon rotate={openAccordions[accordionIndex]} />}
            >
              <AccordionHeader onClick={() => toggleAccordion(accordionIndex)}>
                {accordionItem.title}
              </AccordionHeader>
              {openAccordions[accordionIndex] && (
                <AccordionBody>
                  <List>
                    {accordionItem?.menu.map((menuItem, menuIndex) => (
                      <NavLink
                        to={`${accordionItem.link}${menuItem.link}`}
                        key={`${accordionItem}-${accordionIndex}-${menuIndex}-${menuIndex}`}
                      >
                        <ListItem>
                          {menuItem.label}
                          {menuItem?.chip?.length && (
                            <ListItemSuffix>
                              <Chip
                                value="ONLINE"
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
        </Card>
      </div>

      {/* Overlay for Mobile View */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
