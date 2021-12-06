#!/bin/bash

# If not loged in:
#     npm login

rm -rf dist
ng build ngx-pinch-zoom --configuration=production
cd dist/ngx-pinch-zoom
npm publish
cd ../..
