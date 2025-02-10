Figma Colour Exporter
======================

Figma Colour Exporter is a simple plugin that extracts all local colour styles from a Figma file 
and exports them as a structured JSON file. This allows developers and designers to seamlessly 
sync colour palettes with WordPress block themes or other projects.

Features:
---------
- Extracts all local paint styles.
- Converts colours to HEX codes.
- Exports a 'figma-colours.json' file.
- Easy integration with WordPress block themes.

Installation:
-------------
1. Clone the repository:
   git clone https://github.com/yourusername/figma-colour-exporter.git

2. Install dependencies:
   npm install

3. Compile the TypeScript code:
   tsc

4. Load the plugin in Figma:
   - Open Figma → Plugins → Development → Import Plugin from Manifest.
   - Select the 'manifest.json' file.

Usage:
------
1. Open Figma and run 'Figma Colour Exporter' from the plugin list.
2. Click 'Export Colours'.
3. A 'figma-colours.json' file will download.
4. Use this file in WordPress to sync colours.

Development:
------------
- Modify 'code.ts' for logic.
- Modify 'ui.html' for UI changes.
- Run 'tsc' after making changes.

License:
--------
This project is licensed under the MIT License.
Feel free to contribute or modify as needed.
