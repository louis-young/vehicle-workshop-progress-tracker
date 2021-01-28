const formatRegistration = (registration) => {
  const formattedRegistration = registration.replace(/ /g, "").toUpperCase();

  return formattedRegistration;
};

export { formatRegistration };
