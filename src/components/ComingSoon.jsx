import PropTypes from "prop-types";

const ComingSoon = ({ logoSrc = "/nj-courts.jpeg" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
      <div className="flex items-center space-x-4 mb-8">
        <img
          src={logoSrc}
          alt="NJ Courts Logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <h1 className="text-3xl sm:text-5xl font-semibold text-gray-800">
          New Jersey Courts
        </h1>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        Coming Soon
      </h2>
    </div>
  );
};

ComingSoon.propTypes = {
  logoSrc: PropTypes.string,
};

export default ComingSoon;
