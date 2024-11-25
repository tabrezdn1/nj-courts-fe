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
  Chip,
  CardFooter,
  Switch,
} from "@material-tailwind/react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

const Sidebar = (props) => {
  const { t, i18n } = useTranslation();
  const [openAccordions, setOpenAccordions] = React.useState({});
  // const NJCOURTS_SVG_URL =
  //   "https://portalselfreg-cloud.njcourts.gov/prweb/PRServletPublicAuth/app/ESSOPortal_/yq-No0lmafOUvv0O-O5GtbIFqEhzNFKZ*/esso/njcourtslogo_12624293735.svg!!.svg";

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
  const AccodionItems = props?.items ?? [];

  const handleLanguageChange = (isChecked) => {
    const lang = isChecked ? "es" : "en";
    i18n.changeLanguage(lang);
  };

  return (
    <div className="h-full flex-[0.20] ">
      <Card className="h-[calc(100vh-2rem)] w-full min-w-[20rem] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 overflow-auto">
        <Link to="/">
          <div className="flex items-center  w-fit">
            <img src="/logo.svg" alt="logo" className="h-24" />
          </div>
        </Link>
        <div className="flex items-center justify-center p-4">
          <Switch
            label="ESPANIOL 🇪🇸"
            ripple={true}
            onChange={(e) => handleLanguageChange(e.target.checked)}
          />
        </div>

        {AccodionItems.map((accordionItem, accordionIndex) => (
          <Accordion
            open={openAccordions[accordionIndex] ?? false}
            key={`${accordionItem}-${accordionIndex}`}
            icon={<Icon rotate={openAccordions[accordionIndex]} />}
          >
            <AccordionHeader onClick={() => toggleAccordion(accordionIndex)}>
              {t(`sidebar.${accordionIndex}.title`)}
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
                        {t(`sidebar.${accordionIndex}.menu.${menuIndex}.label`)}
                        {menuItem?.chip?.length && (
                          <ListItemSuffix>
                            <Chip
                              value={t(
                                `sidebar.${accordionIndex}.menu.${menuIndex}.chip`
                              )}
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
  );
};

export default Sidebar;
