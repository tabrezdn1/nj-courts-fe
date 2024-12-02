import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Heading from "../../components/Heading";
import PointsList from "../../components/PointsList";
import { useState } from "react";
import { postExpungementInfo } from "../../data/configs";

const PostExpungementInfo = () => {
  const { heading, tabs } = postExpungementInfo;
  const [activeTab, updateActiveTab] = useState(tabs[0].value);

  return (
    <Card
      className="w-full overflow-y-auto mt-16 md:mt-0"
      shadow={false}
      role="region"
      aria-labelledby="post-expungement-info-heading"
    >
      <Heading heading={heading} id="post-expungement-info-heading" />
      <CardBody className="font-normal px-8">
        <Tabs
          className="mt-6 w-auto"
          value={activeTab}
          aria-label="Post Expungement Information Tabs"
        >
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            {tabs.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => updateActiveTab(value)}
                className={activeTab === value ? "text-gray-900" : ""}
                aria-selected={activeTab === value}
                role="tab"
                id={`tab-${value}`}
                aria-controls={`tabpanel-${value}`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {tabs.map(({ value, desc, list }) => (
              <TabPanel
                key={value}
                value={value}
                role="tabpanel"
                id={`tabpanel-${value}`}
                aria-labelledby={`tab-${value}`}
              >
                {desc && (
                  <Typography
                    color="gray"
                    className="py-1 text-sm md:text-2xl"
                    aria-live="polite"
                  >
                    {desc}
                  </Typography>
                )}
                <PointsList listPoints={list} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default PostExpungementInfo;
