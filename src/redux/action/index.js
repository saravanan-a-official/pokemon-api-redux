import * as CommonConstants from "../../common/commonConstants";
export function formOnSubmit(formData) {
  return { type: CommonConstants.SUBMIT_ACTION, payload: formData };
}
