const templateOptionsElement = document.getElementById("template-options");
const emptyTemplatesElement = document.getElementById("no-templates");

if (templateOptionsElement.children.length === 0) {
  emptyTemplatesElement.hidden = false;
} else {
  emptyTemplatesElement.hidden = true;
}
