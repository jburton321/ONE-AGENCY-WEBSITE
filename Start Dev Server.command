#!/bin/bash
cd "$(dirname "$0")"

# Load nvm if you use it
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# Load fnm if you use it
[ -s "$HOME/.local/share/fnm/fnm.env" ] && eval "$(fnm env)"

echo "Starting Solvior dev server..."
npm run dev

echo ""
echo "Press any key to close this window."
read -n 1
