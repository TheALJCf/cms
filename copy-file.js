const fs = require("fs");
const path = require("path");

//Add SRC folder to this Array
const folder = ["api","services"]

for (var name of folder) {
  const srcDir = path.join(__dirname, "src/" + name);
  const destDir = path.join(__dirname, "build/" + name);

  // Check if source directory exists
  if (fs.existsSync(srcDir)) {
    fs.mkdirSync(destDir, { recursive: true });

    fs.readdirSync(srcDir).forEach(file => {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    });

    console.log(`✅ ${name} folder copied to build directory!`);
  } else {
    console.log(`⚠️ No ${name} folder found in src!`);
  }
}


