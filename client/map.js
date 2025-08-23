// map.js
import fs from "fs";
import DottedMap from "dotted-map";

// DottedMap.default is the actual constructor
const map = new DottedMap.default({ height: 100, grid: "diagonal" });

const svgMap = map.getSVG({
  radius: 0.22,
  color: "white",
  shape: "circle",
  backgroundColor: "transparent", // transparent background
});

fs.writeFileSync("./public/world-map.svg", svgMap, "utf-8");
console.log("✅ Transparent dotted map generated at public/world-map.svg");
