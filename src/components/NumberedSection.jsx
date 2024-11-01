import { Typography } from "@material-tailwind/react";
import PointsList from "./PointsList";

const NumberedSection = ({ heading, items }) => {
  return (
    <div className="w-full px-6 py-12">
      <Typography variant="h4" className="text-left mb-4">
        {heading}
      </Typography>

      <hr className="border-black mb-6 w-full" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <div className="flex items-center space-x-4">
              <div
                className={`flex justify-center items-center h-12 w-12 rounded-full text-white font-bold ${
                  index === 1 ? "bg-teal-500" : "bg-gray-800"
                }`}
              >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
              <Typography variant="h6" className="font-bold text-gray-700">
                {item.description}
              </Typography>
            </div>

            {item.listPoints && (
              <div className="ml-16 mt-4">
                <PointsList listPoints={item.listPoints} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberedSection;
