/// <reference types="@figma/plugin-typings" />

figma.showUI(__html__, { width: 300, height: 400 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "export-colours") {
    const colours = figma.getLocalPaintStyles().map((style) => ({
      name: style.name,
      color: style.paints[0].type === "SOLID" ? rgbToHex(style.paints[0].color) : null,
    }));

    figma.ui.postMessage({ type: "colours", colours });
  }

  if (msg.type === "close") {
    figma.closePlugin();
  }
};

function rgbToHex(color: RGB): string {
  const toHex = (c: number) => Math.round(c * 255).toString(16).padStart(2, "0");
  return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
}
