const FORMAT_SHORT = "short";

const numberToTwoDigitString =
  number => number.toLocaleString(undefined, { minimumIntegerDigits: 2 });

const formatShort = duration => {
  const formattedHours = numberToTwoDigitString(duration.hours());
  const formattedMinutes = numberToTwoDigitString(duration.minutes());
  const formattedSeconds = numberToTwoDigitString(duration.seconds());
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const format = (duration, selectedFormat = FORMAT_SHORT) => {
  switch (selectedFormat) {
    case FORMAT_SHORT:
      return formatShort(duration);
    default:
      return `Format ${selectedFormat} is not supported.`;
  }
};

export {
  FORMAT_SHORT,
  format,
};
