// Section 4: Vodafone Exercise

let arrayOfData = [
  { state: "error", errorCode: "NO_STOCK" },
  { state: "processing", errorCode: null },
  { state: "error", errorCode: "INCORRECT_DETAILS" },
  { state: "error", errorCode: null },
  { state: "error", errorCode: undefined },
  { state: "success", errorCode: null },
  { state: "", errorCode: null },
];
const DELAY_TIME = 2000; // 2s

/**
 * Gets the processing page
 * @param {array} data
 */

async function getProcessingPage(arrayOfData) {
  let i,
    length = arrayOfData.length;
  for (i = 0; i < length; i++) {
    switch (arrayOfData[i].state) {
      case "processing":
        await wait(DELAY_TIME);
        processingFunc();
        break;
      case "error":
        errorFunc(arrayOfData[i].errorCode);
        break;
      case "success":
        successFunc();
        break;
      default:
        return;
    }
  }
}
const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

const processingFunc = () => {
  console.log("processingFunc");
};

const errorFunc = (errorCode) => {
  let errorObject = { title: "Error page", message: "" };
  switch (errorCode) {
    case "NO_STOCK":
      errorObject.message = "No stock has been found";
      break;
    case "INCORRECT_DETAILS":
      errorObject.message = "Incorrect details have been entered";
      break;
    case null:
      errorObject.message = null;
      break;
    case undefined:
      errorObject.message = null;
      break;
    default:
      return;
  }
  console.log("errorFunc ", errorObject);
  return errorObject;
};

const successFunc = () => {
  let successObject = { title: "Order complete", message: null };
  console.log("successFunc", successObject);
  return successObject;
};

getProcessingPage(arrayOfData);
