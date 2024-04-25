import EditorJS from "./editorjs.mjs";

const templateOptionsElement = document.getElementById("template-options");
const emptyTemplatesElement = document.getElementById("no-templates");
const addTemplateButton = document.getElementById("add-template-button");
const addTemplateModal = document.getElementById("add-template-modal");
const closeTemplateModalButton = document.getElementById("close-button")

const addTemplate = () => {
  addTemplateModal.showModal();
};

new EditorJS({
  holder: "template-text-area",
  placeholder: "Template text...",
  inlineToolbar: true,
  hideToolbar: true,
});

if (templateOptionsElement.children.length === 0) {
  emptyTemplatesElement.hidden = false;
} else {
  emptyTemplatesElement.hidden = true;
}

addTemplateButton.addEventListener("click", () => addTemplate());
closeTemplateModalButton.addEventListener("click", () => addTemplateModal.close())
