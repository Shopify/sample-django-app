var EditableTarget;

(function (EditableTarget) {
  EditableTarget["Input"] = "INPUT";
  EditableTarget["Textarea"] = "TEXTAREA";
  EditableTarget["Select"] = "SELECT";
  EditableTarget["ContentEditable"] = "contenteditable";
})(EditableTarget || (EditableTarget = {}));

function isInputFocused() {
  if (document == null || document.activeElement == null) {
    return false;
  }

  const {
    tagName
  } = document.activeElement;
  return tagName === EditableTarget.Input || tagName === EditableTarget.Textarea || tagName === EditableTarget.Select || document.activeElement.hasAttribute(EditableTarget.ContentEditable);
}

export { isInputFocused };
