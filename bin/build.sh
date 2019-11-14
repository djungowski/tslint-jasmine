TARGET_DIR="dist"

npx tsc
cp configs/* ${TARGET_DIR}/
cp tslint.json ${TARGET_DIR}/

node bin/generate_package_json_for_build.js