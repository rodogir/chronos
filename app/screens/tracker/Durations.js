import moment from "moment";

const FORMAT_SHORT = "short";

function msToDuration(durationInMs) {
  return moment.duration(durationInMs);
}

function numberToTwoDigitString(number) {
  return number.toLocaleString(undefined, { minimumIntegerDigits: 2 });
}

function formatShort(duration) {
  const formattedHours = numberToTwoDigitString(duration.hours());
  const formattedMinutes = numberToTwoDigitString(duration.minutes());
  const formattedSeconds = numberToTwoDigitString(duration.seconds());
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function format(duration, selectedFormat = FORMAT_SHORT) {
  switch (selectedFormat) {
    case FORMAT_SHORT:
      return formatShort(duration);
    default:
      return `Format ${selectedFormat} is not supported.`;
  }
}

export {
  FORMAT_SHORT,
  msToDuration,
  format,
};
