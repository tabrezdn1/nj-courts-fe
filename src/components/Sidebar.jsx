import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const [openAccordions, setOpenAccordions] = React.useState({});

  const toggleAccordion = (index) => {
    setOpenAccordions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const AccodionItems = props?.items ?? [];

  return (
    <div className="h-full flex-[0.20] ">
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-8 shadow-xl shadow-blue-gray-900/5 overflow-auto">
        <Link to="/">
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="../../public/nj-courts.jpeg"
              alt="brand"
              className="h-8 w-8"
            />
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
                      activeClassName="active"
                      key={`${accordionItem}-${accordionIndex}-${menuIndex}-${menuIndex}`}
                    >
                      <ListItem>{menuItem.label}</ListItem>
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
