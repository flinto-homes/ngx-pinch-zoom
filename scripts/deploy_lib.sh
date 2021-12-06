#!/bin/bash

# If not loged in:
#     npm login

rm -rf dist
ng build ngx-drag-scroll --configuration=production
cd dist/ngx-drag-scroll
npm publish
cd ../..
