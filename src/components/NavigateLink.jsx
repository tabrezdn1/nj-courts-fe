const NavigateLink = ({ link, label }) => {
  return (
    <div className="navigateLinks align-center targetEffect color-4">
      <span>
        <a href={link}>
          <span>{label}</span>
        </a>
      </span>
    </div>
  );
};

export default NavigateLink;
