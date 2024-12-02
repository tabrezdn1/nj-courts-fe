const NavigateLink = ({ link, label }) => {
  return (
    <div className="navigateLinks align-center targetEffect color-4">
      <a href={link} aria-label={label} className="flex items-center">
        <span>{label}</span>
      </a>
    </div>
  );
};

export default NavigateLink;
