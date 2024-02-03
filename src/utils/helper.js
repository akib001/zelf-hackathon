export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "short", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}

export function truncateString(inputString, maxLength) {
  if (inputString.length > maxLength) {
    return inputString.substring(0, maxLength - 3) + "...";
  }
  return inputString;
}

export function formatNumber(number) {
  try {
    if (typeof number !== "number") {
      throw new Error("Invalid input. Please provide a number.");
    }

    if (number < 0) {
      throw new Error("Invalid input. Please provide a positive number.");
    }

    if (number >= 1000) {
      const formattedNumber = (number / 1000).toFixed(0) + "k";
      return formattedNumber;
    }

    return number.toString();
  } catch (error) {
    console.error(error);
    return "";
  }
}


export const getPlaformIcon = (platform) => {
  switch (platform) {
    case "instagram":
      return "/instagram.svg";
    case "facebook":
      return "/facebook.svg";
    case "tiktok":
      return "/tiktok.svg";
    default:
      return "/instagram.svg";
  }
};
