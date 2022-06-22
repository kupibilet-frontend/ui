#!/bin/bash

BABEL_ENV=alias NODE_ENV=production babel components -d components --extensions '.ts' --keep-file-extension
BABEL_ENV=alias NODE_ENV=production babel hooks -d hooks --extensions '.ts' --keep-file-extension
BABEL_ENV=alias NODE_ENV=production babel utils -d utils --extensions '.ts' --keep-file-extension
